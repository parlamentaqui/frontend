import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';
import './TopBar.css';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

function TopBar() {
  const history = useHistory();

  const onClickSearchHandle = () => {
    const path = '/busca';
    history.push(path);
    window.location.reload();
  };

  const [open, setOpen] = useState(false);

  const notInSearch = history.location.pathname.indexOf('busca') === -1;
  const notInHome = history.location.pathname !== '/';

  return (
    <div className="Nav">
      <Navbar expand="lg">
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={open ? 'd-none' : ''}
        />
        <FontAwesomeIcon
          icon={faTimes}
          size="lg"
          color="#a4d4b4"
          className={!open ? 'd-none' : 'ml-2'}
          onClick={() => {
            setOpen(false);
          }}
        />
        {!open ? (
          <Navbar.Brand href="/">
            <img
              src="/images/Brand.svg"
              className="d-inline-block align-top"
              alt="Parlamentaqui logo"
            />
          </Navbar.Brand>
        ) : (
          <Form className="mobile-search">
            <FormControl
              type="text"
              placeholder="Buscar por deputados ou projetos"
              className="mr-sm-2"
            />
          </Form>
        )}
        <FontAwesomeIcon
          icon={faSearch}
          color="#a4d4b4"
          size="lg"
          className={notInSearch && notInHome ? 'd-lg-none mr-2' : 'd-none'}
          onClick={() => {
            if (!open) {
              setOpen(true);
            } else {
              onClickSearchHandle();
            }
          }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Início</Nav.Link>
            <Nav.Link href="/deputados">Deputados</Nav.Link>
            <Nav.Link href="/partidos">Partidos</Nav.Link>
            <Nav.Link href="/projetos">Projetos</Nav.Link>
          </Nav>
          {notInSearch ? (
            <div className="d-none d-lg-block">
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
            </div>
          ) : (
            <div />
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default TopBar;
