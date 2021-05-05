import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './index.css';
import TweetEmbed from 'react-tweet-embed';
import { deputyTweetsRoute } from '../../Api';

function Tweet() {
  const history = useHistory();
  const id = history.location.pathname.split('/')[2];
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    axios.get(deputyTweetsRoute(id)).then((response) => {
      setTweets(response.data);
    });
  }, []);
  return (
    <div className="tweet-wrapper">
      <h2 className="title mb-3">Tweets</h2>
      <Row>
        {tweets.map((item) => (
          <Col lg="12">
            <TweetEmbed key={item.tweet_id} id={`${item.tweet_id}`} />
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
