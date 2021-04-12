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
        <img src={IconConfirma} alt="Confirma" className="icon-confirma underline" />
        <img src={IconCancela} alt="Cancela" className="icon-cancela" />
        <img src={IconShareBlack} alt="Share" className="icon-share-table icon-share" />
      </div>
    );
  }
  return (
    <div>
      <img src={IconConfirmaBlack} alt="Confirma" className="icon-confirma" />
      <img src={IconCancelaRed} alt="Cancela" className="icon-cancela underline" />
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
                <p>
                  Proposições:
                  {' '}
                  {element.proposition_id}
                </p>
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

function DataVotingMobile() {
  const history = useHistory();
  const id = history.location.pathname.split('/')[2];
  const [votes, setVotes] = useState([]);

  useEffect(async () => {
    const result = await axios(voteRoute(id));
    setVotes(result.data);
  }, []);

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
      {votes.slice(0, 2).map((element) => votingM(element))}
      <Row>
        <Col md="12" className="alinhamento-end">
          VER MAIS
        </Col>
      </Row>
    </div>
  );
}

export default DataVotingMobile;
