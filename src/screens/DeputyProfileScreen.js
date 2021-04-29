import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import DataVoting from '../components/DataVoting/DataVoting';
import DataVotingMobile from '../components/DataVoting/DataVotingMobile';
import SpentData from '../components/SpentData/SpentData';
import SpentDataMobile from '../components/SpentData/SpentDataMobile';
import Perfil from '../components/Profile/Profile';
import PerfilMobile from '../components/Profile/ProfileMobile';
import '../css/DeputyProfileScreen.css';
import IconFace from '../images/face.png';
import IconInsta from '../images/insta.png';
import IconTT from '../images/twitter.png';
import { profileRoute } from '../Api';
import News from '../components/News/News';
import NewsMobile from '../components/News/NewsMobile';

function DeputyProfileScreen() {
  const { id } = useParams();
  const [deputado, setDeputado] = useState({});

  useEffect(() => {
    axios.get(profileRoute(id)).then((response) => {
      // console.log('string:: ', response.data);
      setDeputado(response.data);
    });
  }, []);

  function calculateAge(birthday) {
    // birthday is a date
    const ageDifMs = Date.now() - new Date(birthday).getTime();
    const ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  return (
    <main>
      <Container className="d-block d-sm-none">
        <PerfilMobile deputy={deputado} />
        <Row className="space" />
        <DataVotingMobile />
        <Row className="space" />
        <SpentDataMobile />
        <Row className="space" />
        <NewsMobile />
      </Container>
      <Container className="d-none d-sm-block">
        <Perfil deputy={deputado} />
        <Row className="space" />
        <DataVoting />
        <Row className="space" />
        <SpentData />
        <Row className="space" />
        <News />
      </Container>
      <Row className="space" />
    </main>
  );
}

export default DeputyProfileScreen;
