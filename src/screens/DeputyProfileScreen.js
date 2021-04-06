import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import '../css/DeputyProfileScreen.css';
import Image from 'react-bootstrap/Image';
import IconFace from '../img/icon-face.png';
import IconInsta from '../img/icon-insta.png';
import IconTT from '../img/icon-tt.png';
import { profileRoute } from '../Api';

function DeputyProfileScreen() {
  const { id } = useParams();
  const [deputado, setDeputado] = useState({});
  useEffect(() => {
    axios.get(profileRoute(id)).then((response) => {
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
      <Container>
        <Row>
          {/* Coluna da esquerda / demais informações */}
          <Col>
            <Row>
              <Col>
                {/* Linha com nome e exercicio */}
                <Row>
                  <div>
                    <h4 className="nameDeputy">{deputado.full_name}</h4>
                    <p>
                      TITULAR EM EXERCÍCIO
                      {deputado.initial_legislature_year}
                      {' - '}
                      {deputado.final_legislature_year}
                    </p>
                  </div>
                </Row>
                {/* Linha para demais informações */}
                <Row>
                  <div className="divInfos">
                    <p className="othersInfo" />
                    DEMAIS INFORMAÇÕES
                  </div>
                </Row>
              </Col>
            </Row>
          </Col>
          {/* Coluna da direita / informações pontuais */}
          <Col lg="4" className="divInfoComplete">
            <Row>
              <Col className="colImage">
                <Image src={deputado.photo_url} fluid />
              </Col>
            </Row>
            <Row>
              <Col className="rowTitle d-flex justify-content-center">
                Informações pessoais
              </Col>
            </Row>
            <Row>
              <Col lg="6">
                <div className="colInfo">
                  <p>Nome</p>
                </div>
              </Col>
              <Col lg="6">
                <div className="colInfo1">
                  <p>{deputado.full_name}</p>
                </div>
              </Col>
              <Col lg="6">
                <div className="colInfo">
                  <p>Partido</p>
                </div>
              </Col>
              <Col lg="6">
                <div className="colInfo1">
                  <p>{deputado.party}</p>
                </div>
              </Col>
              <Col lg="6">
                <div className="colInfo">
                  <p>Estado</p>
                </div>
              </Col>
              <Col lg="6">
                <div className="colInfo1">
                  <p>{deputado.federative_unity}</p>
                </div>
              </Col>
              <Col lg="6">
                <div className="colInfo">
                  <p>Idade</p>
                </div>
              </Col>
              <Col lg="6">
                <div className="colInfo1">
                  <p>
                    {deputado.birth_date && calculateAge(deputado.birth_date)}
                    (
                    {
                      new Date(deputado.birth_date)
                        .toLocaleString()
                        .split(' ')[0]
                    }
                    )
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="rowTitle d-flex justify-content-center">
                Informações do Gabinete
              </Col>
            </Row>
            <Row>
              <Col lg="6">
                <div className="colInfo">
                  <p>Número da sala</p>
                </div>
              </Col>
              <Col lg="6">
                <div className="colInfo1">
                  <p>NUMERO DA SALA NAO TEM NO DB</p>
                </div>
              </Col>
              <Col lg="6">
                <div className="colInfo">
                  <p>Andar</p>
                </div>
              </Col>
              <Col lg="6">
                <div className="colInfo1">
                  <p>ANDAR NAO TEM NO DB</p>
                </div>
              </Col>
              <Col lg="6">
                <div className="colInfo">
                  <p>Prédio</p>
                </div>
              </Col>
              <Col lg="6">
                <div className="colInfo1">
                  <p>PREDIO NAO TEM NO DB</p>
                </div>
              </Col>
              <Col lg="6">
                <div className="colInfo">
                  <p>Telefone</p>
                </div>
              </Col>
              <Col lg="6">
                <div className="colInfo1">
                  <p>TELEFONE NAO TEM NO DB</p>
                </div>
              </Col>
              <Col lg="6">
                <div className="colInfo">
                  <p>Email</p>
                </div>
              </Col>
              <Col lg="6">
                <div className="colInfo1">
                  <p>{deputado.email}</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="rowTitle d-flex justify-content-center">
                Informações do Gabinete
              </Col>
            </Row>
            <Row className="rowSocial">
              <Col className="d-flex justify-content-center align-items-center">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`https://www.facebook.com/${deputado.facebook_username}`}
                >
                  <Image className="icon" src={IconFace} />
                </a>
              </Col>
              <Col className="d-flex justify-content-center align-items-center">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`https://www.instagram.com/${deputado.instagram_username}`}
                >
                  <Image className="icon" src={IconInsta} />
                </a>
              </Col>
              <Col className="d-flex justify-content-center align-items-center">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`https://www.twitter.com/${deputado.facebook_username}`}
                >
                  <Image className="icon" src={IconTT} />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default DeputyProfileScreen;
