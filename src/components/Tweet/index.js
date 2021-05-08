import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './index.css';
import TweetEmbed from 'react-tweet-embed';
import { deputyTweetsRoute } from '../../Api';

function Tweet(props) {
  const { tweets } = props;
  return (
    <div className="tweet-wrapper">
<<<<<<< HEAD
      <h2 className="title mb-3">Tweets</h2>
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
=======
      <Container>
        <Row>
          {tweets.map((tweet) => (
            <Col lg="12">
              <TweetEmbed key={tweet.tweet_id} id={`${tweet.tweet_id}`} />
            </Col>
          ))}
        </Row>
      </Container>
>>>>>>> origin/devel
    </div>
  );
}

export default Tweet;
