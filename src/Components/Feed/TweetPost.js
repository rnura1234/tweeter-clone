import { Avatar } from '@mui/material';
import React, { forwardRef } from 'react';
import VerifiedIcon from '@mui/icons-material/Verified';
import './TweetPost.css';
import { ChatBubbleOutline, FavoriteBorder, Publish, Repeat } from '@mui/icons-material';
const Tweetpost = forwardRef(
  ({ avtar, displayName, userName, userIsVarified, postText, postImage }) => {
    return (
      <div className='post'>
        <div className='post_user'>
          <Avatar src={`${avtar}`} sx={{ width: 50, height: 50 }} />
        </div>
        <div className='post_body'>
          <div className='post_body--header'>
            <span className='post_body--displayName'>{displayName}</span>
            {userIsVarified && (
              <span className='post_body--isVerified'>
                <VerifiedIcon sx={{ fontSize: '20px' }} />
              </span>
            )}
            <span className='post_body--username'>@{userName}</span>
          </div>
          <div className='post_body--content'>
            <p>{postText}</p>
          </div>

          <img className='post_body--img' src={postImage} alt='postimage' />
          <div className='post__footer'>
            <ChatBubbleOutline />
            <Repeat />
            <FavoriteBorder />
            <Publish />
          </div>
        </div>
      </div>
    );
  }
);

export default Tweetpost;
