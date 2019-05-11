import React, {Component} from 'react';

class SearchBar extends Component{
    constructor(){
        super();

        this.state = {term: ''};
    }

    onClick = (target) => {
        const term = this.refs.textBoxField.value;

        this.setState({term});
        this.props.onTermChange(term)
    }

    render(){
        return(
            <div>
                <p>Find out how weird you are by selecting the GIFs that make you. We'll show you the least weird ones to start, but you can move the slider to make them weirder.<br /><br />
                When you find a GIF you like, press the like button. Once you like 5 GIFs, we'll show you how weird you are.</p>
                <div className="search">
                    <span className="searchBoxText">Search Term:</span>
                    <input ref="textBoxField" />
                    <button onClick={this.onClick} class="searchButton">SEARCH</button>
                </div>
            </div>
        )
    }
}

export default SearchBar;