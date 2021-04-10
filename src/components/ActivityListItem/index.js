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
function ActivityListItem({ targetInfo, isLast }) {
  return (
    // fazer o cast do LisGroupItem pra div pra retornar corretamente
    <ListGroupItem as="div" className="activityContainer">
      {/* Link para página do deputado em questão. Esse deputado é passado pela
      classe que desenha o componente na tela */}
      <Link to={`/deputados/${targetInfo.id}`} className="link d-block">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <Image
              className="img-deputados"
              src={targetInfo.photo_url}
              alt={`${targetInfo.name} profile.`}
            />
            <div>
              <h5 className="targetInfoStrings title">{targetInfo.name}</h5>
              <p className="targetInfoStrings">{targetInfo.party}</p>
              <p className="targetInfoStrings">{targetInfo.federative_unity}</p>
            </div>
          </div>
          <Image
            src={ArrowRight}
            alt="acessar perfil"
            className="arrowRight"
          />
        </div>
        {!isLast && <hr />}
      </Link>
    </ListGroupItem>
  );
}

export default ActivityListItem;
