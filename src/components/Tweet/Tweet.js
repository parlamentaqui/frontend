import React from 'react';
import './Tweet.css';
import { Container, Row, Col } from 'react-bootstrap';
import { TwitterTweetEmbed } from 'react-twitter-embed';

function tweetCol(tweet) {
  return (
    <Col lg="12" key={tweet}>
      <TwitterTweetEmbed
        tweetId={tweet}
      />
    </Col>
  );
}

function Tweet(props) {
  const { tweets } = props;
  return (
    <div className="tweet-wrapper">
      <Container>
        <Row>
          {tweets.map(tweetCol)}
        </Row>

      </Container>

    </div>
  );
}

export default Tweet;
