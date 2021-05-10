import React from 'react';
import './index.css';
import { Container, Row, Col } from 'react-bootstrap';
import { TwitterTweetEmbed } from 'react-twitter-embed';

function Tweet(props) {
  const { tweets } = props;
  return (
    <div className="tweet-wrapper">
      <Container>
        <Row>
          {tweets.map((tweet) => (
            <Col lg="12">
              <TwitterTweetEmbed
                key={tweet.tweet_id}
                id={`${tweet.tweet_id}`}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Tweet;
