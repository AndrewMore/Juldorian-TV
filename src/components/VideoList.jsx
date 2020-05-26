var VideoList = (props) => {
  var video = getVideo(props.videos);
  return (
    <div className="video-list">
      <div><h5><em>Video</em>{props.videos.map(video =>
        <VideoListEntry video={video} />
      )}</h5></div>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
