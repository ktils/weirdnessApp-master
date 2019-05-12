import React, {Component} from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/SearchBar';
import GifPopulation from './components/GifPopulation';
import request from 'superagent';
import './App.css';

  class App extends Component{

    constructor(props) {
      super(props);

      this.state = {
      gifs: []
    }
  
  }

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
        
        </div>
      </div>
    );
  }
}

export default App