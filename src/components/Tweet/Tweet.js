import React from 'react';
import './Tweet.css';
import { Container, Row, Col } from 'react-bootstrap';
import { TwitterTweetEmbed } from 'react-twitter-embed';

function tweetCol(tweet) {
  return (
    <Col lg="12">
      <TwitterTweetEmbed key={tweet.tweet_id} tweetId={`${tweet.tweet_id}`} />
    </Col>
  );
}

function Tweet(props) {
  const { tweets } = props;
  console.log(tweets);
  return (
    <div className="tweet-wrapper">
      <Container>
        <Row>{tweets.map(tweetCol)}</Row>
      </Container>
    </div>
  );
}

export default Tweet;
