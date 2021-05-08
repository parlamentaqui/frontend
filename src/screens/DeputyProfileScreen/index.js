import axios from 'axios';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import React, { useEffect, useState } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import DataVotingMobile from '../../components/DataVoting/DataVotingMobile';
import SpentData from '../../components/SpentData/SpentData';
import SpentDataMobile from '../../components/SpentData/SpentDataMobile';
import Perfil from '../../components/Profile/Profile';
import PerfilMobile from '../../components/Profile/ProfileMobile';
import './index.css';
import { deputyTweetsRoute, profileRoute } from '../../Api';
import DataVoting from '../../components/DataVoting/DataVoting';
import News from '../../components/News/News';
import Tweets from '../../components/Tweet/index';
import NewsMobile from '../../components/News/NewsMobile';

function DeputyProfileScreen() {
  const history = useHistory();
  const location = useLocation();
  const id = history.location.pathname.split('/')[3];
  const [deputado, setDeputado] = useState({});
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    axios.get(profileRoute(id)).then((response) => {
      setDeputado(response.data);
    });
    axios.get(deputyTweetsRoute(id)).then((response) => {
      setTweets(response.data);
    });
  }, []);
  return (
    <main>
      <Container className="d-block d-sm-none">
        <PerfilMobile deputy={deputado} />
        <Row className="space" />
        <DataVotingMobile />
        <Row className="space" />
        <SpentDataMobile />
        <NewsMobile />
        <Tweets tweets={tweets} />
      </Container>
      <Container className="d-none d-sm-block">
        <Perfil deputy={deputado} />
        <Row className="space" />
        <DataVoting />
        <Row className="space" />
        <SpentData />
        <Row className="space" />
        <Row>
          <Col md="6">
            <News />
          </Col>
          <Col md="6">
            <Tweets tweets={tweets} />
          </Col>
        </Row>
      </Container>
      <Row className="space" />
    </main>
  );
}

export default DeputyProfileScreen;
