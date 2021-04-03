import React from 'react';
import {
  Container, Row, Col, Table
} from 'react-bootstrap';
import Profile from '../images/perfil.png';
import IconInsta from '../images/insta.png';
import IconFace from '../images/face.png';
import IconEmail from '../images/email.png';
import IconTwitter from '../images/twitter.png';
import IconShare from '../images/share.png';
import IconShareBlack from '../images/share-black.png';
import IconVoto from '../images/votacao.png';
import IconConfirma from '../images/icon-confirma.png';
import IconCancela from '../images/icon-cancela.png';
import IconGasto from '../images/gasto.png';
import IconGrafico from '../images/grafico.png';
import IconAnexo from '../images/anexo.png';
import IconFiltro from '../images/filtro.png';
import '../css/DeputyProfileScreen.css';
import Tweet from '../components/Tweet/Tweet';

function DeputyProfileScreen() {
  return (
    <main>
      <Container>
        <Row className="background-div">
          <Col md="4" className="d-flex justify-content-center align-items-center">
            <img src={Profile} alt="Profile" className="img-arredondada" />
          </Col>
          <Col md="8">
            <Row className="tam-row-name">
              <Col md="10">
                <h4><b>ERIKA KOKAY</b></h4>
                <h4>TITULAR EM EXERCÍCIO 2019 - 2023</h4>
              </Col>
              <Col md="2" className="d-flex justify-content-end align-items-start">
                <img src={IconShare} alt="Share" className="icon-share" />
              </Col>
            </Row>
            <Row className="tam-row-info">
              <Col md="6">
                <h5>Informações pessoais</h5>
                <h6><b>Nome:</b></h6>
                <h6><b>Partido:</b></h6>
                <h6><b>Estado:</b></h6>
                <h6><b>Idade:</b></h6>
              </Col>
              <Col md="6" className="col-info">
                <h5>Informações do gabinete</h5>
                <h6><b>Número da sala:</b></h6>
                <h6><b>Andar:</b></h6>
                <h6><b>Prédio:</b></h6>
                <h6><b>Telefone:</b></h6>
              </Col>
            </Row>
            <Row className="tam-row-social d-flex justify-content-center align-items-center">
              <img src={IconEmail} alt="Email" className="icon-email" />
              <img src={IconInsta} alt="Insta" className="icon-insta" />
              <img src={IconFace} alt="Face" className="icon-face" />
              <img src={IconTwitter} alt="Twitter" className="icon-tt" />
            </Row>
          </Col>
        </Row>
        <Row className="space" />
        <Row className="background-div-1">
          <Col>
            <Table responsive>
              <thead>
                <tr>
                  <th className="h4-table">
                    <img src={IconVoto} alt="Voto" className="icon-votacao" />
                    VOTAÇÕES
                  </th>
                  <th> </th>
                  <th> </th>
                  <th> </th>
                  <th><img src={IconShareBlack} alt="Share" className="icon-share-black" /></th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ementa</td>
                  <td>Data</td>
                  <td>Proposições</td>
                  <td colSpan="3">Voto</td>
                </tr>
                <tr>
                  <td className="p-table">
                    <p>
                      Alteração do Regime de Tramitação desta proposição em virtude da
                      alteração do regime do PL 3292/2020, por ter sido aprovado o REQ 245/2021
                      que está apensado ao primeiro.
                    </p>
                  </td>
                  <td>18/03/2020</td>
                  <td>PL 4195/2012</td>
                  <td><img src={IconConfirma} alt="Confirma" className="icon-confirma" /></td>
                  <td><img src={IconCancela} alt="Cancela" className="icon-cancela" /></td>
                  <td><img src={IconShareBlack} alt="Share" className="icon-share" /></td>
                </tr>
                <tr>
                  <td className="p-table">
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
                  </td>
                  <td>18/03/2020</td>
                  <td>
                    <p>PL 3292/2020</p>
                    <p>PL 3293/2020</p>
                  </td>
                  <td><img src={IconConfirma} alt="Confirma" className="icon-confirma" /></td>
                  <td><img src={IconCancela} alt="Cancela" className="icon-cancela" /></td>
                  <td />
                </tr>
                <tr>
                  <td colSpan="3"> </td>
                  <td colSpan="3" className="alinhamento-end">VER MAIS</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row className="space" />
        <Row className="background-div-1">
          <Col>
            <Table responsive>
              <thead>
                <tr>
                  <th className="h4-table">
                    <img src={IconGasto} alt="Gasto" className="icon-votacao" />
                    GASTOS
                  </th>
                  <th> </th>
                  <th> </th>
                  <th> </th>
                  <th className="d-flex justify-content-end">
                    <img src={IconShareBlack} alt="Share" className="icon-share-black" />
                    <img src={IconGrafico} alt="Grafico" className="icon-grafico" />
                  </th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Serviço</td>
                  <td>Valor</td>
                  <td>
                    Tipo de gasto
                    <img src={IconFiltro} alt="Filtro" className="icon-share" />
                  </td>
                  <td>Data</td>
                  <td>
                    Razão Social
                    <img src={IconFiltro} alt="Filtro" className="icon-share" />
                  </td>
                  <td>NF</td>
                </tr>
                {Array.from({ length: 6 }).map(() => (
                  <tr>
                    <td>
                      <p>
                        Divulgação da Atividade Parlamentar.
                      </p>
                    </td>
                    <td>R$6.325,00</td>
                    <td>Cota Parlamentar</td>
                    <td>18/03/2020</td>
                    <td>TAMIRYS MACHADO...</td>
                    <td><img src={IconAnexo} alt="Anexo" className="icon-share" /></td>
                  </tr>
                ))}
                <tr>
                  <td colSpan="6" className="alinhamento-end">VER MAIS</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row className="space" />
        <Row>
          <Col md="6">
            <h1>Notícias</h1>
          </Col>
          <Col md="6" className="body-tweets">
            <h1>Tweets</h1>
            <Tweet />
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default DeputyProfileScreen;
