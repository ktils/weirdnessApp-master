import React, {Component} from 'react';
import GifPics from '../components/GifPics';

class FavoriteGifs extends Component {

    render(){
        return(
            <div className="favoriteGifs"> 
            <img src={this.props.favs}/>
            </div>
        )
    }

}

export default FavoriteGifs;