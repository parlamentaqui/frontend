import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import './AuthoredPropositionMobile.css';
import { Row, Col, Button, Collapse, Container } from 'react-bootstrap';
import { propositionsAuthorRoute } from '../../Api';
import IconLampada from '../../images/light-bulb.svg';
import IconSeta from '../../images/seta.png';
import IconOcultar from '../../images/ocultar.png';

function authoredM(prop) {
  return (
    <div className="d-flex justify-content-center div-body">
      <Row className="background-div-1">
        <Col>
          <Row>
            <Row>
              <Col md="12" className="text-table">Título:</Col>
              <Col className="d-flex justify-content-end text-table" title={prop}>
                {prop.descricao_tipo}
                {' '}
                {prop.numero}
                {' '}
                de
                {' '}
                {prop.ano}
                .
              </Col>
              <Col md="12" className="text-table col-line-top">Tema:</Col>
              <Col className="text-table" title={prop}>
                {prop.tema_proposicao}
              </Col>
              <Col
                md="2"
                className="d-flex justify-content-center col-line-top"
                title={prop}
              >
                <Link to={`/projetos/${prop.proposicao_id}`}>
                  <Button className="btn-seta">
                    <img src={IconSeta} alt="Seta" />
                  </Button>
                </Link>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

function AuthorMobile() {
  const history = useHistory();
  const id = history.location.pathname.split('/')[2];
  const [authorP, setAuthor] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios.get(propositionsAuthorRoute(id)).then((response) => {
      setAuthor(response.data);
    });
  }, []);

  const tableComponent = () => (
    <>
      <Row className="col-line-top">
        <Col md="12" className="d-flex justfy-content-start">
          {authorP.map((element) => authoredM(element))}
        </Col>
      </Row>
      <Row className="col-line-top">
        <Col md="12" className="alinhamento-center">
          <a href={`/projetos/${id}`}>VER MAIS</a>
        </Col>
      </Row>
    </>
  );

  return (
    <div className="d-flex justify-content-center">
      <Container>
        <Row>
          <Col md="10" className="d-flex align-items-center">
            <img src={IconLampada} alt="Proposta" className="icon-gasto" />
            PROPOSTAS
          </Col>
        </Row>
        <Row>
          <Col md="12" className="d-flex justfy-content-start">
            {authorP.map((element) => authoredM(element))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AuthorMobile;
