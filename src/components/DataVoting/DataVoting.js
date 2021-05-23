import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import './DataVoting.css';
import { Row, Col } from 'react-bootstrap';
import IconVoto from '../../images/votacao.png';
import IconConfirma from '../../images/icon-confirma.png';
import IconConfirmaBlack from '../../images/icon-confirma-black.png';
import IconCancela from '../../images/icon-cancela.png';
import IconCancelaRed from '../../images/icon-cancela-red.png';
import { propositionRoute, voteRoute } from '../../Api';
import ShareButton from '../ShareButton';

export function defineDate(date) {
  const data = new Date(date);
  const dia = data.getDate().toString();
  const diaF = dia.length === 1 ? '0'.concat(dia) : dia;
  const mes = (data.getMonth() + 1).toString();
  const mesF = mes.length === 1 ? '0'.concat(mes) : mes;
  const anoF = data.getFullYear();
  const str = '';

  return str.concat(diaF, '/', mesF, '/', anoF);
}

export function defineVote(vote) {
  const str = String(vote);
  const shareMessage = `Confira esse voto sobre ${vote.deputy_name} Via parlamentaqui.com`;
  if (!vote.localeCompare('Sim')) {
    return (
      <div>
        <img
          src={IconConfirma}
          alt="Confirma"
          className="icon-confirma underline"
        />
        <img src={IconCancela} alt="Cancela" className="icon-cancela" />
        <ShareButton message={shareMessage} />
      </div>
    );
  }
  return (
    <div>
      <img src={IconConfirmaBlack} alt="Confirma" className="icon-confirma" />
      <img
        src={IconCancelaRed}
        alt="Cancela"
        className="icon-cancela underline"
      />
      <ShareButton message={shareMessage} />
    </div>
  );
}

export function getPropositionName(proposition, vote) {
  if (proposition.length > 0) {
    return (
      <Link to={`/projetos/${proposition.proposition_id}`}>
        {String(proposition.sigla_tipo).concat(' ', proposition.numero, '/', proposition.ano)}
      </Link>
    );
  }

  return (
    <a href={vote.proposition_link}>
      Link para Proposicao
    </a>
  );
}

function DataVoting() {
  const history = useHistory();
  const id = history.location.pathname.split('/')[2];
  const [votes, setVotes] = useState([]);
  const [proposition, setProposition] = useState([]);
  useEffect(async () => {
    const result = await axios(voteRoute(id));
    setVotes(result.data);
    const result2 = await axios(propositionRoute(id));
    setProposition(result2.data);
  }, []);
  const shareMessage = `Confira esse voto sobre ${votes.deputy_name} Via parlamentaqui.com`;

  return (
    <div className="d-flex justify-content-center">
      <Row className="background-div-1">
        <Col>
          <Row>
            <Col md="10">
              <img src={IconVoto} alt="Voto" className="icon-votacao" />
              VOTAÇÕES
            </Col>
            <Col md="2" className="ali">
              <ShareButton message={shareMessage} />
            </Col>
          </Row>
          <Row>
            <Col md="6">Ementa</Col>
            <Col md="2">Data</Col>
            <Col md="2">Proposições</Col>
            <Col md="2">Voto</Col>
          </Row>
          {votes.slice(0, 2).map((element) => (
            <Row className="col-line-top">
              <Col md="6" className="p-table">
                <p>{element.proposition_description}</p>
              </Col>
              <Col md="2" className="col-center">
                {defineDate(element.date_time_vote)}
              </Col>
              <Col md="2" className="col-center">
                {getPropositionName(proposition, element)}
              </Col>
              <Col md="2" className="col-center">
                {defineVote(element.vote)}
              </Col>
            </Row>
          ))}
          <Row className="col-line-top">
            <Col md="12" className="alinhamento-end">
              VER MAIS
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default DataVoting;
