import { getElementError } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import './News.css';
import { deputyNewsRoute } from '../../Api';

function News() {
  const history = useHistory();
  const id = history.location.pathname.split('/')[2];
  const [news, setNews] = useState([]);

  useEffect(async () => {
    const result = await axios(deputyNewsRoute(id));
    setNews(result.data);
  }, []);

  return (
    <div className="root">
      <h2 className="title">Notícias</h2>
      <Row>
        {news.slice(0, 3).map((element) => (
          <Col xs={6}>
            <Card>
              <Card.Img variant="top" src={element.photo} className="img" />
              <Card.Body>
                <Card.Text className="title">{element.title}</Card.Text>
                <Card.Text className="text pt-2">
                  {element.deputy_name}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default News;
