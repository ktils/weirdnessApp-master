import React, {Component} from 'react';
import GifPics from '../components/GifPics';

const GifPopulation = (props) => {
    const gifpics = props.gifs.map((image, index) => {
      return <GifPics key={index} gif={image} />
    });
    
  
    return (
      <div className="gif">
      <ul className="gifList">{gifpics[0]}</ul>
      </div>
    );
  };

export default GifPopulation;
