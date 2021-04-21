import React, { useEffect, useState } from 'react';
import './SpentDataMobile.css';
import {
  Row, Col
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import IconShareBlack from '../../images/share-black.png';
import IconGasto from '../../images/gasto.png';
import IconAnexo from '../../images/anexo.png';
import IconGrafico from '../../images/grafico.png';
import sirene from '../../images/sirene.svg';
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

const spentUrl = (expense) => {
  if (expense.document_url === null) {
    return <img src={sirene} alt="Sirene" className="icon-sirene-mb" />;
  }
  return (
    <a href={expense.document_url} rel="noreferrer" target="_blank">
      <img src={IconAnexo} alt="Anexo" className="icon-anexo-mb" />
    </a>
  );
};

function spentRow(expense) {
  return (
    <div className="d-flex justify-content-center div-body">
      <Row className="background-div-1">
        <Col>
          <Row>
            <Col className="text-sm">Serviço:</Col>
            <Col className="d-flex justify-content-end text-sm">{defineDate(expense.document_date)}</Col>
          </Row>
          <Row>
            <Col md="12" className="p-table col-line-top">
              <p>
                {expense.expenses_type}
              </p>
            </Col>
            <Col md="12" className="col-line-top">
              Valor:
              <p>{expense.document_value}</p>
            </Col>
            <Col md="12" className="col-line-top">
              Tipo de gasto:
              <p>Cota parlamentar</p>
            </Col>
            <Col md="12" className="col-line-top">
              Razão Social:
              <p>{expense.supplier_name}</p>
            </Col>
            <Col md="12" className="d-flex justify-content-center col-line-top">
              {spentUrl(expense)}
              <img src={IconShareBlack} alt="Share" className="icon-share-table-mb icon-share-mb-spent" />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

const spentArray = [spentRow, spentRow, spentRow];

function DataVotingMobile() {
  const history = useHistory();
  const id = history.location.pathname.split('/')[2];
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    axios.get(expenseRoute(id)).then((response) => {
      setExpenses(response.data);
    });
  }, []);

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
      {expenses.slice(0, 2).map((element) => spentRow(element))}

      <Row>
        <Col md="12" className="alinhamento-end">VER MAIS</Col>
      </Row>
    </div>
  );
}

export default DataVotingMobile;
