import React, { useEffect, useState } from 'react';
import './index.css';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { homeTweetRoute } from '../../Api';

function tweetCol(tweets) {
  return (
    <Col lg="12">
      <TwitterTweetEmbed key={tweets.tweet_id} tweetId={`${tweets.tweet_id}`} />
    </Col>
  );
}

function Tweet() {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    axios.get(homeTweetRoute).then((response) => {
      setTweets(response.data);
    });
  }, []);
  return (
    <div className="tweet-wrapper">
      <Container>
        <Row>{tweets.map(tweetCol(tweets))}</Row>
      </Container>
    </div>
  );
}

export default Tweet;
