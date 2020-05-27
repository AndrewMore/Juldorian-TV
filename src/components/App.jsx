import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import Search from './Search.js';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      videoList: exampleVideoData,
      currentVideo: exampleVideoData[0],
      query: ''
    };
    this.onListEntryClick = this.onListEntryClick.bind(this);
    this.changeVideoList = this.changeVideoList.bind(this);
  }
  onListEntryClick(video) {
    this.setState({
      currentVideo: video
    });
  }
  changeVideoList(event) {
    this.setState({
      query: event.target.value
    }, () => {
      console.log(this.state.query);
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search changeVideoList={this.changeVideoList}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videoList} changeVid={this.onListEntryClick}/>
          </div>
        </div>
      </div>
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
