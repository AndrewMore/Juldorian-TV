import React from 'react';
import PropTypes from 'prop-types';
import VideoListEntry from './VideoListEntry.jsx';

const VideoList = (props) => {
  return (
    <div className="video-list">
      {props.videos.map((video, index) => (
        <VideoListEntry
          key={index}
          video={video}
          changeVid={props.changeVid}
        />
      ))}
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
