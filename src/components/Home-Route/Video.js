import React from 'react';

const Video = ({ youtubeId }) => {
  return (
    <div
      className='video'
      style={{
        position: 'relative',
        paddingBottom: '56.25%',
        paddingTop: 20,
        width: "100%",
        height: "auto",
      }}
    >
      <iframe
        title={youtubeId}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          paddingLeft: '75px',
          paddingTop: '40px',
          width: '80%',
          height: '75%',
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