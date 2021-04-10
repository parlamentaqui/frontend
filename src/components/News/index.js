import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import ShareButton from '../ShareButton';
import './index.css';

function News(props) {
  const { news } = props;
  let { quantity } = props;
  quantity = !quantity ? news.length : quantity;
  const shareMessage = (element) => `Confira a notícia sobre o deputado ${element.deputy_name}: ${element.title} Via parlamentaqui.com`;
  const shareLink = (element) => element.link;
  return (
    <div className="root news-wrapper">
      <Row>
        {news.slice(0, quantity).map((element) => (
          <Col xs={6}>
            <Card>
              <Card.Img variant="top" src={element.photo} className="img" />
              <Card.Body>
                <Card.Text className="title">{element.title}</Card.Text>
                <Card.Text className="text pt-2 d-flex justify-content-between">
                  {element.deputy_name}
                  <ShareButton
                    message={shareMessage(element)}
                    link={shareLink(element)}
                  />
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
