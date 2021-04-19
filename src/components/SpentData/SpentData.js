import React, { useState, useEffect } from 'react';
import './SpentData.css';
import axios from 'axios';
import {
  Row, Col
} from 'react-bootstrap';
import IconShareBlack from '../../images/share-black.png';
import IconGasto from '../../images/gasto.png';
import IconFiltro from '../../images/filtro.png';
import IconAnexo from '../../images/anexo.png';
import IconGrafico from '../../images/grafico.png';
import { expenseRoute } from '../../Api';

export function defineDate(date) {
  const data = new Date(date);
  const dia = data.getDate().toString();
  const diaF = dia.length === 1 ? '0'.concat(dia) : dia;
  const mes = (data.getMonth() + 1).toString();
  const mesF = mes.length === 1 ? '0'.concat(mes) : mes;
  const anoF = data.getFullYear();
  const str = '';

  return str.concat(diaF, '/', mesF, '/', anoF);
}

function spentRow(expense) {
  return (
    <Row className="col-line-top">
      <Col md="3">
        { expense.expenses_type }
      </Col>
      <Col md="2">
        R$
        { expense.document_value }
      </Col>
      <Col md="2">Cota Parlamentar</Col>
      <Col md="2">
        { defineDate(expense.document_date) }
      </Col>
      <Col md="2">
        { expense.supplier_name }
      </Col>
      <Col md="1">
        <a href={expense.document_url}>
          <img src={IconAnexo} alt="Anexo" className="icon-anexo" />
        </a>
      </Col>
    </Row>
  );
}

const spentArray = [spentRow, spentRow, spentRow];

function DataVoting(props) {
  const { deputy } = props;
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    axios.get(expenseRoute(204549)).then((response) => {
      setExpenses(response.data);
      console.log(response.data);
    });
  }, []);

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
          {expenses.slice(0, 5).map((element) => (
            spentRow(element)
          ))}
          <Row className="col-line-top">
            <Col md="12" className="alinhamento-end">VER MAIS</Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default DataVoting;
