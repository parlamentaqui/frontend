import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Format from './Format';
import ChartPie from './ChartPie';
import './index.css';

function group(expenses) {
  let newExpenses = [];
  expenses.forEach((element) => {
    const index = newExpenses.findIndex(
      (elemNewExpenses) => elemNewExpenses.expenses_type === element.expenses_type
    );
    if (index !== -1) {
      const elementToChange = newExpenses[index];
      elementToChange.document_value += element.document_value;
      newExpenses[index] = elementToChange;
    } else {
      newExpenses = newExpenses.concat({ ...element });
    }
  });
  return newExpenses;
}

function getColor(index) {
  const lista = [
    'Orange',
    'Salmon',
    'ForestGreen',
    'PaleTurquoise',
    'PaleGreen',
    'Moccasin',
    'NavajoWhite',
    'Lavender',
    'MistyRose',
    'Beige',
    'LavenderBlush',
    'Thistle',
    'Burlywood',
    'SkyBlue',
    'Turquoise',
    'PaleGreen',
    'LightPink',
  ];
  return lista[index];
}

function Charts(props) {
  const { expenses } = props;
  const { deputy } = props;
  const dadosAgrupados = group(expenses);
  let total = 0;
  if (dadosAgrupados) {
    dadosAgrupados.forEach((element) => {
      total += element.document_value;
    });
  }
  const custosDeputados = dadosAgrupados.map((element, index) => ({
    label: element.expenses_type,
    value: element.document_value,
    percentage: (element.document_value * 100) / total,
    color: getColor(index),
  }));
  return (
    <>
      <Col>
        <Row className="col-line-top p-0 top-line">
          <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 1 }} className="col-format table-border-right">
            <Format dados={custosDeputados} name={deputy} total={total} />
          </Col>
          <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }} className="align graph-bordered">
            <ChartPie dados={custosDeputados} />
          </Col>
        </Row>
      </Col>
    </>
  );
}

export default Charts;
