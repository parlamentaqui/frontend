import React from 'react';
import './index.css';
import TweetEmbed from 'react-tweet-embed';

function Tweet(props) {
  const { tweets } = props;
  return (
    <div className="tweet-wrapper">
      {tweets.map((tweet) => (
        <TweetEmbed key={tweet.tweet_id} id={`${tweet.tweet_id}`} />
      ))}
    </div>
  );
}

export default Tweet;
