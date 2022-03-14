import { Avatar } from '@mui/material';
import React from 'react';
import { Button } from '@mui/material';

import './TweetBox.css';
const Tweetbox = () => {
  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox_input'>
          <Avatar src='https://pbs.twimg.com/profile_images/1498882259515940864/AJK8r-Wy_400x400.jpg' sx={{width:50,height:50}}  />
          <input type='text' placeholder='What’s happaning?' />
        </div>
        <Button className='tweetBox_tweetBtn'>Tweet</Button>
      </form>
    </div>
  );
};

export default Tweetbox;
