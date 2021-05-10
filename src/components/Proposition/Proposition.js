import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Col, Container, Row, Image } from 'react-bootstrap';
import { profileRoute } from '../../Api';
import './Proposition.css';
import ArrowRight from '../../images/ArrowRight.svg';
import DefaultPicture from '../../images/default-user.png';
import { defineDate } from '../DataVoting/DataVoting';

/* OBS:

-> Existem deputados que criaram proposições que não estão na legislatura atual,
logo, não é possível recuperar infirmações sobre esse deputado

*/

function getAuthorInnerInfo(deputy, proposition) {
  return (
    <div className="d-flex deputy-info align-items-center justify-content-between">
      <div className="d-flex align-items-center">
        <img
          src={deputy.photo_url ? deputy.photo_url : DefaultPicture}
          alt="FotoAutorProp"
          className="icon-author ml-0 my-0 mr-3"
        />
        <div>
          <p className="authorNameInfo m-0">
            Autoria:
            {' '}
            {proposition.nome_autor}
          </p>
          <p className="authorPartyAndRegionInfo mx-0">
            {deputy.party ? `${deputy.party} - ${deputy.federative_unity}` : 'Informações adicionais não disponíveis'}
          </p>
        </div>
      </div>
      {deputy.id && (
        <Image
          media="screen and (min-width: 480px)"
          src={ArrowRight}
          alt="acessar perfil"
          className="arrowRight"
        />
      )}
    </div>
  );
}

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
      <>
        {deputy.id ? (
          <Link to={`/deputados/${deputy.id}`}>
            {getAuthorInnerInfo(deputy, proposition)}
          </Link>
        ) : (
          getAuthorInnerInfo(deputy, proposition)
        )}
      </>
    );
  }
  return (
    <div className="d-flex align-items-center h-100">
      <p className="authorNameInfo m-0">
        Autoria:
        {' '}
        {proposition.nome_autor}
      </p>
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
          <h1 className="mb-3">
            {proposition.descricao_tipo}
            {' '}
            {proposition.numero}
            /
            {proposition.ano}
          </h1>
          <p className="propMenu">{proposition.ementa}</p>

          <p className="propDetailedMenuText">Detalhes da ementa:</p>
          <p className="propDetailedMenu">{String(proposition.ementa_detalhada).length > 0 ? proposition.ementa_detalhada : 'Não há detalhes sobre a ementa.'}</p>
          <p className="propKeywords">
            Palavras-chave:
            {' '}
            {proposition.keywords}
          </p>
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
    </Container>
  );
}

export default Proposition;
