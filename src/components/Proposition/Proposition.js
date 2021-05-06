import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Container, Row, Image } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { profileRoute, propositionRoute } from '../../Api';
import './Proposition.css';
import AuthorPhoto from '../../images/Kokay.jpg';
import ArrowRight from '../../images/ArrowRight.svg';
import { defineDate } from '../DataVoting/DataVoting';

/* OBS:

-> Existem deputados que criaram proposições que não estão na legislatura atual,
logo, não é possível recuperar infirmações sobre esse deputado
-> Não é possível deixar espaços em branco para apresentação sem o linter acusar

*/

// Formata o div da informação do autor da proposição
function getAuthorInfo(proposition) {
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

function Proposition(props) {
  const { proposition } = props;

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
        <Col md="12" lg="4">
          <div className="propStatusBox">
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
