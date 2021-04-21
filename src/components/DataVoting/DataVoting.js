import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './DataVoting.css';
import { Row, Col } from 'react-bootstrap';
import IconShareBlack from '../../images/share-black.png';
import IconVoto from '../../images/votacao.png';
import IconConfirma from '../../images/icon-confirma.png';
import IconConfirmaBlack from '../../images/icon-confirma-black.png';
import IconCancela from '../../images/icon-cancela.png';
import IconCancelaRed from '../../images/icon-cancela-red.png';
import { voteRoute } from '../../Api';
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
  if (vote.localeCompare('Sim')) {
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

function DataVoting() {
  const history = useHistory();
  const id = history.location.pathname.split('/')[2];
  const [votes, setVotes] = useState([]);
  console.log(voteRoute(id));
  useEffect(async () => {
    const result = await axios(voteRoute(id));
    setVotes(result.data);

    // useEffect(() => {
    //   axios.get(voteRoute(id)).then((response) => {
    //     setVotes(response.data);
    //     console.log(response.data);
    //   });
  }, []);
  const shareMessage = `Confira esse voto sobre ${votes.deputy_name} Via parlamentaqui.com`;

  return (
    <div className="d-flex justify-content-center">
      <Row className="background-div-1">
        <Col>
          <Row>
            <Col md="11">
              <img src={IconVoto} alt="Voto" className="icon-votacao" />
              VOTAÇÕES
            </Col>
            <Col md="1">
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
                {element.proposition_id}
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
