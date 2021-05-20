import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router';
import queryString from 'query-string';
import { Col, Form, Row } from 'react-bootstrap';
import './index.css';
import { allExpenseRoute } from '../../Api';

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
          ,00
        </Col>
        <Col xs={2} title={dados.percentage} className="d-flex align-items-center">
          {dados.percentage.toFixed(1)}
          %
        </Col>
      </Row>
    </Col>
  );
}

function dataComparation(props) {
  const { id, deputados } = props;
  const location = useLocation();
  const parameters = queryString.parse(location.search);
  const [compareExpense, setcompareExpense] = useState([]);
  console.log(deputados);
  useEffect(() => {
    axios.get(allExpenseRoute(id)).then((response) => {
      setcompareExpense(response.data);
    });
  }, []);

  const dadosAgrupados = group(compareExpense);
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
  }));

  function DeputyCompare(element) {
    return element === parameters.q ? (
      <option selected value={element}>
        {element}
      </option>
    ) : (
      <option value={element}>{element}</option>
    );
  }

  return (
    <>
      <div>
        <Row className="py-4 table-border-bottom">
          <Col xs={12}>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Control as="select" name="q">
                <option value="">Todos</option>
                {deputados.map(DeputyCompare)}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row className="table-data">
          {compareExpense.map((element) => dataC(element))}
        </Row>
        <Row className="pt-2 pb-3">
          <Col xs={4} title="Total">
            <b>TOTAL</b>
          </Col>
          <Col xs={6} title="Total de gastos">
            R$
            {' '}
            {total}
            ,00
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
