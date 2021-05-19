import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import seachIcon from '../../images/search-icon.svg';
import './index.css';

function TopBar() {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [searchString, setSearchString] = useState('');
  const [notInSearch, setNotInSearch] = useState(document.location.pathname.indexOf('busca') === -1);
  const [notInHome, setNotInHome] = useState(document.location.pathname !== '/');

  history.listen((location, action) => {
    setNotInSearch(location.pathname.indexOf('busca') === -1);
    setNotInHome(location.pathname !== '/');
  });

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
          <Navbar.Brand>
            <Link to="/">
              <img
                src="/images/Brand.svg"
                className="d-inline-block align-top"
                alt="Parlamentaqui logo"
              />
            </Link>
          </Navbar.Brand>
        ) : (
          <Form inline action="/busca" className="mobile-search">
            <FormControl
              name="q"
              type="text"
              placeholder="Buscar por deputados ou projetos"
              className="mr-sm-2"
              value={searchString}
              onChange={(e) => {
                setSearchString(e.target.value);
              }}
            />
            <Button
              variant="success"
              type="submit"
              className={
                notInSearch && notInHome ? 'd-lg-none ml-2 pr-0' : 'd-none'
              }
              disabled={searchString.length === 0}
            >
              <FontAwesomeIcon
                icon={faSearch}
                color="#a4d4b4"
                size="lg"
                className={
                  notInSearch && notInHome ? 'd-lg-none pr-0' : 'd-none'
                }
                onClick={() => {
                  if (!open) {
                    setOpen(true);
                  }
                }}
              />
            </Button>
          </Form>
        )}
        <Button
          variant="success"
          type="submit"
          className={
            notInSearch && notInHome && !open ? 'd-lg-none pr-0' : 'd-none'
          }
          disabled={searchString.length === 0}
        >
          <FontAwesomeIcon
            icon={faSearch}
            color="#a4d4b4"
            size="lg"
            className={notInSearch && notInHome ? 'd-lg-none pr-0' : 'd-none'}
            onClick={() => {
              if (!open) {
                setOpen(true);
              }
            }}
          />
        </Button>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Início</Nav.Link>
            <Nav.Link href="/deputados">Deputados</Nav.Link>
            {/* <Nav.Link href="/partidos">Partidos</Nav.Link> */}
            <Nav.Link href="/projetos">Projetos</Nav.Link>
          </Nav>
          {notInSearch ? (
            <div className="d-none d-lg-block">
              <Form inline action="/busca">
                <div className="position-relative seach-wrapper">
                  <FormControl
                    name="q"
                    type="text"
                    placeholder="Pesquisar"
                    className="mr-sm-2 search-bar"
                    value={searchString}
                    onChange={(e) => {
                      setSearchString(e.target.value);
                    }}
                  />
                  <Button
                    variant="link"
                    className="search-icon"
                    type="submit"
                  >
                    <img
                      src={seachIcon}
                      alt="Parlamentaqui logo"
                    />
                  </Button>
                </div>
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
