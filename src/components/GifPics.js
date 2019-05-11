import React, {Component} from 'react';

const GifPics = (image) => {
  return (
    <div className="gifImgs">
     <img src={image.gif.images.downsized.url} />
    </div>
  )
};

export default GifPics;