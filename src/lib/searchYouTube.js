import $ from 'jquery';

const searchYouTube = (options, callback) => {
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      key: options.key,
      q: options.query,
      part: 'snippet',
      maxResults: options.max,
      type: 'video',
      videoEmbeddable: true,
    },
    success(data) {
      // console.log('success!', data);
      callback(data.items);
    },
    error(err) {
      console.error(err);
    },
  });
};

export default searchYouTube;
