import { getElementError } from '@testing-library/react';
import React from 'react';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import './News.css';

function News(props) {
  const { news } = props;
  let { quantity } = props;
  quantity = !quantity ? news.length : quantity;
  return (
    <div className="root">
      <Row>
        {news.slice(0, quantity).map((element) => (
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