import React from 'react';
import { Col, Row } from 'react-bootstrap';

function dataF(dados) {
  return (
    <div className="col-data">
      <Col xs={4} className="col-esp mr-3" title={dados.label}>
        {dados.label}
      </Col>
      <Col xs={2} className="col-esp ml-3" title={dados.value} color="#000000">
        R$
        {' '}
        {dados.value}
      </Col>
      <Col md="2" className="circle-align">
        <div className="circle ml-3" />
      </Col>
      <Col xs={4} className="col-esp2" title={dados.percentage}>
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
  const slices = {};
  dados.forEach((element, index) => {
    slices[index] = { color: element.color };
  });
  return (
    <>
      <div>
        <Row className="col-data2">
          <h5>{name.name}</h5>
        </Row>
        <Row>{dados.map((element) => dataF(element))}</Row>
        <Row className="col-data3">
          <Col xs={4} className="col-esp mr-3" title="Total">
            <b>TOTAL</b>
          </Col>
          <Col xs={4} className="col-esp ml-3" title="Total de gastos">
            R$
            {' '}
            {total}
          </Col>
          <Col xs={3} className="col-esp2" title="Total porcentagem">
            <p>100%</p>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Format;
