import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import '../css/DeputyProfileScreen.css';
import Image from 'react-bootstrap/Image';
import IconFace from '../img/icon-face.png';
import IconInsta from '../img/icon-insta.png';
import IconTT from '../img/icon-tt.png';

function DeputyProfileScreen() {
  const { id } = useParams();
  const urlRequest = `http://localhost:8001/profile/${id}`;
  const [deputado, setDeputado] = useState({});
  useEffect(() => {
    axios.get(urlRequest).then((response) => {
      setDeputado(response.data);
    });
  }, []);
  console.log(id, deputado);
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
                      {deputado.inicial_legislature_year}
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
              <Col className="colImage"><Image src={deputado.photo_url} fluid /></Col>
            </Row>
            <Row>
              <Col className="rowTitle d-flex justify-content-center">Informações pessoais</Col>
            </Row>
            <Row>
              <Col lg="6">
                <div className="colInfo">
                  <p>Nome</p>
                  <p>Partido</p>
                  <p>Estado</p>
                  <p>Idade</p>
                </div>
              </Col>
              <Col lg="6">
                <div className="colInfo1">
                  <p>{deputado.full_name}</p>
                  <p>{deputado.party}</p>
                  <p>{deputado.federative_unity}</p>
                  <p>
                    Idade NAO ACHEI NO DB
                    {deputado.birth_date}
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="rowTitle d-flex justify-content-center">Informações do Gabinete</Col>
            </Row>
            <Row>
              <Col lg="6">
                <div className="colInfo">
                  <p>Número da sala</p>
                  <p>Andar</p>
                  <p>Prédio</p>
                  <p>Telefone</p>
                  <p>Email</p>
                </div>
              </Col>
              <Col lg="6">
                <div className="colInfo1">
                  <p>NUMERO DA SALA NAO TEM NO DB</p>
                  <p>ANDAR NAO TEM NO DB</p>
                  <p>PREDIO NAO TEM NO DB</p>
                  <p>TELEFONE NAO TEM NO DB</p>
                  <p>{deputado.email}</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="rowTitle d-flex justify-content-center">Informações do Gabinete</Col>
            </Row>
            <Row className="rowSocial">
              <Col className="d-flex justify-content-center align-items-center">
                <Image className="icon" src={IconFace} />
              </Col>
              <Col className="d-flex justify-content-center align-items-center">
                <Image className="icon" src={IconInsta} />
              </Col>
              <Col className="d-flex justify-content-center align-items-center">
                <Image className="icon" src={IconTT} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default DeputyProfileScreen;
