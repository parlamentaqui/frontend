import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Format from './Format';
import PieChart from './PieChart';
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
      <Row className="w-100 borda d-none d-lg-flex">
        <Col xs={6} className="col-format pr-3 d-none d-lg-flex">
          <Format dados={custosDeputados} name={deputy} total={total} />
        </Col>
        <Col xs={6} className="align d-none d-lg-flex">
          <PieChart dados={custosDeputados} />
        </Col>
      </Row>
      <Row className="borda mr-4 ml-2 d-flex d-lg-none">
        <Row className="w-100 align d-flex d-lg-none">
          <PieChart dados={custosDeputados} />
        </Row>
        <Row className="col-format pr-3 d-flex d-lg-none">
          <Format dados={custosDeputados} name={deputy} total={total} />
        </Row>
      </Row>
    </>
  );
}

export default Charts;
