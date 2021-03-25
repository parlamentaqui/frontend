import React from 'react';
import { Card, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import CardImage from '../../images/CardImage.jpg';
import './News.css';

function News() {
  return (
    <div>
      <Col className="center">
        {/* <Link to={`${noticyArray[0].url}`} className="link"> */}
        <Card className="card">
          <Card.Img variant="top" src={CardImage} />
          <Card.Body>
            {/* <Card.Title>{noticyArray[0].title}</Card.Title>
            <Card.Text>{noticyArray[0].target}</Card.Text>
            <Card.Text>{noticyArray[0].description}</Card.Text> */}
          </Card.Body>
        </Card>
        {/* </Link> */}
      </Col>
    </div>
  );
}

export default News;
