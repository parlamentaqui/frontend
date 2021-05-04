import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { profileRoute, propositionRoute } from '../../Api';
import './Proposition.css';
import AuthorPhoto from '../../images/Kokay.jpg';

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
              {proposition.nome_autor}
            </p>
            <p className="authorPartyAndRegionInfo">
              {deputy.party}
              -
              {deputy.federative_unity}
            </p>
          </div>
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
      <Row>
        <Col md="12" lg="6">
          <h1>
            {proposition.descricao_tipo}
            {proposition.numero}
            /
            {proposition.ano}
          </h1>
        </Col>
        <Col className="propAuthorBox" md="12" lg="6">
          {getAuthorInfo(proposition)}
        </Col>
      </Row>
      <Row>
        <Col>
          <Container classname="propThemeBox">
            <p>{proposition.tema_proposicao}</p>
            <br />
            <p>{proposition.ementa}</p>
            <p>
              <br />
              {proposition.ementa_detalhada}
            </p>
          </Container>
        </Col>
        <Col className="propStatusBox" md="12" lg="6">
          <h5>Status da proposição</h5>
          <p>
            Data:
            {proposition.data_proposicao}
          </p>
          <p>
            Despacho:
            {proposition.despacho}
          </p>
          <p>
            Situação:
            {proposition.descricao_situacao}
          </p>
          <p>
            Orgao:
            {proposition.sigla_orgao}
          </p>
        </Col>
      </Row>
      <p>
        Keywords:
        {proposition.keywords}
      </p>
    </Container>
  );
}

export default Proposition;
