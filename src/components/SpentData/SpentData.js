import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SpentData.css';
import { Row, Col, Button, Form, FormControl } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import IconGasto from '../../images/gasto.png';
import IconFiltro from '../../images/filtro.png';
import IconAnexo from '../../images/anexo.png';
// import IconGrafico from '../../images/grafico.png';
import { expenseRoute, profileRoute } from '../../Api';
import sirene from '../../images/sirene.svg';
import ShareButton from '../ShareButton';

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
    return <img src={sirene} alt="Sirene" className="icon-sirene" />;
  }
  return (
    <a href={expense.document_url} rel="noreferrer" target="_blank">
      <img src={IconAnexo} alt="Anexo" className="icon-anexo" />
    </a>
  );
};

function spentRow(expense) {
  return (
    <Row className="col-line-top">
      <Col md="3" className="truncate" title={expense.expenses_type}>
        {expense.expenses_type}
      </Col>
      <Col md="1" className="truncate" title={expense.document_value}>
        R$
        {expense.document_value}
      </Col>
      <Col md="2" className="truncate" title="Cota Parlamentar">
        Cota Parlamentar
      </Col>
      <Col
        md="2"
        className="truncate"
        title={defineDate(expense.document_date)}
      >
        {defineDate(expense.document_date)}
      </Col>
      <Col md="3" className="truncate" title={expense.supplier_name}>
        {expense.supplier_name}
      </Col>
      <Col md="1" className="truncate" title={spentUrl(expense)}>
        {spentUrl(expense)}
      </Col>
    </Row>
  );
}

const spentArray = [spentRow, spentRow, spentRow];
export const deputyShareMessage = (dep) => `Veja os gastos do deputado ${dep}`;
export const deputyShareLink = (id) => `parlamentaqui.com/deputado/${id}`;

function SpentData() {
  const history = useHistory();
  const location = useLocation();
  const [openR, setOpenR] = useState(false);
  const id = history.location.pathname.split('/')[2];
  const [expenses, setExpenses] = useState([]);
  const [deputy, setDeputy] = useState([]);
  const [rs, setRs] = useState('');
  const [tg, setTg] = useState('');
  useEffect(() => {
    const requestBody = {
      razao_social: rs ? `${rs}` : '',
      tipo_gasto: tg ? `${tg}` : '',
    };
    axios.post(expenseRoute(id), requestBody).then((response) => {
      setExpenses(response.data);
    });
    axios.get(profileRoute(id)).then((response) => {
      setDeputy(response.data);
    });
  }, [rs]);

  return (
    <div className="d-flex justify-content-center">
      <Row className="background-div-1">
        <Col>
          <Row>
            <Col md="10">
              <img src={IconGasto} alt="Gasto" className="icon-gasto" />
              GASTOS
            </Col>
            <Col md="2" className="ali">
              <ShareButton
                message={deputyShareMessage(deputy.name)}
                link={deputyShareLink(id)}
              />
            </Col>
            {/* TODO: Retirada img de gráfico */}
            {/* <Col md="1">
              <img src={IconGrafico} alt="Grafico" className="icon-grafico" />
            </Col> */}
          </Row>
          <Row className="col-line-top">
            <Col md="3" className="center">
              Serviço
            </Col>
            <Col md="1" className="center">
              Valor
            </Col>
            <Col md="2" className="center">
              Tipo de gasto
            </Col>
            <Col md="2" className="center left">
              Data
            </Col>
            <Col md="3" className="center">
              {openR ? (
                <Form
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <FormControl
                    name="rs"
                    type="text"
                    placeholder="Razão Social"
                    className="mr-sm-2"
                    onChange={(e) => {
                      setRs(e.target.value);
                    }}
                  />
                </Form>
              ) : (
                'Razão Social'
              )}
              {!openR ? (
                <Button
                  variant="outline-light"
                  onClick={() => {
                    if (!openR) {
                      setOpenR(true);
                    } else {
                      setOpenR(false);
                      setRs('');
                    }
                  }}
                >
                  <img
                    src={IconFiltro}
                    alt="Filtro"
                    className={!openR ? 'icon-filtro' : 'd-none'}
                  />
                </Button>
              ) : (
                <Button
                  variant="outline-light"
                  onClick={() => {
                    if (!openR) {
                      setOpenR(true);
                    } else {
                      setOpenR(false);
                      setRs('');
                    }
                  }}
                >
                  <FontAwesomeIcon
                    icon={faTimes}
                    size="lg"
                    color="#000000"
                    className={!openR ? 'd-none' : 'ml-2'}
                  />
                </Button>
              )}
            </Col>
            <Col md="1" className="center">
              Documento
            </Col>
          </Row>
          <Row className="pb-2" />
          {expenses.slice(0, 5).map((element) => spentRow(element))}
          <Row className="col-line-top">
            <Col md="12" className="alinhamento-end">
              <a href={`/deputados/${id}/gastos`}>VER MAIS</a>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default SpentData;
