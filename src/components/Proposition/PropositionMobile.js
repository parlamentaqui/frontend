import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { getAuthorInfo, getStatusInfo } from './Proposition';
import './PropositionMobile.css';

function PropositionsMobile(props) {
  const { proposition } = props;

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
          <Row>
            <Col className="propAuthorBoxMobile">
              {getAuthorInfo(proposition)}
            </Col>
          </Row>
          <Row>
            <Col className="propStatusBoxMobile">
              {getStatusInfo(proposition)}
            </Col>
          </Row>
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
    </div>
  );
}

export default PropositionsMobile;
