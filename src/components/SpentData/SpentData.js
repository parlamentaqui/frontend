import React from 'react';
import './SpentData.css';
import {
  Row, Col
} from 'react-bootstrap';
import IconShareBlack from '../../images/share-black.png';
import IconGasto from '../../images/gasto.png';
import IconFiltro from '../../images/filtro.png';
import IconAnexo from '../../images/anexo.png';
import IconGrafico from '../../images/grafico.png';

function spentRow() {
  return (
    <Row className="col-line-top">
      <Col md="3">Divulgação da Atividade Parlamentar.</Col>
      <Col md="2">R$6.325,00</Col>
      <Col md="2">Cota Parlamentar</Col>
      <Col md="2">18/03/2020</Col>
      <Col md="2">TAMIRYS MACHADO...</Col>
      <Col md="1"><img src={IconAnexo} alt="Anexo" className="icon-anexo" /></Col>
    </Row>
  );
}

const spentArray = [spentRow, spentRow, spentRow];

function DataVoting() {
  return (
    <div className="d-flex justify-content-center">
      <Row className="background-div-1">
        <Col>
          <Row>
            <Col md="10">
              <img src={IconGasto} alt="Gasto" className="icon-gasto" />
              GASTOS
            </Col>
            <Col md="1">
              <img src={IconShareBlack} alt="Share" className="icon-share-black" />
            </Col>
            <Col md="1">
              <img src={IconGrafico} alt="Grafico" className="icon-grafico" />
            </Col>
          </Row>
          <Row className="col-line-top">
            <Col md="3">Serviço</Col>
            <Col md="2">Valor</Col>
            <Col md="2">
              Tipo de gasto
              <img src={IconFiltro} alt="Filtro" className="icon-filtro" />
            </Col>
            <Col md="2">Data</Col>
            <Col md="2">
              Razão Social
              <img src={IconFiltro} alt="Filtro" className="icon-filtro" />
            </Col>
            <Col md="1">NF</Col>
          </Row>
          {spentArray.map(spentRow)}
          <Row className="col-line-top">
            <Col md="12" className="alinhamento-end">VER MAIS</Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default DataVoting;
