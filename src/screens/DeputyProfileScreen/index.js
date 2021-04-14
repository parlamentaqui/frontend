import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import DataVotingMobile from '../../components/DataVoting/DataVotingMobile';
import SpentData from '../../components/SpentData/SpentData';
import SpentDataMobile from '../../components/SpentData/SpentDataMobile';
import Perfil from '../../components/Profile/Profile';
import PerfilMobile from '../../components/Profile/ProfileMobile';
import './index.css';
// import IconFace from '../images/face.png';
// import IconInsta from '../images/insta.png';
// import IconTT from '../images/twitter.png';
import { profileRoute } from '../../Api';
import DataVoting from '../../components/DataVoting/DataVoting';

function DeputyProfileScreen() {
  const { id } = useParams();
  const [deputado, setDeputado] = useState({});
  useEffect(() => {
    axios.get(profileRoute(id)).then((response) => {
      setDeputado(response.data);
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
      </Container>
      <Container className="d-none d-sm-block">
        <Perfil deputy={deputado} />
        <Row className="space" />
        <DataVoting />
        <Row className="space" />
        <SpentData />
      </Container>
      <Row className="space" />
    </main>
  );
}

export default DeputyProfileScreen;
