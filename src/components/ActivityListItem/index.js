import React from 'react';
import { Link } from 'react-router-dom';
import {
  ListGroupItem,
  Row,
  Col,
  Image
} from 'react-bootstrap';
import './index.css';
import ArrowRight from '../../images/ArrowRight.svg';

// Esse componente é um item da lista de deputados da página HOME
function ActivityListItem({ targetInfo }) {
  return (
    // fazer o cast do LisGroupItem pra div pra retornar corretamente
    <ListGroupItem as="div" className="activityContainer">
      {/* Link para página do deputado em questão. Esse deputado é passado pela
      classe que desenha o componente na tela */}
      {console.log(targetInfo)}
      <Link to={`/deputado/${targetInfo.id}`} className="link d-block">
        <Row className="center">
          <Col xs={2}>
            <Image
              className="w-100 img-deputados"
              src={targetInfo.photo_url}
              alt={`${targetInfo.name} profile.`}
            />
          </Col>
          <Col>
            <p className="targetInfoTitle">{targetInfo.name}</p>
            <p className="targetInfoStrings">{targetInfo.party}</p>
            <p className="targetInfoStrings">{targetInfo.federative_unity}</p>
          </Col>
          <Col xs={2} className="center">
            <Image
              src={ArrowRight}
              alt="acessar perfil"
              className="arrowRight"
            />
          </Col>
        </Row>
      </Link>
    </ListGroupItem>
  );
}

export default ActivityListItem;
