import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Tweet from '../Tweet';
import { getAuthorInfo, getStatusInfo } from './Proposition';
import './PropositionMobile.css';

function PropositionsMobile(props) {
  const { proposition, tweets } = props;

  return (
    <div>
      <div className="propThemeBoxMobile">
        <p>{proposition.tema_proposicao}</p>
      </div>
      <div>
        <div>
          <h1>
            {proposition.descricao_tipo}
            {' '}
            {proposition.numero}
            /
            {proposition.ano}
          </h1>
        </div>
        <div className="propMenu">
          {proposition.ementa}
        </div>
        <div>
          <div className="propAuthorBoxMobile w-100">
            {getAuthorInfo(proposition)}
          </div>
          <div className="propStatusBoxMobile">
            {getStatusInfo(proposition)}
          </div>
        </div>
      </div>
      <div>
        <Row>
          <Col>
            <p className="propDetailedMenuTextMobile"><strong>Detalhes da ementa:</strong></p>
          </Col>
        </Row>
        <p className="propDetailedMenuMobile">{String(proposition.ementa_detalhada).length > 0 ? proposition.ementa_detalhada : 'Não há detalhes sobre a ementa.'}</p>
      </div>
      <p className="propKeywordsMobile">
        Palavras-chave:
        {' '}
        {proposition.keywords}
      </p>
      <div>
        <h2 className="mt-5 mb-3">Tweets</h2>
        {tweets.length === 0 ? (
          <div className="no-tweets pl-2">
            <p>Não existem tweets.</p>
          </div>
        ) : (
          <div className="mb-5">
            <Tweet tweets={tweets} />
          </div>
        )}
      </div>
    </div>
  );
}

export default PropositionsMobile;