import React from 'react';
import './SpentDataMobile.css';
import {
  Row, Col
} from 'react-bootstrap';
import IconShareBlack from '../../images/share-black.png';
import IconGasto from '../../images/gasto.png';
import IconAnexo from '../../images/anexo.png';
import IconGrafico from '../../images/grafico.png';

// function spentRow() {
//   return (
//     <Row className="col-line-top">
//       <Col md="3">Divulgação da Atividade Parlamentar.</Col>
//       <Col md="2">R$6.325,00</Col>
//       <Col md="2">Cota Parlamentar</Col>
//       <Col md="2">18/03/2020</Col>
//       <Col md="2">TAMIRYS MACHADO...</Col>
//       <Col md="1"><img src={IconAnexo} alt="Anexo" className="icon-anexo" /></Col>
//     </Row>
//   );
// }

// const spentArray = [spentRow, spentRow, spentRow];

function DataVoting() {
  return (
    <div>
      <Row>
        <Col md="12">
          <img src={IconGasto} alt="Gasto" className="icon-gasto" />
          GASTOS
          <img src={IconShareBlack} alt="Share" className="icon-share-black-mb-spent" />
          <img src={IconGrafico} alt="Grafico" className="icon-grafico-mb" />
        </Col>
      </Row>
      <div className="d-flex justify-content-center div-body">
        <Row className="background-div-1">
          <Col>
            <Row>
              <Col className="text-sm">Serviço:</Col>
              <Col className="d-flex justify-content-end text-sm">18/03/2020</Col>
            </Row>
            <Row>
              <Col md="12" className="p-table col-line-top">
                <p>
                  Divulgação da Atividade Parlamentar.
                </p>
              </Col>
              <Col md="12" className="col-line-top">
                Valor:
                <p>8.697,96</p>
              </Col>
              <Col md="12" className="col-line-top">
                Tipo de gasto:
                <p>Cota parlamentar</p>
              </Col>
              <Col md="12" className="col-line-top">
                Razão Social:
                <p>TAMIRYS MACHADO DE ALCANTARA ALMEIDA LTDA</p>
              </Col>
              <Col md="12" className="d-flex justify-content-center col-line-top">
                <img src={IconAnexo} alt="Anexo" className="icon-anexo-mb" />
                <img src={IconShareBlack} alt="Share" className="icon-share-table-mb icon-share-mb-spent" />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <Row>
        <Col md="12" className="alinhamento-end">VER MAIS</Col>
      </Row>
    </div>
  );
}

export default DataVoting;
