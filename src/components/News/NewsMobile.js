import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import './NewsMobile.css';
import ShareButton from '../ShareButton/index';
import { deputyNewsRoute } from '../../Api';

function News() {
  const history = useHistory();
  const id = history.location.pathname.split('/')[2];
  const [news, setNews] = useState([]);
  const shareLink = (element) => element.link;
  const shareMessage = (element) => `Confira a notícia sobre o deputado ${element.deputy_name}: ${element.title}%0aVia parlamentaqui.com`;
  useEffect(async () => {
    const result = await axios(deputyNewsRoute(id));
    setNews(result.data);
  }, []);

  return (
    <Container>
      <Row>
        <h2 className="title">Notícias</h2>
      </Row>
      <div className="root">
        <Row>
          {news.slice(0, 3).map((element) => (
            <div>
              <Row className="card-news-mb">
                <Col md="4">
                  <h12 className="text-news-font-mb">{element.source}</h12>
                  <img
                    src={element.photo}
                    alt="Profile"
                    className="img-news-mb"
                  />
                </Col>
                <Col md="8">
                  <h5 className="text-news-title-mb">{element.title}</h5>
                  <p className="text-news-body-mb">{element.abstract}</p>
                </Col>
              </Row>
              <ShareButton
                message={shareMessage(element)}
                link={shareLink(element)}
              />
            </div>
          ))}
        </Row>
      </div>
    </Container>
  );
}

export default News;
