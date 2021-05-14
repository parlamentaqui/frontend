import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './index.css';
import Format from '../Charts/Format';
import Compare from './Compare';
import { expenseRoute, profileRoute, deputadosHomeRoute } from '../../Api';

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
  const id = history.location.pathname.split('/')[2];
  const [expenses, setExpenses] = useState([]);
  const [companyName, setCompanyName] = useState('');
  const [deputy, setDeputy] = useState([]);
  const [listDeputy, setListDeputy] = useState([]);

  useEffect(() => {
    const requestBody = {
      razao_social: companyName ? `${companyName}` : '',
      tipo_gasto: '',
    };
    axios.post(expenseRoute(id), requestBody).then((response) => {
      setExpenses(response.data);
    });
    axios.get(profileRoute(id)).then((response) => {
      setDeputy(response.data);
    });
    axios.get(deputadosHomeRoute).then((response) => {
      setListDeputy(response.data);
    });
  }, [companyName]);

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
            <Compare />
          </Col>
        </Row>
      </Col>
    </>
  );
}
export default ComparationSpent;
