import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './index.css';
import { Container, Row, Col } from 'react-bootstrap';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { deputyTweetsRoute } from '../../Api';

function tweetCol(tweet) {
  return (
    <Col lg="12">
      <TwitterTweetEmbed key={tweet.tweet_id} tweetId={`${tweet.tweet_id}`} />
    </Col>
  );
}

function Tweet() {
  const history = useHistory();
  const id = history.location.pathname.split('/')[2];
  const [tweet, setTweet] = useState([]);

  useEffect(async () => {
    axios.get(deputyTweetsRoute(id)).then((response) => {
      setTweet(response.data);
      console.log(response.data);
    });
  }, []);

  const tweetArray = [tweet, tweet, tweet];

  return (
    <div className="tweet-wrapper">
      <Container>
        <Row>{tweetArray.map(tweetCol)}</Row>
      </Container>
    </div>
  );
}

export default Tweet;
