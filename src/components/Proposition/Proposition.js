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
    <div>
      <Row>
        <h1>Projeto de Lei 14/1999</h1>
        <Container classname="propThemeBox">
          <p>Trabalho e Emprego</p>
        </Container>
        <Container className="propAuthorBox">
          <img src={AuthorPhoto} alt="FotoAutorProp" className="icon-author" />
          <p className="authorNameInfo">Autoria: Erica Kokay</p>
          <p className="authorPartyAndRegionInfo">PT - DF</p>
        </Container>
      </Row>
      {propo.ementa}
    </div>
  );
}

export default Proposition;
