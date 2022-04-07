import React from 'react';

import { Search } from '@mui/icons-material';
import './Widgets.css';
import {
  TwitterTimelineEmbed,
  TwitterHashtagButton,
  TwitterTweetEmbed,
  TwitterDMButton,
  TwitterVideoEmbed,
} from 'react-twitter-embed';
const Widgets = () => {
  return (
    <div className='widgets'>
      <div className='widgets_input'>
        <Search className='widgets_search' />
        <input type='search' placeholder='Search Twitter' />
      </div>
      <div className='widgets_container'>
        <h2>What's happing?</h2>
        <TwitterTweetEmbed tweetId={'933354946111705097'} />
        <TwitterDMButton id={1364031673} />
        <TwitterVideoEmbed id={'560070183650213889'} />
        <TwitterTimelineEmbed sourceType='profile' screenName='saurabhnemade' />
        <TwitterHashtagButton tag={'cybersecurity'} />
      </div>
    </div>
  );
};

export default Widgets;
