import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import axios from 'axios';
import './index.css';
import { deputadosHomeRoute } from '../../Api';

function dataC(dados) {
  return (
    <Col xs={12}>
      <Row className="charts-row py-2">
        <Col xs={6} title={dados.label}>
          {dados.label}
        </Col>
        <Col xs={4} title={dados.value} className="d-flex align-items-center">
          R$
          {' '}
          {dados.value}
          {',00'}
          <div className="circle" style={{ backgroundColor: dados.color }} />
        </Col>
        <Col xs={2} title={dados.percentage} className="d-flex align-items-center">
          {dados.percentage.toFixed(1)}
          %
        </Col>
      </Row>
    </Col>
  );
}

function dataComparation() {
  const [deputies, setDeputies] = useState([]);

  useEffect(() => {
    axios.get(deputadosHomeRoute).then((response) => {
      setDeputies(response.data);
      console.log('AQUI MEU DEUS', response.data);
    });
  }, []);
  return (
    <>
      <div>
        <Row className="py-4 table-border-bottom">
          <Col xs={12}>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Control as="select">
                {deputies.map((element) => (
                  <option selected value={element}>
                    {element.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row className="table-data">
          {/* {deputies.map((element) => dataC(element))} */}
        </Row>
        <Row className="pt-2 pb-3">
          <Col xs={6} title="Total">
            <b>TOTAL</b>
          </Col>
          <Col xs={4} title="Total de gastos">
            R$
            {/* {' '}
            {total}
            {',00'} */}
          </Col>
          <Col xs={2} title="Total porcentagem">
            <p>100%</p>
          </Col>
        </Row>
      </div>
    </>
  );
}
export default dataComparation;
