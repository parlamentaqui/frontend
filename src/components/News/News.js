import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import './News.css';
import ShareButton from '../ShareButton/index';
import { deputyNewsRoute } from '../../Api';
/* eslint-disable eol-last */

function News() {
  const history = useHistory();
  const id = history.location.pathname.split('/')[2];
  const [news, setNews] = useState([]);
  const shareLink = (element) => element.link;
  const shareMessage = (element) => `Confira a notícia sobre o deputado ${element.deputy_name}: ${element.title}%0aVia parlamentaqui.com`;
  useEffect(async () => {
    axios.get(deputyNewsRoute(id)).then((response) => {
      setNews(response.data);
    });
  }, []);

  return (
    <div>
      <h2 className="title">Notícias</h2>
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
              <Col md="2" className="d-flex align-items-start">
                <ShareButton
                  message={shareMessage(element)}
                  link={shareLink(element)}
                />
              </Col>
            </Row>
          ))}
          {news.length === 0 && (
          <Col lg="12">
            <h5>Não existem Notícias</h5>
          </Col>
          )}
        </Row>
      </div>
    </div>
  );
}

export default News;
