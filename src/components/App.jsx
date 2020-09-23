import React from 'react';
import VideoPlayer from './VideoPlayer.jsx';
import VideoList from './VideoList.jsx';
import exampleVideoData from '../data/exampleVideoData.js';
import Search from './Search.jsx';
import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // videoList: [],
      // currentVideo: {},
      videoList: exampleVideoData,
      currentVideo: exampleVideoData[0],
      query: '',
    };
    this.onListEntryClick = this.onListEntryClick.bind(this);
    this.changeVideoList = this.changeVideoList.bind(this);
  }

  onListEntryClick(video) {
    this.setState({
      currentVideo: video,
    });
  }

  changeVideoList(event) {
    const { query } = this.state;
    this.setState({
      query: event.target.value,
    }, () => {
      const options = { query, max: 5, key: YOUTUBE_API_KEY };
      searchYouTube(options, (data) => {
        this.setState({ videoList: data });
        // console.log(data);
      });
    });
  }

  render() {
    const { currentVideo, videoList } = this.state;
    return (
      <div>
        <header>
          <img className="myBoys" src="../src/data/Julian.png" alt="Julian" />
          <div className="flex-column">
            <h1 className="title">Julian & Dorian TV</h1>
            <nav className="navbar">
              <div className="col-md-6 offset-md-3">
                <Search changeVideoList={this.changeVideoList} />
              </div>
            </nav>
          </div>
          <img className="myBoys" src="../src/data/Dorian.png" alt="Dorian" />
        </header>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList videos={videoList} changeVid={this.onListEntryClick} />
          </div>
        </div>
      </div>
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
