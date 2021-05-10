import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './index.css';
import TweetEmbed from 'react-tweet-embed';

function Tweet(props) {
  const { tweets, showTitle = true } = props;
  return (
    <div className="tweet-wrapper">
      {showTitle && <h2 className="title mb-3">Tweets</h2>}
      <Row>
        {tweets.map((tweet) => (
          <Col lg="12">
            <TweetEmbed key={tweet.tweet_id} id={`${tweet.tweet_id}`} />
          </Col>
        ))}
        {tweets.length === 0 && (
          <Col lg="12">
            <h5>Não existem Tweets</h5>
          </Col>
        )}
      </Row>
    </div>
  );
}
export default Tweet;
