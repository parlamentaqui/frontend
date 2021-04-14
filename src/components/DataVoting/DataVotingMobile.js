import React from 'react';
import './DataVotingMobile.css';
import {
  Row, Col
} from 'react-bootstrap';
import IconShareBlack from '../../images/share-black.png';
import IconVoto from '../../images/votacao.png';
import IconConfirma from '../../images/icon-confirma.png';
import IconCancela from '../../images/icon-cancela.png';

function votingM() {
  return (
    <div className="d-flex justify-content-center div-body">
      <Row className="background-div-1">
        <Col>
          <Row>
            <Col className="text-sm">Ementa:</Col>
            <Col className="d-flex justify-content-end text-sm">18/03/2020</Col>
          </Row>
          <Row>
            <Col md="6" className="p-table col-line-top">
              <p>
                Alteração do Regime de Tramitação desta proposição em virtude da
                alteração do regime do PL 3292/2020, por ter sido aprovado o REQ 245/2021
                que está apensado ao primeiro.
              </p>
            </Col>
            <Col md="4" className="col-line-top">
              Proposições:
              <p>PL 4195/2012</p>
            </Col>
            <Col md="2" className="d-flex justify-content-center col-line-top">
              <img src={IconConfirma} alt="Confirma" className="icon-confirma" />
              <img src={IconCancela} alt="Cancela" className="icon-cancela" />
              <img src={IconShareBlack} alt="Share" className="icon-share-table icon-share" />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

const votingMArray = [votingM, votingM];

function DataVotingMobile() {
  return (
    <div>
      <Row>
        <Col md="12">
          <img src={IconVoto} alt="Voto" className="icon-votacao" />
          VOTAÇÕES
          <img src={IconShareBlack} alt="Share" className="icon-share-black-mb" />
        </Col>
      </Row>
      {votingMArray.map(votingM)}
      <Row>
        <Col md="12" className="alinhamento-end">VER MAIS</Col>
      </Row>
    </div>
  );
}

export default DataVotingMobile;
