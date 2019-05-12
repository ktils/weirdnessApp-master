# weirdnessApp-master

Welcome to the Weirdness App. This is app judge your weirdness based on the gifs you choose and add to your favorites. 

Installation

1. npm install --save redux
2. npm install superagent or yarn add superagent
3. npm install react react-dom

Usage

import React, {Component} from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/SearchBar';
import GifPopulation from './components/GifPopulation';
import request from 'superagent';
import './App.css';
import FavoriteGifs from './components/FavoriteGifs';

  class App extends Component{

    // Create array from gifs property to store from GifPopulation component
    constructor(props) {
      super(props);

      this.state = {
      gifs: []
    }
  
  }

  // Makes the api call to giphy api with res = result for data being received. Added array index 0 to only show gif in GifPics component
  handleTermChange(term){
    const url = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=pA8B5nghSwXAPOfFKQgaxQWmG4NZicHd`;

    request.get(url, (err, res) => {
      this.setState({ gifs: res.body.data })
    });
  }

  render(){
  
    return(
      <div>
        <div className="header">Weirdness Calculator</div>
        <div className="leftPanel">
        <SearchBar onTermChange={term => this.handleTermChange(term)}/>
        <GifPopulation gifs={this.state.gifs}/>
        <FavoriteGifs />
        
        </div>
      </div>
    );
  }
}

NOTE: This repo is not complete. Must add redux render and bind to GifPics component and FavoriteGifs components. 

