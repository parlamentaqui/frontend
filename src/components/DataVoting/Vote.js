import React from 'react';
import './DataVoting.css';
import {
  Row, Col
} from 'react-bootstrap';

function Vote(props) {
  // eslint-disable-next-line react/destructuring-assignment
  const deputyVote = props.deputy_vote;

  return (
    <div className="d-flex justify-content-center">
      <Row className="col-line-top">
        <Col md="6" className="p-table">
          <p>
            {deputyVote.proposition_description}
            {/* Alteração do Regime de Tramitação desta proposição em virtude da
            alteração do regime do PL 3292/2020, por ter sido aprovado o REQ 245/2021
            que está apensado ao primeiro. */}
          </p>
        </Col>
        <Col md="2">
          {/* 18/03/2020 */}
          {deputyVote.date_time_vote}
        </Col>
        <Col md="2">
          {/* PL 4195/2012 */}
          {deputyVote.proposition_id}
        </Col>
        <Col md="2">
          {/* <img src={IconConfirma} alt="Confirma" className="icon-confirma" />
          <img src={IconCancela} alt="Cancela" className="icon-cancela" />
          <img src={IconShareBlack} alt="Share" className="icon-share-table icon-share" /> */}
          oi
        </Col>
      </Row>
    </div>
  );
}

export default Vote;
