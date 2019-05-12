import React, {Component} from 'react';

class SearchBar extends Component{
    constructor(){
        super();

        this.state = {term: ''};
    }

    // Checkout function gets value from input and sends Gif population component with props
    checkOut = (target) => {
        const term = this.refs.textBoxField.value;

        this.setState({term});
        this.props.onTermChange(term);

        // Check the status on data being received
        console.log(term);
    }

    render(){
        return(
            <div>
                <p>Find out how weird you are by selecting the GIFs that make you. We'll show you the least weird ones to start, but you can move the slider to make them weirder.<br /><br />
                When you find a GIF you like, press the like button. Once you like 5 GIFs, we'll show you how weird you are.</p>
                
                <div className="search">
                    <span className="searchBoxText">Search Term:</span>
                    <input ref="textBoxField" />
                    <button onClick={this.checkOut} class="searchButton">SEARCH</button>
                    <input class="rangeSlider" type="range" min="0" max="10" onChange={this.checkOut.bind(this)} step="1"/>
                </div>
            </div>
        )
    }
}

export default SearchBar;