import React from 'react';
import './Tweet.css';
import { Container, Row, Col } from 'react-bootstrap';
import { TwitterTweetEmbed } from 'react-twitter-embed';

function tweetCol(tweet) {
  return (
    <Col lg="12">
      <TwitterTweetEmbed
        tweetId={tweet.tweetId}
      />
    </Col>
  );
}

function Tweet() {
  const tweet = {
    tweetId: '933354946111705097'
  };

  const tweetArray = [tweet, tweet];

  return (
    <div className="tweet-wrapper">
      <Container>
        <Row>
          {tweetArray.map(tweetCol)}
        </Row>

      </Container>

    </div>
  );
}

export default Tweet;
