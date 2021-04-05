import React from 'react';
import {
  Container, Row, Col
} from 'react-bootstrap';
import DataVoting from '../components/DataVoting/DataVoting';
import DataVotingMobile from '../components/DataVoting/DataVotingMobile';
import SpentData from '../components/SpentData/SpentData';
import SpentDataMobile from '../components/SpentData/SpentDataMobile';
import Tweet from '../components/Tweet/Tweet';
import Perfil from '../components/Profile/Profile';
import PerfilMobile from '../components/Profile/ProfileMobile';
import '../css/DeputyProfileScreen.css';

function DeputyProfileScreen() {
  return (
    <main>
      <Container className="d-block d-sm-none">
        <PerfilMobile />
        <Row className="space" />
        <DataVotingMobile />
        <Row className="space" />
        <SpentDataMobile />
      </Container>
      <Container className="d-none d-sm-block">
        <Perfil />
        <Row className="space" />
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
