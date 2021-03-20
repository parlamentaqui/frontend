import React from 'react';
import {
  Row,
  Container,
  Col,
  Button,
  FormControl,
  Form
} from 'react-bootstrap';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import './SearchFilter.css';

function SearchFilter() {
  const location = useLocation();
  const parameters = queryString.parse(location.search);

  return (
    <>
      <Container>
        <h1>
          RESULTADO DA BUSCA: &quot;
          {parameters.q}
          &quot;
        </h1>
      </Container>

      <div className="filter pb-4 pt-4">
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
                <Form.Control
                  as="select"
                  name="partido"
                  defaultValue={parameters.partido}
                >
                  <option>Todos</option>
                  <option>Partido 1</option>
                  <option>Partido 2</option>
                  <option>Partido 3</option>
                  <option>Partido 4</option>
                  <option>Partido 5</option>
                </Form.Control>
              </Col>
              <Col md={3} className="mb-3 mb-md-0">
                <h6>Estado</h6>
                <Form.Control
                  as="select"
                  name="estado"
                  defaultValue={parameters.estado}
                >
                  <option>Todos</option>
                  <option>Estado 1</option>
                  <option>Estado 2</option>
                  <option>Estado 3</option>
                  <option>Estado 4</option>
                  <option>Estado 5</option>
                </Form.Control>
              </Col>
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
