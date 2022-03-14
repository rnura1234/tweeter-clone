import { Avatar } from '@mui/material';
import React from 'react';
import VerifiedIcon from '@mui/icons-material/Verified';
import './TweetPost.css';
import { ChatBubbleOutline, FavoriteBorder, Publish, Repeat } from '@mui/icons-material';
const Tweetpost = ({ avtar, displayName, userName, userIsVarified, postText, postImage }) => {
  return (
    <div className='post'>
      <div className='post_user'>
        <Avatar
          src='https://pbs.twimg.com/profile_images/1498882259515940864/AJK8r-Wy_400x400.jpg'
          sx={{ width: 50, height: 50 }}
        />
      </div>
      <div className='post_body'>
        <div className='post_body--header'>
          <span className='post_body--displayName'>Sanjeev</span>
          <span className='post_body--isVerified'>
            <VerifiedIcon sx={{ fontSize: '20px' }} />
          </span>
          <span className='post_body--username'>@sanjeev123</span>
        </div>
        <div className='post_body--content'>
          <p>
            {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, tempore? Blanditiis consequatur pariatur
            odio? At nobis maiores earum placeat odit!
          </p>
        </div>

        <img
          className='post_body--img'
          src='https://pbs.twimg.com/profile_images/1498882259515940864/AJK8r-Wy_400x400.jpg'
          alt='postimage'
        />
        <div className="post__footer">
          <ChatBubbleOutline/>
          <Repeat />
          <FavoriteBorder />
          <Publish/>
        </div>
      </div>
    </div>
  );
};

export default Tweetpost;
