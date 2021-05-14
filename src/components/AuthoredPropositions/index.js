import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import './index.css';
import { Row, Col, Button, Collapse } from 'react-bootstrap';
import { propositionsAuthorRoute } from '../../Api';
import IconLampada from '../../images/light-bulb.svg';
import IconSeta from '../../images/seta.png';
import IconOcultar from '../../images/ocultar.png';

function authoredP(prop) {
  return (
    <Row className="col-line-top">
      <Col md="6" title={prop}>
        {prop.descricao_tipo}
        {' '}
        {prop.numero}
        {' '}
        de
        {' '}
        {prop.ano}
        {'.'}
      </Col>
      <Col md="5" title={prop}>
        {prop.tema_proposicao}
      </Col>
      <Col md="1" title={prop}>
        <Link to={`/proposicao/${prop.proposicao_id}`}>
          <Button className="btn-seta">
            <img src={IconSeta} alt="Seta" />
          </Button>
        </Link>
      </Col>
    </Row>
  );
}

function Author() {
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
        <Col md="6" className="d-flex justfy-content-start">
          <h5>Título</h5>
        </Col>
        <Col md="6" className="d-flex justfy-content-start">
          <h5>Tema</h5>
        </Col>
      </Row>
      {authorP.map((element) => authoredP(element))}
      <Row className="col-line-top">
        <Col md="12" className="alinhamento-end">
          <a href={`/proposicao/${id}`}>VER MAIS</a>
        </Col>
      </Row>
    </>
  );

  return (
    <div className="d-flex justify-content-center">
      <Row className="background-div-1">
        <Col>
          <Row>
            <Col md="10" className="d-flex align-items-center">
              <img src={IconLampada} alt="Proposta" className="icon-gasto" />
              PROPOSTAS
            </Col>
            <Col
              md="2"
              className="d-flex align-items-center justify-content-center"
            >
              <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                className="btn-seta"
              >
                <img src={IconOcultar} alt="Ocultar" />
              </Button>
            </Col>
          </Row>
          <Collapse in={open}>
            <div id="example-collapse-text">{tableComponent()}</div>
          </Collapse>
        </Col>
      </Row>
    </div>
  );
}

export default Author;
