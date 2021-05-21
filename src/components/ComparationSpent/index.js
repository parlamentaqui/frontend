import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
import queryString from 'query-string';
import { Col, Row } from 'react-bootstrap';
import './index.css';
import Format from '../Charts/Format';
// eslint-disable-next-line import/no-cycle
import Compare from './Compare';
import {
  allExpenseRoute,
  profileRoute,
  deputyCompareRoute,
  allDeputiesRoute,
} from '../../Api';

export function group(expenses) {
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
  return newExpenses.sort((a, b) => {
    if (a.expenses_type < b.expenses_type) { return -1; }
    if (a.expenses_type > b.expenses_type) { return 1; }
    return 0;
  });
}

function ComparationSpent() {
  const history = useHistory();
  const location = useLocation();
  const parameters = queryString.parse(location.search);
  const id = history.location.pathname.split('/')[2];
  const [expenses, setExpenses] = useState([]);
  const [deputy, setDeputy] = useState([]);
  const [deputadosC, setDeputadosC] = useState([]);
  const [compareExpense, setCompareExpense] = useState([]);

  useEffect(() => {
    axios.get(allExpenseRoute(id)).then((response) => {
      setExpenses(response.data);
    });
    axios.get(profileRoute(id)).then((response) => {
      setDeputy(response.data);
    });
    axios.get(allDeputiesRoute).then((response) => {
      setDeputadosC(response.data);
    });
  }, []);

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

  function CreateEmptyLine(ExpensesType) {
    return {
      batch_cod: 0,
      deputy_id: 0,
      document_date: 0,
      document_num: 0,
      document_type: 0,
      document_url: 0,
      document_value: 0,
      expenses_type: ExpensesType,
      glosa_value: 0,
      liquid_value: 0,
      month: 0,
      refund_num: 0,
      supplier_cnpj_cpf: 0,
      supplier_name: 0,
      tranche: 0,
      year: 0,
    };
  }

  function SelectDeputy(event) {
    axios.get(allExpenseRoute(event.target.value)).then((response) => {
      const temp = response.data;
      const temp2 = [...expenses];
      custosDeputados.filter((element) => {
        const { label } = element;
        return !temp.find((element2) => label === element2.expenses_type);
      }).forEach((element) => {
        temp.push(CreateEmptyLine(element.label));
      });
      temp.filter((element) => {
        const expensesType = element.expenses_type;
        return !temp2.find((element2) => expensesType === element2.expenses_type);
      }).forEach((element) => {
        temp2.push(CreateEmptyLine(element.expenses_type));
      });
      setCompareExpense(temp);
      setExpenses(temp2);
    });
  }

  return (
    <>
      <Col>
        <Row className="col-line-top p-0 top-line">
          <Col
            xs={{ span: 12, order: 2 }}
            lg={{ span: 6, order: 1 }}
            className="col-format table-border-right"
          >
            <Format dados={custosDeputados} name={deputy} total={total} h5Class="spacer" />
          </Col>
          <Col
            xs={{ span: 12, order: 1 }}
            lg={{ span: 6, order: 2 }}
            className="align graph-bordered"
          >
            <Compare
              deputados={deputadosC}
              compareExpense={compareExpense}
              SelectDeputy={SelectDeputy}
            />
          </Col>
        </Row>
      </Col>
    </>
  );
}
export default ComparationSpent;
