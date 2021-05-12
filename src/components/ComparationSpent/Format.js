import React from 'react';
import './index.css';

function dataComparation(dados) {
  return (
    <Col xs={12}>
      <Row className="charts-row py-2">
        <Col xs={6}>aa</Col>
        <Col xs={4} className="d-flex align-items-center">
          R$
          {/* {' '} */}
          aa
          {/* {',00'} */}
        </Col>
        <Col xs={2} aa className="d-flex align-items-center">
          aa %
        </Col>
      </Row>
    </Col>
  );
}
export default dataComparation;
