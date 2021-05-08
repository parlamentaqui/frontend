import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Col, Container, Row, Image } from 'react-bootstrap';
import { profileRoute } from '../../Api';
import './Proposition.css';
import ArrowRight from '../../images/ArrowRight.svg';
import { defineDate } from '../DataVoting/DataVoting';

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
      <Link to={`/deputados/${deputy.id}`}>
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
            <Col md="1" lg="1">
              <Image
                media="screen and (min-width: 480px)"
                src={ArrowRight}
                alt="acessar perfil"
                className="arrowRight"
              />
            </Col>
          </Row>
        </div>
      </Link>
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
    <div>
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
  const { proposition } = props;

  return (
    <Container>
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

          <p className="propDetailedMenuText">Detalhes da ementa:</p>
          <p className="propDetailedMenu">{String(proposition.ementa_detalhada).length > 0 ? proposition.ementa_detalhada : 'Não há detalhes sobre a ementa.'}</p>
        </Col>
        <Col md="12" lg="6">
          <div className="propAuthorBox">
            {getAuthorInfo(proposition)}
          </div>
          <div className="propStatusBox">
            {getStatusInfo(proposition)}
          </div>
        </Col>
      </Row>
      <p className="propKeywords">
        Palavras-chave:
        {' '}
        {proposition.keywords}
      </p>
    </Container>
  );
}

export default Proposition;
