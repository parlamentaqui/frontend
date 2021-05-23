import React from 'react';
import { useLocation } from 'react-router';
import queryString from 'query-string';
import { Col, Form, Row } from 'react-bootstrap';
import './index.css';
// eslint-disable-next-line import/no-cycle
import { group } from './index';

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
  const { deputados, compareExpense, SelectDeputy } = props;
  const location = useLocation();
  const parameters = queryString.parse(location.search);
  // useEffect(() => {
  //   axios.get(allExpenseRoute(id)).then((response) => {
  //     setcompareExpense(response.data);
  //   });
  // }, []);

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
    percentage: total === 0 ? 0 : (element.document_value * 100) / total,
  }));

  function DeputyCompare(element) {
    const { name, id } = element;
    return name === parameters.q ? (
      <option selected value={id}>
        {name}
      </option>
    ) : (
      <option value={id}>{name}</option>
    );
  }

  return (
    <>
      <div>
        <Row className="py-4 table-border-bottom">
          <Col xs={12}>
            <Form.Group controlId="exampleForm.ControlSelect1" className="m-0">
              <Form.Control as="select" name="q" onChange={SelectDeputy}>
                <option value="">Todos</option>
                {deputados.map(DeputyCompare)}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row className="table-data text-left">
          {custosDeputados.map((element) => dataC(element))}
        </Row>
        <Row className="pt-2 pb-3 text-left">
          <Col xs={6} title="Total">
            <b>TOTAL</b>
          </Col>
          <Col xs={4} title="Total de gastos">
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
