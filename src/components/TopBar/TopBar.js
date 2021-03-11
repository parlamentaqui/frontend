import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';
import './TopBar.css';
import { useHistory } from 'react-router-dom';

function TopBar() {
  const history = useHistory();

  const onClickSearchHandle = () => {
    const path = '/busca';
    history.push(path);
  };

  return (
    <div className="Nav">
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand href="/">
          <img
            src="/images/Brand.svg"
            className="d-inline-block align-top"
            alt="Parlamentaqui logo"
          />
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Início</Nav.Link>
            <Nav.Link href="/deputados">Deputados</Nav.Link>
            <Nav.Link href="/partidos">Partidos</Nav.Link>
            <Nav.Link href="/projetos">Projetos</Nav.Link>
          </Nav>
          {window.location.href.split('/')[3] !== 'busca' ? (
            <Form inline>
              <FormControl
                type="text"
                placeholder="Pesquisar por deputados ou projetos"
                className="mr-sm-2"
              />
              <Button variant="outline-info" onClick={onClickSearchHandle}>
                Buscar
              </Button>
            </Form>
          ) : (
            <div />
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default TopBar;
