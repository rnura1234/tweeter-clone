import React, { useEffect, useState } from 'react';

import TweetBox from './TweetBox';
import TweetPost from './TweetPost';
import './Feed.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
// import { collection, getDocs } from 'firebase/firestore';
import FlipMove from 'react-flip-move';
const Feed = () => {
  const [tweetPost, setTweetPost] = useState([]);

  useEffect(() => {
    const getCities = async (db) => {
      const citiesCol = collection(db, 'posts');
      const citySnapshot = await getDocs(citiesCol);
      const cityList = citySnapshot.docs.map((doc) => doc.data());
      setTweetPost(cityList);
    };
    getCities(db);
  }, []);

  return (
    <div className='feed'>
      <div className='feed_header'>
        <h2>Home</h2>
      </div>
      <TweetBox />
      {console.log(tweetPost)}
      {tweetPost.map((tweetPostItem, index) => {
        return (
          <FlipMove>
            <TweetPost
              key={index}
              avtar={tweetPostItem.avtar}
              displayName={tweetPostItem.displayName}
              userName={tweetPostItem.userName}
              userIsVarified={tweetPostItem.userIsVarified}
              postText={tweetPostItem.postText}
              postImage={tweetPostItem.postImage}
            />
          </FlipMove>
        );
      })}
    </div>
  );
};

export default Feed;
