import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import { Button } from '@mui/material';
import { addDoc, doc, setDoc, collection } from "firebase/firestore";

import './TweetBox.css';
import { db } from '../../firebase';

const Tweetbox = () => {
  const [textMessage, setTextMessage] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const sendTweet = async (e) => {
    e.preventDefault();
    console.log('print');

    await addDoc(collection(db, 'posts'), {
      avatar: 'https://pbs.twimg.com/profile_images/1498882259515940864/AJK8r-Wy_400x400.jpg',
      displayName: 'SanjeevKumar',
      userName: 'sanjeev2121',
      userIsVarified: true,
      postText: textMessage,
      postImage: imgUrl,
    });

    
    window.location.reload(false);
    setTextMessage('');
    setImgUrl('');
  };
  return (
    <div className='tweetBox'>
      <form onSubmit={sendTweet}>
        <div className='tweetBox_input'>
          <Avatar
            src='https://pbs.twimg.com/profile_images/1498882259515940864/AJK8r-Wy_400x400.jpg'
            sx={{ width: 50, height: 50 }}
          />
          <input
            type='text'
            value={textMessage}
            onChange={(e) => {
              setTextMessage(e.target.value);
            }}
            placeholder='What’s happaning?'
          />
        </div>
        <input
          type='url'
          value={imgUrl}
          onChange={(e) => {
            setImgUrl(e.target.value);
          }}
          className='tweetBox_imageInput'
          placeholder='Optional: Enter image url'
        />
        <Button className='tweetBox_tweetBtn' type='submit'>
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default Tweetbox;
