import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { CardGroup, Col, Row } from 'react-bootstrap';
import './News.css';
import { deputyNewsRoute } from '../../Api';

function News() {
  const history = useHistory();
  const id = history.location.pathname.split('/')[2];
  const [news, setNews] = useState([]);

  useEffect(async () => {
    axios.get(deputyNewsRoute(id)).then((response) => {
      setNews(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div>
      <Row>
        <h2 className="title">Notícias</h2>
      </Row>
      <div className="root">
        <Row>
          {news.slice(0, 3).map((element) => (
            <Row className="card-news">
              <Col md="4">
                <img src={element.photo} alt="Profile" className="img-news" />
              </Col>
              <Col md="6">
                <h12 className="text-news-font">{element.source}</h12>
                <h5 className="text-news-title">{element.title}</h5>
                <p className="text-news-body">{element.abstract}</p>
              </Col>
            </Row>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default News;
