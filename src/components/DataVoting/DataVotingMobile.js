import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './DataVotingMobile.css';
import { Row, Col } from 'react-bootstrap';
import IconShareBlack from '../../images/share-black.png';
import IconVoto from '../../images/votacao.png';
import IconConfirma from '../../images/icon-confirma.png';
import IconConfirmaBlack from '../../images/icon-confirma-black.png';
import IconCancela from '../../images/icon-cancela.png';
import IconCancelaRed from '../../images/icon-cancela-red.png';
import { voteRoute } from '../../Api';

function defineDate(date) {
  const data = new Date(date);
  const dia = data.getDate().toString();
  const diaF = dia.length === 1 ? '0'.concat(dia) : dia;
  const mes = (data.getMonth() + 1).toString();
  const mesF = mes.length === 1 ? '0'.concat(mes) : mes;
  const anoF = data.getFullYear();
  const str = '';

  return str.concat(diaF, '/', mesF, '/', anoF);
}

function defineVote(voto) {
  const str = String(voto);
  if (voto.localeCompare('Sim')) {
    return (
      <div>
        <img src={IconConfirma} alt="Confirma" className="icon-confirma" />
        <img src={IconCancela} alt="Cancela" className="icon-cancela" />
        <img src={IconShareBlack} alt="Share" className="icon-share-table icon-share" />
      </div>
    );
  }
  return (
    <div>
      <img src={IconConfirmaBlack} alt="Confirma" className="icon-confirma" />
      <img src={IconCancelaRed} alt="Cancela" className="icon-cancela" />
      <img src={IconShareBlack} alt="Share" className="icon-share-table icon-share" />
    </div>
  );
}
function votingM(element) {
  return (
    <div className="d-flex justify-content-center div-body">
      <Row className="background-div-1">
        <Col>
          <Row>
            <Col className="text-sm">Ementa:</Col>
            <Col className="d-flex justify-content-end text-sm">{defineDate(element.date_time_vote)}</Col>
          </Row>
          <Row>
            <Row>
              <Col md="6" className="p-table col-line-top">
                <p>{element.proposition_description}</p>
              </Col>
              <Col md="4" className="col-line-top">
                <p>Proposições: </p>
                {element.proposition_id}
              </Col>
              <Col md="2" className="d-flex justify-content-center col-line-top">
                {defineVote(element.vote)}
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

function votingM2() {
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
                alteração do regime do PL 3292/2020, por ter sido aprovado o REQ
                245/2021 que está apensado ao primeiro.
              </p>
            </Col>
            <Col md="4" className="col-line-top">
              Proposições:
              <p>PL 4195/2012</p>
            </Col>
            <Col md="2" className="d-flex justify-content-center col-line-top">
              <img
                src={IconConfirma}
                alt="Confirma"
                className="icon-confirma"
              />
              <img src={IconCancela} alt="Cancela" className="icon-cancela" />
              <img
                src={IconShareBlack}
                alt="Share"
                className="icon-share-table icon-share"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

const votingMArray = [];

function DataVotingMobile() {
  const history = useHistory();
  const id = history.location.pathname.split('/')[2];
  const [votes, setVotes] = useState([]);

  console.log(voteRoute(id));
  useEffect(async () => {
    const result = await axios(voteRoute(id));
    setVotes(result.data);
  }, []);

  console.log(votes);

  return (
    <div>
      <Row>
        <Col md="12">
          <img src={IconVoto} alt="Voto" className="icon-votacao" />
          VOTAÇÕES
          <img
            src={IconShareBlack}
            alt="Share"
            className="icon-share-black-mb"
          />
        </Col>
      </Row>
      {/* {votes.map((element) => (
      ))}
      ; */}
      {/* {votes.map((element) => (
        <Row className="col-line-top">
          <Col md="6" className="p-table">
            <p>{element.proposition_description}</p>
          </Col>
          <Col md="2">{element.date_time_vote}</Col>
          <Col md="2">{element.proposition_id}</Col>
          <Col md="2">{defineVote(element.vote)}</Col>
        </Row>
      ))}
      ; */}
      {votes.map((element) => votingM(element))}
      ;
      <Row>
        <Col md="12" className="alinhamento-end">
          VER MAIS
        </Col>
      </Row>
    </div>
  );
}

export default DataVotingMobile;
