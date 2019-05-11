import React, {Component} from 'react';

class Posts extends Component{
constructor(props){
    super(props);
    this.state = {
        post: []
    }
}
    componentWillMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => this.setState({post: data}));
    }

    render(){
        const postNames = this.state.post.map(post =>
            <div key={post.id}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
            );
        return(
            <div>
            <h1>Hey bro what's the deal</h1>
            <p>{postNames}</p>
            </div>
        )
    }
}

export default Posts