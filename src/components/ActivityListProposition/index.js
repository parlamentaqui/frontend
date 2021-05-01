import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroupItem, Row, Col, Image } from 'react-bootstrap';
import './index.css';
import ArrowRight from '../../images/ArrowRight.svg';

// Esse componente é um item da lista de proposições da página do deputado
function ActivityListProposition({ targetInfo, isLast, deputados }) {
  return (
    // fazer o cast do LisGroupItem pra div pra retornar corretamente
    <ListGroupItem as="div" className="activityContainer">
      {/* Link para página do deputado em questão. Esse deputado é passado pela
      classe que desenha o componente na tela */}
      <Link
        to={`/proposicao/${targetInfo.proposicao_id}`}
        className="link d-block"
      >
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <div>
              <h5 className="targetInfoStrings title font-color">
                <b>{targetInfo.tema_proposicao}</b>
                <p>&nbsp;-&nbsp;</p>
                {targetInfo.nome_autor}
                <p>&nbsp;-&nbsp;</p>
              </h5>
              <p className="targetInfoStrings font-color">
                {targetInfo.despacho}
              </p>
            </div>
          </div>
          <Image src={ArrowRight} alt="acessar perfil" className="arrowRight" />
        </div>
        {!isLast && <hr />}
      </Link>
    </ListGroupItem>
  );
}

export default ActivityListProposition;
