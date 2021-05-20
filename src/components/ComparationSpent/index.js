import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
import queryString from 'query-string';
import { Col, Row } from 'react-bootstrap';
import './index.css';
import Format from '../Charts/Format';
import Compare from './Compare';
import { allExpenseRoute, profileRoute, deputyCompareRoute, allDeputiesRoute } from '../../Api';

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

function ComparationSpent() {
  const history = useHistory();
  const location = useLocation();
  const parameters = queryString.parse(location.search);
  const id = history.location.pathname.split('/')[2];
  const [expenses, setExpenses] = useState([]);
  const [deputy, setDeputy] = useState([]);
  const [deputadosC, setDeputadosC] = useState([]);
  const [compareDeputy, setCompareDeputy] = useState([]);

  useEffect(() => {
    const requestBody = {
      nome: `${parameters.q || ''}`,
    };
    axios.get(allExpenseRoute(id)).then((response) => {
      setExpenses(response.data);
    });
    axios.get(profileRoute(id)).then((response) => {
      setDeputy(response.data);
    });
    axios.get(allDeputiesRoute).then((response) => {
      setDeputadosC(response.data);
      console.log(response.data);
    });
    axios.post(deputyCompareRoute, requestBody).then((response) => {
      setCompareDeputy(response.data);
    });
  }, [compareDeputy]);

  console.log(deputadosC);
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
  }));

  return (
    <>
      <Col>
        <Row className="col-line-top p-0 top-line">
          <Col
            xs={{ span: 12, order: 2 }}
            lg={{ span: 6, order: 1 }}
            className="col-format table-border-right"
          >
            <Format dados={custosDeputados} name={deputy} total={total} />
          </Col>
          <Col
            xs={{ span: 12, order: 1 }}
            lg={{ span: 6, order: 2 }}
            className="align graph-bordered"
          >
            <Compare id={compareDeputy.id} deputados={deputadosC.name} />
          </Col>
        </Row>
      </Col>
    </>
  );
}
export default ComparationSpent;
