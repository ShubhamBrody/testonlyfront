import React from 'react';

const Video = ({ youtubeId }) => {
  return (
    <div
      className='video'
      style={{
        position: 'relative',
        paddingBottom: '56.25%',
        paddingTop: 20,
        height: 0,
      }}
    >
      <iframe
        title={youtubeId}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          paddingLeft: '65px',
          paddingTop: '10px',
          width: '75%',
          height: '70%',
        }}
        src={`https://www.youtube.com/embed/${youtubeId}`}
        frameBorder='0'
        allowFullScreen='allowfullscreen'
        mozallowfullscreen='mozallowfullscreen'
        msallowfullscreen='msallowfullscreen'
        oallowfullscreen='oallowfullscreen'
        webkitallowfullscreen='webkitallowfullscreen'
      />
    </div>
  );
};

export default Video;