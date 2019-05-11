import React, {Component} from 'react';

const API = 'https://api.giphy.com/v1/gifs/search?api_key=pA8B5nghSwXAPOfFKQgaxQWmG4NZicHd&q=&limit=25&offset=0&rating=G&lang=en'
const DEFAULT_QUERY = 'redux';

class Gifs extends Component {
    constructor(props){
        super(props);

        this.state = {
            gif: [],
        };
    }

    componentDidMount(){
        fetch(API + DEFAULT_QUERY)
        .then(response => response.json())
        .then(data => this.setState({gif: data.gif}));
    }

    render(){
      const {gif} = this.state;
        
        return(
           <ul>
               {gif.map(g =>
                <li key={g.objectID}>
                
                </li>
               )}
           </ul>
        )
    }
}
    





export default Gifs;