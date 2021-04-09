import React, { useEffect, useState } from 'react';
import {
  Row,
  Container,
  Col
} from 'react-bootstrap';
import axios from 'axios';
import Logo from '../../images/Logo.svg';
import './index.css';
import MobileLogo from '../../images/LogoMobile.svg';
import News from '../../components/News/News';
import Tweet from '../../components/Tweet/Tweet';
import { homeNewsRoute, deputadosHomeRoute } from '../../Api';
import DeputiesList from '../../components/DeputiesList/DeputiesList';

function HomeScreen() {
  const [news, setNews] = useState([]);
  const [deputados, setDeputados] = useState([]);
  useEffect(() => {
    axios.get(homeNewsRoute).then((response) => {
      setNews(response.data);
    });
    axios.get(deputadosHomeRoute).then((response) => {
      setDeputados(response.data);
      console.log(deputados);
    });
  }, []);

  return (
    <Container as="main" className="layout">
      <Row className="justify-content-center">
        {/* Imagem principal - Logo */}
        <img src={Logo} alt="Logo" className="fullImage" />
        <img src={MobileLogo} alt="Logo" className="smallImage" />
      </Row>

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

          <h3 className="recentActivity">Noticias recentes</h3>
          <Row className="mt-3">
            <News news={news} quantity={2} />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default HomeScreen;
