import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './index.css';
import { Row, Col, Form } from 'react-bootstrap';
import IconCompare from '../../images/compare.png';
import IconVoltar from '../../images/voltar.png';
import IconOcultar from '../../images/ocultar.png';
import { profileRoute, deputadosHomeRoute, expenseRoute } from '../../Api';

function ComparationSpent() {
  const { id } = useParams();
  const [deputado, setDeputado] = useState({});
  const [deputados, setDeputados] = useState({});
  useEffect(() => {
    axios.get(profileRoute(id)).then((response) => {
      setDeputado(response.data);
    });
    axios.get(deputadosHomeRoute).then((response) => {
      setDeputados(response.data);
      console.log('eeeee', response.data);
    });
  }, []);
  return (
    <div className="d-flex justify-content-center">
      <Row className="background-div-1">
        <Col>
          <Row>
            <Col md="10">
              <img
                src={IconCompare}
                alt="Comparacao"
                className="icon-compare"
              />
              COMPARAÇÃO DE GASTOS
            </Col>
            <Col md="1" className="ali">
              <img src={IconVoltar} alt="Voltar" className="icon-compare" />
            </Col>
            <Col md="1" className="ali">
              <img src={IconOcultar} alt="Ocultar" className="icon-compare" />
            </Col>
          </Row>
          <Row className="col-line-top">
            <Col md="6" className="center">
              {` ${deputado.full_name}`}
            </Col>
            <Col md="6" className="center">
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Control as="select">
                  {/* {deputados.map((element) => (
                    <option selected value={element.name}>
                      {element.name}
                    </option>
                  ))} */}
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md="3" className="center">
              Descrição
            </Col>
            <Col md="2" className="center left">
              Valor
            </Col>
            <Col md="1" className="center">
              %
            </Col>
            <Col md="3" className="center">
              Descrição
            </Col>
            <Col md="2" className="center left">
              Valor
            </Col>
            <Col md="1" className="center">
              %
            </Col>
          </Row>
          <Row className="pb-2" />
          <Row className="col-line-top">
            <Col md="12" className="alinhamento-end">
              VER MAIS
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default ComparationSpent;
