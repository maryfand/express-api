import React, { Component } from 'react';
import map from 'lodash/fp/map';
import axios from 'axios';
import { Link } from 'react-router';


export default class PostList extends Component {
  constructor() {
    super();
    this.state={
      posts: []
    };
  }
  getStyles() {
     return {
       content: {
         position: 'relative',
         width: '100%',
         height: '60px',
         maxWidth: '600px',
         margin: '20px auto',
         backgroundColor: '#fff',
         borderRadius: '5px',
         padding: '16px',
         boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
       },
       title: {
         fontSize: '1.2em'
       },
       button: {
         display: 'block',
         margin: '30px auto',
         width: '120px',
         height: '36px',
         lineHeight: '36px',
         textAlign: 'center',
         backgroundColor: '#ff4081',
         fontSize: '1em',
         color: '#fff',
         textDecoration: 'none',
         borderRadius: '20px'
       },
       actions: {
         position: 'absolute',
         bottom: '16px',
         right: '16px'
       },
       link: {
         display: 'inline-block',
         fontSize: '.9em',
         color: '#00bcd4',
         opacity: '.8',
         textDecoration: 'none',
         paddingLeft: '10px',
         paddingRight: '10px'
       }
     }
   }
  componentWillMount() {
    //  Promise
    axios.get('http://localhost:4000/posts').then(res => {
      // console.log('axios');
      this.setState({
        posts: res.data.posts
      });
      // console.log(this.state.posts);
    });
  }
  handleClick() {
    alert('hello clicked');
  }
  render() {
    const styles = this.getStyles();
    const postList = map((post) => {
      return (
        <div style={styles.content} key={post._id}>
          <div style={styles.title}>{post.title}</div>
          <div style={styles.actions}>
            <Link to={`/posts/${post._id}`} style={styles.link}>查看</Link>
            <Link to={`/posts/${post._id}/edit`} style={styles.link}>编辑</Link>
            <Link to={``} style={styles.link} onClick={this.handleClick}>删除</Link>
          </div>
        </div>
      )
    }, this.state.posts);
    return(
      <div>
        <Link to="/write" style={styles.button}>写文章</Link>
        { postList }
      </div>
    );
  }
}
