import React, { Component } from 'react';
import '../styles/forumPost.css';

class ForumPost extends Component {
  state = {  } 
  render() { 
    const {author, time} = this.props;
    
    return (
      <div id="container" aria-label={"Post by " + author + " made on " + time + ": " + this.props.children}>
        <p><b>{author}</b> - {time}</p>
        {this.props.children}
      </div>
    );
  }
}
 
export default ForumPost;