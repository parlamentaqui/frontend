import React from 'react';
import './index.css';
import { Container, Row, Col } from 'react-bootstrap';
import TweetEmbed from 'react-tweet-embed';

function Tweet(props) {
  const { tweets } = props;
  return (
    <div className="tweet-wrapper">
      <Container>
        <Row>
          {tweets.map((tweet) => (
            <Col lg="12">
              <TweetEmbed key={tweet.tweet_id} id={`${tweet.tweet_id}`} />
              {console.log(tweet.tweet_id)}
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Tweet;
