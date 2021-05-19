import React, { Component } from 'react';
import Switch from 'react-switch';
import {
  Row,
  Container,
  Col,
  Button,
  FormControl,
  Form,
} from 'react-bootstrap';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import './index.css';

function SearchFilter(props) {
  const location = useLocation();
  const parameters = queryString.parse(location.search);
  const { estados, partidos, setMode } = props;
  function partiesElement(element) {
    return element === parameters.partido ? (
      <option selected value={element}>
        {element}
      </option>
    ) : (
      <option value={element}>{element}</option>
    );
  }
  function ufElement(element) {
    return element.uf === parameters.estado ? (
      <option selected value={element.uf}>
        {element.name}
      </option>
    ) : (
      <option value={element.uf}>{element.name}</option>
    );
  }

  return (
    <>
      <Container>
        <Row>
          <Col md="6">
            <h1>
              RESULTADO DA BUSCA: &quot;
              {parameters.q}
              &quot;
            </h1>
          </Col>
          <Col md="6">
            <Row>
              <Col md="12" className="d-flex align-items-center">
                Deputados &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Switch
                  onChange={() => setMode('Proposições')}
                  checked={false}
                />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Proposições
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <div className="filter pb-4 pt-4 corpo">
        <Container>
          <Form>
            <Row>
              <Col md={4} className="mb-3 mb-md-0">
                <h6>Nome do deputado</h6>
                <FormControl
                  defaultValue={parameters.q}
                  name="q"
                  type="text"
                  placeholder=""
                  className="mr-sm-2"
                />
              </Col>
              <Col md={3} className="mb-3 mb-md-0">
                <h6>Partido</h6>
                <Form.Control as="select" name="partido">
                  <option value="">Todos</option>
                  {partidos.map(partiesElement)}
                </Form.Control>
              </Col>
              <Col md={3} className="mb-3 mb-md-0">
                <h6>Estado</h6>
                <Form.Control as="select" name="estado">
                  <option value="">Todos</option>
                  {estados.map(ufElement)}
                </Form.Control>
              </Col>
              <input type="text" className="d-none" value="Deputados" name="modo" />
              <Col md={2} className="mb-3 mb-md-0">
                <Button variant="primary" className="w-100" type="submit">
                  Buscar
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    </>
  );
}

export default SearchFilter;
