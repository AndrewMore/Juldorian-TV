import React from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({ video: { id, snippet } }) => (
  <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe
        title="Video Player"
        className="embed-responsive-item"
        src={`https://www.youtube.com/embed/${id.videoId}`}
      />
    </div>
    <div className="video-player-details">
      <h3>{snippet.title}</h3>
      <div>{snippet.description}</div>
    </div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: PropTypes.object.isRequired,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoPlayer;
