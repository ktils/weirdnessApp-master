import React, {Component} from 'react';

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