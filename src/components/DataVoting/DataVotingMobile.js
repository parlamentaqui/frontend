import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './DataVotingMobile.css';
import { Row, Col } from 'react-bootstrap';
import IconShareBlack from '../../images/share-black.png';
import IconVoto from '../../images/votacao.png';
import { propositionRoute, voteRoute } from '../../Api';
import { defineVote, defineDate, getPropositionName } from './DataVoting';
import ShareButton from '../ShareButton';

function votingM(element, proposition) {
  const shareMessage = `Confira esse voto sobre ${element.deputy_name} Via parlamentaqui.com`;
  return (
    <div className="d-flex justify-content-center div-body">
      <Row className="background-div-1">
        <Col>
          <Row>
            <Col className="text-sm">Ementa:</Col>
            <Col className="d-flex justify-content-end text-sm">
              {defineDate(element.date_time_vote)}
            </Col>
          </Row>
          <Row>
            <Row>
              <Col md="6" className="p-table col-line-top">
                <p>{element.proposition_description}</p>
              </Col>
              <Col md="4" className="col-line-top">
                <p className="propositionLink">
                  {getPropositionName(proposition, element)}
                </p>
              </Col>
              <Col
                md="2"
                className="d-flex justify-content-center col-line-top"
              >
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
  const [proposition, setProposition] = useState([]);
  const shareMessage = `Confira esse voto sobre ${votes.deputy_name} Via parlamentaqui.com`;
  useEffect(async () => {
    const result = await axios(voteRoute(id));
    setVotes(result.data);
    const result2 = await axios(propositionRoute(id));
    setProposition(result2.data);
  }, []);

  return (
    <div>
      <Row>
        <Col md="12">
          <img src={IconVoto} alt="Voto" className="icon-votacao" />
          VOTA????ES
          <ShareButton message={shareMessage} />
        </Col>
      </Row>
      {votes.slice(0, 2).map((element) => votingM(element, proposition))}
      <Row>
        <Col md="12" className="alinhamento-end">
          VER MAIS
        </Col>
      </Row>
    </div>
  );
}

export default DataVotingMobile;
