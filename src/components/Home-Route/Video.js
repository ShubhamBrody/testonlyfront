import React from 'react';

const Video = ({ youtubeId }) => {
  return (
      <iframe
        title={youtubeId}
        style={{
          width: '100%',
          height: '80%',
        }}
        src={`https://www.youtube.com/embed/${youtubeId}`}
        frameBorder='0'
        allowFullScreen='allowfullscreen'
        mozallowfullscreen='mozallowfullscreen'
        msallowfullscreen='msallowfullscreen'
        oallowfullscreen='oallowfullscreen'
        webkitallowfullscreen='webkitallowfullscreen'
      />
  );
};

export default Video;