import React, {Component} from 'react';
import GifPics from '../components/GifPics';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {SelectedGif} from '../actions/SelectedGif';
import {App} from '../App';

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

  function mapStateToProps(props){
    return {
      gif: props.gifs
    };
  }

  function matchDispatchToProps(dispatch){
    return bindActionCreators({SelectedGif: SelectedGif}, dispatch)
  }

export default connect(mapStateToProps, matchDispatchToProps)(GifPopulation);
