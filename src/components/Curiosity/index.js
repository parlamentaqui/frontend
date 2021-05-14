import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Col, Container, Row, Image } from 'react-bootstrap';
import { profileRoute } from '../../Api';
import './Proposition.css';
import DefaultPicture from '../../images/DefaultPicture.png';

//formata
function CuriosityrInfo(deputy, proposition) {
    return (
      <div className="d-flex deputy-info align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <img
            src={DefaultPicture}
            alt="Incon"
            className="icon-info ml-0 my-0 mr-3"
          />
          {/* <div>
            <p className="authorPartyAndRegionInfo mx-0">
              {deputy.party ? `${deputy.party} - ${deputy.federative_unity}` : 'Informações adicionais não disponíveis'}
            </p>
          </div> */}
        </div>
      </div>
    );
  }

export function getCuriosity(proposition) {
    return (
      <div>
        <p>
          {defineDate(proposition.data_proposicao)}
        </p>
      </div>
    );
  }

function Curiosity(props) {
    const history = useHistory();
    const shareLink = history.location.pathname;
    const { proposition, tweets } = props;
  
    return (
      <Container>
        <Row>
          <Col>
            <div className="curiosityBox">
              {getCuriosity(proposition)}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }

export default Curiosity;