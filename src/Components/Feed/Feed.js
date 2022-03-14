import React from 'react';
import TweetBox from './TweetBox';
import TweetPost from './TweetPost';
import './Feed.css';

const Feed = () => {
  return (
    <div className='feed'>
      <div className='feed_header'>
        <h2>Home</h2>
      </div>
      <TweetBox />
      <TweetPost />
      <TweetPost />
      <TweetPost />
    
      
    </div>
  );
};

export default Feed;
