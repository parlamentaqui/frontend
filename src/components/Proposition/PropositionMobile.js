import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import ShareButton from '../ShareButton';
import { getAuthorInfo, getStatusInfo } from './Proposition';
import './PropositionMobile.css';

function PropositionsMobile(props) {
  const history = useHistory();
  const location = useLocation();
  const { proposition } = props;
  const shareLink = history.location.pathname;
  const shareMessage = `Confira a ${proposition.tema_proposicao} em parlamentaqui.com/proposicao/${proposition.numero}`;
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
      <Row>
        <p className="propKeywordsMobile">
          Palavras-chave:
          {' '}
          {proposition.keywords}
        </p>
        <ShareButton
          message={shareMessage}
          link={shareLink}
        />
      </Row>
    </div>
  );
}

export default PropositionsMobile;
