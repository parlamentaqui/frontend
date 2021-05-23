import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroupItem, Row, Col, Image } from 'react-bootstrap';
import './index.css';
import ArrowRight from '../../images/ArrowRight.svg';

// Esse componente é um item da lista de proposições da página do deputado
function ActivityListProposition({ targetInfo, isLast, theme }) {
  return (
    // fazer o cast do LisGroupItem pra div pra retornar corretamente
    <ListGroupItem as="div" className={`activityContainer ${theme} propositionList`}>
      {/* Link para página do deputado em questão. Esse deputado é passado pela
      classe que desenha o componente na tela */}
      <Link
        to={`/proposicao/${targetInfo.proposicao_id}`}
        className="link d-block"
      >
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <div>
              <div className="d-flex align-items-center">
                <h5 className="targetInfoStrings title font-color mr-3 my-0">
                  {`${targetInfo.sigla_tipo} ${targetInfo.numero}/${targetInfo.ano}`}
                </h5>
                <p>
                  <b>
                    {targetInfo.tema_proposicao}
                  </b>
                </p>
              </div>
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
