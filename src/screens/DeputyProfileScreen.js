import React from 'react';
import {
  Container, Row, Col
} from 'react-bootstrap';
import DataVoting from '../components/DataVoting/DataVoting';
import SpentData from '../components/SpentData/SpentData';
import Tweet from '../components/Tweet/Tweet';
import Perfil from '../components/Profile/Profile';
import '../css/DeputyProfileScreen.css';

function DeputyProfileScreen() {
  return (
    <main>
      <Container>
        <Perfil />
      </Container>

      <Row className="space" />
      <Container>
        <DataVoting />
        <Row className="space" />
        <SpentData />
      </Container>

      <Row className="space" />
      <Container>
        <Row>
          <Col md="6">
            <h1>Notícias</h1>
          </Col>
          <Col md="6" className="body-tweets">
            <h1>Tweets</h1>
            <Tweet />
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default DeputyProfileScreen;
