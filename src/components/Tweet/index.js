import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './index.css';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { deputyTweetRoute } from '../../Api';

function Tweets() {
  const history = useHistory();
  const id = history.location.pathname.split('/')[2];
  const [tweets, setTweets] = useState([]);

  useEffect(async () => {
    const result = await axios(deputyTweetRoute(id));
    setTweets(result.data);
    console.log(setTweets);
  }, []);

  return (
    <div className="tweet-wrapper">
      <Container>
        <Row>
          {tweets.slice(0, 3).map((element) => (
            <Col lg="12">
              <TwitterTweetEmbed>{element.tweet_id}</TwitterTweetEmbed>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
export default Tweets;
