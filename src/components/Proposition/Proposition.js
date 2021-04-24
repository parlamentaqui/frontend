import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { propositionRoute } from '../../Api';
import './Proposition.css';
import AuthorPhoto from '../../images/Kokay.jpg';

function Proposition(props) {
  const { propo } = props;

  return (
    <Container>
      <Row>
        <Col md="12" lg="6">
          <h1>Projeto de Lei 14/1999</h1>
        </Col>
        <Col className="propAuthorBox" md="12" lg="6">
          <Row>
            <img src={AuthorPhoto} alt="FotoAutorProp" className="icon-author" />
            <div>
              <p className="authorNameInfo">Autoria: Erica Kokay</p>
              <p className="authorPartyAndRegionInfo">PT - Distrito Federal</p>
            </div>
          </Row>
        </Col>
      </Row>

      {/* <Container classname="propThemeBox">
        <p>{propo.tema_proposicao}</p>
      </Container> */}
      {/* <Container className="propAuthorBox">
        <img src={AuthorPhoto} alt="FotoAutorProp" className="icon-author" />
        <p className="authorNameInfo">Autoria: Erica Kokay</p>
        <p className="authorPartyAndRegionInfo">PT - DF</p>
      </Container> */}
      {/* {propo.ementa} */}
    </Container>
  );
}

export default Proposition;
