import React from 'react';
import './DataVoting.css';
import {
  Row, Col
} from 'react-bootstrap';
import IconShareBlack from '../../images/share-black.png';
import IconVoto from '../../images/votacao.png';
import IconConfirma from '../../images/icon-confirma.png';
import IconCancela from '../../images/icon-cancela.png';

function DataVoting() {
  return (
    <div className="d-flex justify-content-center">
      <Row className="background-div-1">
        <Col>
          <Row>
            <Col md="11">
              <img src={IconVoto} alt="Voto" className="icon-votacao" />
              VOTAÇÕES
            </Col>
            <Col md="1"><img src={IconShareBlack} alt="Share" className="icon-share-black" /></Col>
          </Row>
          <Row>
            <Col md="6">Ementa</Col>
            <Col md="2">Data</Col>
            <Col md="2">Proposições</Col>
            <Col md="2">Voto</Col>
          </Row>
          <Row className="col-line-top">
            <Col md="6" className="p-table">
              <p>
                Alteração do Regime de Tramitação desta proposição em virtude da
                alteração do regime do PL 3292/2020, por ter sido aprovado o REQ 245/2021
                que está apensado ao primeiro.
              </p>
            </Col>
            <Col md="2">18/03/2020</Col>
            <Col md="2">PL 4195/2012</Col>
            <Col md="2">
              <img src={IconConfirma} alt="Confirma" className="icon-confirma" />
              <img src={IconCancela} alt="Cancela" className="icon-cancela" />
              <img src={IconShareBlack} alt="Share" className="icon-share-table icon-share" />
            </Col>
          </Row>
          <Row className="col-line-top">
            <Col md="6" className="p-table">
              <p>
                <b>REQ 245/2021</b>
                <br />
                Requer, nos termos do artigo 155 do Regimento Interno da Câmara dos Deputados,
                que seja incluído automaticamente na Ordem do Dia o Projeto de
                Lei nº 3292/2020, que “Altera a Lei nº 11.947, de 16 de junho de 2009,
                para estabelecer percentual mínimo para a aquisição de leite sob a forma
                fluida com recursos do Programa Nacional de Alimentação Escolar (PNAE)
                na forma que discrimina e dá outras providências.
              </p>
            </Col>
            <Col md="2">18/03/2020</Col>
            <Col md="2">
              PL 3292/2020
              <br />
              PL 3293/2020
            </Col>
            <Col md="2">
              <img src={IconConfirma} alt="Confirma" className="icon-confirma" />
              <img src={IconCancela} alt="Cancela" className="icon-cancela" />
            </Col>
          </Row>
          <Row className="col-line-top">
            <Col md="12" className="alinhamento-end">VER MAIS</Col>
          </Row>
        </Col>
      </Row>
    </div>

  );
}

export default DataVoting;
