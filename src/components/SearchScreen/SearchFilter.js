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

function SearchFilter(props) {
  const location = useLocation();
  const parameters = queryString.parse(location.search);
  const { estados, partidos } = props;

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
                  <option value="">Todos</option>
                  {partidos.map((element) => (
                    <option value={element}>{element}</option>
                  ))}
                </Form.Control>
              </Col>
              <Col md={3} className="mb-3 mb-md-0">
                <h6>Estado</h6>
                <Form.Control
                  as="select"
                  name="estado"
                  defaultValue={parameters.estado}
                >
                  <option value="">Todos</option>
                  {estados.map((element) => (
                    <option value={element.uf}>{element.name}</option>
                  ))}
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
