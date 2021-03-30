import React, { useEffect, useState } from 'react';
import {
  Row,
  Container,
  Col,
  Card
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Logo from '../../images/Logo.svg';
import './index.css';
import MobileLogo from '../../images/LogoMobile.svg';
import CardImage from '../../images/CardImage.jpg';
import Tweet from '../../components/Tweet/Tweet';
import DeputiesList from '../../components/DeputiesList/DeputiesList';
import { deputadosHomeRoute } from '../../Api';
import SearchHome from '../../components/SearchHome/SearchHome';

const noticy = {
  title: 'Título da Notícia',
  target: 'Érika Konkay',
  description: 'Lorem Ipsum Dolor hic descrição da noticia xD',
  url: '/noticia/id'
};

const noticyArray = [noticy, noticy];
/* const tweetUrl = '/tweets'; */

function HomeScreen() {
  const [deputados, setDeputados] = useState([]);
  useEffect(() => {
    axios.get(deputadosHomeRoute).then((response) => {
      setDeputados(response.data);
    });
  }, []);

  return (
    <Container as="main" className="layout">
      {/* Primeira linha > Logo */}
      <Row className="justify-content-center pt-3 mt-3">
        {/* Imagem principal - Logo */}
        <img src={Logo} alt="Logo" className="fullImage" />
        <img src={MobileLogo} alt="Logo" className="smallImage" />
      </Row>
      <SearchHome />
      {/* Segunda linha > Atividades recentes / Tweets e noticias */}
      <Row className="justify-content-space-between my-5">
        <Col md="12" lg="6">
          {/* Atividades Recentes */}
          {/* Tamanhos de viewport >>> md = tamanho medio , lg = tamanho grande */}
          <h3 className="recentActivity">Atividades recentes</h3>
          <DeputiesList deputados={deputados} />
        </Col>

        <Col md="12" lg="6">
          {/* Tweets e noticias */}
          {/* <Link to={`${tweetUrl}`} className="link">*
          </Link> */}
          <h3 className="recentActivity">Tweets recentes</h3>
          <Tweet />
          {/* Linha dos cards */}
          <Row className="mt-3">
            {/* Card 1 */}
            <Col className="center">
              <Link to={`${noticyArray[0].url}`} className="link">
                <Card className="card">
                  <Card.Img variant="top" src={CardImage} />
                  <Card.Body>
                    <Card.Title>{noticyArray[0].title}</Card.Title>
                    <Card.Text>{noticyArray[0].target}</Card.Text>
                    <Card.Text>{noticyArray[0].description}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>

            {/* Card 2 */}
            <Col className="center">
              <Link to={`${noticyArray[1].url}`} className="link">
                <Card className="card">
                  <Card.Img variant="top" src={CardImage} />
                  <Card.Body>
                    <Card.Title>{noticyArray[1].title}</Card.Title>
                    <Card.Text>{noticyArray[1].target}</Card.Text>
                    <Card.Text>{noticyArray[1].description}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default HomeScreen;
