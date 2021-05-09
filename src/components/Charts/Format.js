import React from 'react';
import { Col, Row } from 'react-bootstrap';

function dataF(dados) {
  return (
    <div className="col-data">
      <Col xs={4} className="col-esp mr-3 d-none d-lg-flex" title={dados.label}>
        {dados.label}
      </Col>
      <Col xs={2} className="col-esp ml-3 d-none d-lg-flex" title={dados.value}>
        R$
        {' '}
        {dados.value}
      </Col>
      <Col xs={4} className="col-esp3 mr-3 d-flex d-lg-none" title={dados.label}>
        {dados.label}
      </Col>
      <Col xs={3} className="col-esp4 ml-3 d-flex d-lg-none" title={dados.value}>
        R$
        {' '}
        {dados.value}
      </Col>
      <Col md="2" className="circle-align d-none d-lg-flex">
        <div className="circle ml-3" style={{ backgroundColor: dados.color }} />
      </Col>
      <Col xs={2} className="circle-align d-flex d-lg-none">
        <div className="circle ml-3" style={{ backgroundColor: dados.color }} />
      </Col>
      <Col xs={4} className="col-esp2 d-none d-lg-flex" title={dados.percentage}>
        {dados.percentage.toFixed(1)}
        %
      </Col>
      <Col xs={2} className="col-esp5 ml-3 d-flex d-lg-none" title={dados.percentage}>
        {dados.percentage.toFixed(1)}
        %
      </Col>
    </div>
  );
}

function Format(props) {
  const { dados } = props;
  const { name } = props;
  const { total } = props;
  return (
    <>
      <div className="col-ali">
        <Row className="col-data2">
          <h5>{name.name}</h5>
        </Row>
        <Row>
          {dados.map((element) => dataF(element))}
        </Row>
        <Row className="col-data3">
          <Col xs={4} className="col-esp mr-3 d-none d-lg-flex" title="Total">
            <b>TOTAL</b>
          </Col>
          <Col xs={4} className="col-esp ml-3 d-none d-lg-flex" title="Total de gastos">
            R$
            {' '}
            {total}
          </Col>
          <Col xs={3} className="col-esp2 d-none d-lg-flex" title="Total porcentagem">
            <p>100%</p>
          </Col>
          <Col xs={4} className="col-esp3 mr-3 d-flex d-lg-none" title="Total">
            <b>TOTAL</b>
          </Col>
          <Col xs={4} className="col-esp6 d-flex d-lg-none" title="Total de gastos">
            R$
            {' '}
            {total}
          </Col>
          <Col xs={3} className="col-esp3 d-flex d-lg-none ml-2" title="Total porcentagem">
            100%
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Format;
