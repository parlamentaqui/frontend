import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import '../css/DeputyProfileScreen.css';
import Image from 'react-bootstrap/Image';
import ProfileImage from '../img/perfil.png';
import IconFace from '../img/icon-face.png';
import IconInsta from '../img/icon-insta.png';
import IconTT from '../img/icon-tt.png';

function DeputyProfileScreen() {
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
                    <h4 className="nameDeputy">ERIKA KOKAY</h4>
                    <p>TITULAR EM EXERCÍCIO 2019 - 2023</p>
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
              <Col className="colImage"><Image src={ProfileImage} fluid /></Col>
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
                  <p>Érika Jucá Kokay</p>
                  <p>PT</p>
                  <p>Distrito Federal</p>
                  <p>56 (15/08/1957)</p>
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
                  <p>234</p>
                  <p>2</p>
                  <p>4</p>
                  <p>3215-5203</p>
                  <p>dep.erikakokay@camara.leg.br</p>
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
