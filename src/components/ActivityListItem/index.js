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
      <Link to={`/deputados/${targetInfo.id}`} className="link">
        <Row className="center">
          <Col xs={2} className="mr-2 profileImage">
            <Image src={targetInfo.image} alt={`${targetInfo.name} profile.`} roundCircle />
          </Col>
          <Col>
            <h5 className="targetInfoStrings">{targetInfo.name}</h5>
            <p className="targetInfoStrings">{targetInfo.politicalParty}</p>
            <p className="targetInfoStrings">{targetInfo.state}</p>
          </Col>
          <Col xs={2} className="center">
            <Image src={ArrowRight} alt={`${targetInfo.name} profile.`} className="arrowRight" />
          </Col>
        </Row>
      </Link>
    </ListGroupItem>
  );
}

export default ActivityListItem;
