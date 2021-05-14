import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SpentData.css';
import { Row, Col, Button, Form, FormControl } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import IconGasto from '../../images/gasto.png';
import IconFiltro from '../../images/filtro.png';
import IconAnexo from '../../images/anexo.png';
import IconGrafico from '../../images/grafico.png';
import IconFecharGrafico from '../../images/close-graph.svg';
import { expenseRoute, profileRoute } from '../../Api';
import sirene from '../../images/sirene.svg';
import ShareButton from '../ShareButton';
import Charts from '../Charts/index';
import ComparationSpent from '../ComparationSpent/index';
import CompareIcon from '../../images/compare.png';

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

export function spentUrl(expense) {
  if (expense.document_url === null) {
    return <img src={sirene} alt="Sirene" className="icon-sirene" />;
  }
  return (
    <a href={expense.document_url} rel="noreferrer" target="_blank">
      <img src={IconAnexo} alt="Anexo" className="icon-anexo" />
    </a>
  );
}
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
  const [openCompanyName, setOpenCompanyName] = useState(false);
  const [openGraph, setopenGraphraph] = useState(false);
  const [openCompare, setopenCompare] = useState(false);
  const id = history.location.pathname.split('/')[2];
  const [expenses, setExpenses] = useState([]);
  const [deputy, setDeputy] = useState([]);
  const [companyName, setCompanyName] = useState('');
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
  }, [companyName]);

  const companyNameFilter = () => (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <FormControl
        name="companyName"
        type="text"
        placeholder="Razão Social"
        className="mr-sm-2"
        onChange={(e) => {
          setCompanyName(e.target.value);
        }}
      />
    </Form>
  );

  const tableComponent = () => (
    <>
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
          {openCompanyName ? companyNameFilter() : 'Razão Social'}
          {!openCompanyName ? (
            <Button
              variant="outline-light"
              onClick={() => {
                if (!openCompanyName) {
                  setOpenCompanyName(true);
                } else {
                  setOpenCompanyName(false);
                  setCompanyName('');
                }
              }}
            >
              <img
                src={IconFiltro}
                alt="Filtro"
                className={!openCompanyName ? 'icon-filtro' : 'd-none'}
              />
            </Button>
          ) : (
            <Button
              variant="outline-light"
              onClick={() => {
                if (!openCompanyName) {
                  setOpenCompanyName(true);
                } else {
                  setOpenCompanyName(false);
                  setCompanyName('');
                }
              }}
            >
              <FontAwesomeIcon
                icon={faTimes}
                size="lg"
                color="#000000"
                className={!openCompanyName ? 'd-none' : 'ml-2'}
              />
            </Button>
          )}
        </Col>
        <Col md="1" className="center">
          Documento
        </Col>
      </Row>
      {expenses.slice(0, 5).map((element) => spentRow(element))}
      <Row className="col-line-top">
        <Col md="12" className="alinhamento-end">
          <a href={`/deputados/${id}/gastos`}>VER MAIS</a>
        </Col>
      </Row>
    </>
  );

  return (
    <div className="d-flex justify-content-center">
      <Row className="background-div-1">
        <Col>
          <Row>
            <Col md="9" className="d-flex align-items-center">
              <img src={IconGasto} alt="Gasto" className="icon-gasto" />
              GASTOS
            </Col>
            <Col md="3" className="ali">
              {!openGraph && !openCompare && (
                <ShareButton
                  message={deputyShareMessage(deputy.name)}
                  link={deputyShareLink(id)}
                />
              )}
              {!openGraph && !openCompare && (
                <Button
                  variant="outline-light"
                  onClick={() => {
                    if (!openCompare) {
                      setopenCompare(true);
                    } else {
                      setopenCompare(false);
                    }
                  }}
                >
                  <img
                    src={CompareIcon}
                    alt="CompareIcon"
                    className="icon-compare"
                  />
                </Button>
              )}
              {!openGraph && openCompare && (
                <Button
                  variant="outline-light"
                  onClick={() => {
                    if (!openCompare) {
                      setopenCompare(true);
                    } else {
                      setopenCompare(false);
                    }
                  }}
                >
                  <img
                    src={IconFecharGrafico}
                    alt="Fechar gráfico"
                    className="icon-grafico"
                  />
                </Button>
              )}
              <Button
                variant="outline-light"
                onClick={() => {
                  if (!openGraph) {
                    setopenGraphraph(true);
                  } else {
                    setopenGraphraph(false);
                  }
                }}
              >
                {!openGraph && !openCompare && (
                  <img
                    src={IconGrafico}
                    alt="Grafico"
                    className="icon-grafico"
                  />
                )}
                {openGraph && !openCompare && (
                  <img
                    src={IconFecharGrafico}
                    alt="Fechar gráfico"
                    className="icon-grafico"
                  />
                )}
              </Button>
            </Col>
          </Row>
          {!openGraph && !openCompare && tableComponent()}
          {openGraph && (
            <div className="ali">
              <Charts expenses={expenses} deputy={deputy} />
            </div>
          )}
          {openCompare && (
            <div className="ali">
              <ComparationSpent />
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default SpentData;
