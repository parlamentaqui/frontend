import React, { useEffect, useState } from 'react';
import './SpentDataMobile.css';
import { Row, Col } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
import IconGasto from '../../images/gasto.png';
import IconAnexo from '../../images/anexo.png';
// import IconGrafico from '../../images/grafico.png';
import sirene from '../../images/sirene.svg';
import { expenseMobileRoute, profileRoute } from '../../Api';
import ShareButton from '../ShareButton';
import { defineDate, spentUrl, deputyShareMessage, deputyShareLink } from './SpentData';

export const deputyShareExpenseMessage = (dep, exp) => `O ${dep} gastou R$ ${exp.document_value} com ${exp.expenses_type}.`;

function spentRow(expense, deputy, id) {
  return (
    <div className="d-flex justify-content-center div-body">
      <Row className="background-div-1">
        <Col>
          <Row>
            <Col className="text-sm">Serviço:</Col>
            <Col
              className="d-flex justify-content-end text-sm"
              title={defineDate(expense.document_date)}
            >
              {defineDate(expense.document_date)}
            </Col>
          </Row>
          <Row>
            <Col
              md="12"
              className="p-table col-line-top"
              title={expense.expenses_type}
            >
              <p>{expense.expenses_type}</p>
            </Col>
            <Col
              md="12"
              className="col-line-top"
              title={expense.document_value}
            >
              Valor:
              {' '}
              {expense.document_value}
            </Col>
            <Col md="12" className="col-line-top">
              Tipo de gasto: Cota parlamentar
            </Col>
            <Col md="12" className="col-line-top" title={expense.supplier_name}>
              Razão Social:
              {' '}
              {expense.supplier_name}
            </Col>
            <Col
              md="12"
              className="d-flex justify-content-center col-line-top"
              title={spentUrl(expense)}
            >
              {spentUrl(expense)}
              <ShareButton
                message={deputyShareExpenseMessage(deputy.name, expense)}
                link={deputyShareLink(id)}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

const spentArray = [spentRow, spentRow, spentRow];

function SpentDataMobile() {
  const history = useHistory();
  const location = useLocation();
  const id = history.location.pathname.split('/')[2];
  const [deputy, setDeputy] = useState([]);
  const [expenses, setExpensesMobile] = useState([]);
  useEffect(() => {
    axios.get(expenseMobileRoute(id)).then((response) => {
      setExpensesMobile(response.data);
    });
    axios.get(profileRoute(id)).then((response) => {
      setDeputy(response.data);
    });
  }, []);

  return (
    <div>
      <Row className="ali">
        <Col>
          <img src={IconGasto} alt="Gasto" className="icon-gasto" />
          GASTOS
        </Col>
        <Col>
          <ShareButton
            message={deputyShareMessage(deputy.name)}
            link={deputyShareLink(id)}
          />
          {/* <img src={IconGrafico} alt="Grafico" className="icon-grafico-mb" /> */}
        </Col>
      </Row>
      {expenses.slice(0, 2).map((element) => spentRow(element, deputy, id))}

      <Row>
        <Col md="12" className="alinhamento-end">
          <a href={`/deputados/${id}/gastos`}>VER MAIS</a>
        </Col>
      </Row>
    </div>
  );
}

export default SpentDataMobile;
