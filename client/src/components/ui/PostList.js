import React, { Component } from 'react';
import axios from 'axios';


export default class App extends Component {
  constructor() {
    super();
    this.state={
      posts: []
    };
  }
  componentWillMount() {
    console.log('hello will axios');
    //  Promise
    axios.get('http://localhost:3000/posts').then(res => {
      console.log('axios');
      this.setState({
        posts: res.data.posts
      });
      console.log(this.state.posts);
    });
  }
  render() {
    let posts = this.state.posts.map( (item,i) => <p key={i}>第{i+1}条{item.title}</p>)
    return(
      <div>
        {posts}
      </div>
    );
  }
}
