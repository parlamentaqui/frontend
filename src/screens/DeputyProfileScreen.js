import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import '../css/DeputyProfileScreen.css';
import Image from 'react-bootstrap/Image';
import ProfileImage from '../img/perfil.png';
import IconFace from '../img/icon-face.png';
import IconInsta from '../img/icon-insta.png';
import IconTT from '../img/icon-tt.png';

function DeputyProfileScreen(props) {
  const { match } = props;
  const { id } = match.params;

  return (
    <main>
      <Container>
        {id}
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
            <Row className="rowImage">
              <Image src={ProfileImage} fluid />
            </Row>
            <Row className="rowTitle d-flex justify-content-center">
              {' '}
              Redes sociais
            </Row>
            <Row className="rowInfo"> </Row>
            <Row className="rowTitle d-flex justify-content-center">
              {' '}
              Informações do Gabinete
            </Row>
            <Row className="rowInfo" />
            <Row className="rowTitle d-flex justify-content-center">
              {' '}
              Redes sociais
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
