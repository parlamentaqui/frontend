import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { Col, Container, Row, Image } from 'react-bootstrap';
import { profileRoute } from '../../Api';
import './Proposition.css';
import ArrowRight from '../../images/ArrowRight.svg';
import { defineDate } from '../DataVoting/DataVoting';
import ShareButton from '../ShareButton';

/* OBS:

-> Existem deputados que criaram proposições que não estão na legislatura atual,
logo, não é possível recuperar infirmações sobre esse deputado
-> Não é possível deixar espaços em branco para apresentação sem o linter acusar

*/

// Formata o div da informação do autor da proposição
export function getAuthorInfo(proposition) {
  const str = String(proposition.tipoAutor);

  if (!str.localeCompare('Deputado')) {
    const [deputy, setDeputy] = useState([]);

    useEffect(() => {
      axios.get(profileRoute(proposition.id_deputado_autor)).then((response) => {
        setDeputy(response.data);
      });
    }, []);

    return (
      <div>
        <Row>
          <img
            src={deputy.photo_url}
            alt="FotoAutorProp"
            className="icon-author"
          />
          <div>
            <p className="authorNameInfo">
              Autoria:
              {' '}
              {proposition.nome_autor}
            </p>
            <p className="authorPartyAndRegionInfo">
              {deputy.party}
              {' '}
              -
              {' '}
              {deputy.federative_unity}
            </p>
          </div>
          <Image
            media="screen and (min-width: 480px)"
            src={ArrowRight}
            alt="acessar perfil"
            className="arrowRight"
          />
        </Row>
      </div>
    );
  }
  return (
    <div>
      <Row>
        <div>
          <p className="authorNameInfo">
            Autoria:
            {' '}
            {proposition.nome_autor}
          </p>
        </div>
      </Row>
    </div>
  );
}

export function getStatusInfo(proposition) {
  return (
    <div className="propStatusBox" md="12" lg="6">
      <h5><strong>Status da proposição</strong></h5>
      {'\n'}
      <p>
        <strong>Data:</strong>
        {' '}
        {defineDate(proposition.data_proposicao)}
      </p>
      <p>
        <strong>Despacho:</strong>
        {' '}
        {proposition.despacho}
      </p>
      <p>
        <strong>Situação:</strong>
        {' '}
        {proposition.descricao_situacao}
      </p>
      <p>
        <strong>Orgao:</strong>
        {' '}
        {proposition.sigla_orgao}
      </p>
    </div>
  );
}

function Proposition(props) {
  const history = useHistory();
  const location = useLocation();
  const { proposition } = props;
  const shareLink = history.location.pathname;
  const shareMessage = `Confira a ${proposition.tema_proposicao} em parlamentaqui.com/proposicao/${proposition.numero}`;
  return (
    <Container>
      <div>
        <p className="propThemeBox">{proposition.tema_proposicao}</p>
        <Row>
          <Col md="12" lg="6">
            <h1>
              {proposition.descricao_tipo}
              {' '}
              {proposition.numero}
              /
              {proposition.ano}
            </h1>
            <p className="propMenu">{proposition.ementa}</p>
          </Col>
          <Col className="propAuthorBox" md="12" lg="6">
            {getAuthorInfo(proposition)}
          </Col>
        </Row>
      </div>
      <Row>
        <Col>
          <p className="propDetailedMenuText">Detalhes da ementa:</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="propDetailedMenu">{String(proposition.ementa_detalhada).length > 0 ? proposition.ementa_detalhada : 'Não há detalhes sobre a ementa.'}</p>
        </Col>
        <Col>
          {getStatusInfo(proposition)}
        </Col>

      </Row>
      <Row>
        <Col>
          <Col>
            <p className="propKeywords">
              Palavras-chave:
              {' '}
              {proposition.keywords}
            </p>
          </Col>
          <Col>
            <ShareButton
              message={shareMessage}
              link={shareLink}
            />
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

export default Proposition;
