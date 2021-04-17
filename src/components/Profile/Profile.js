import React from 'react';
import './Profile.css';
import { Row, Col } from 'react-bootstrap';
// import Profile from '../../images/perfil.png';
import IconInsta from '../../images/insta.png';
import IconFace from '../../images/face.png';
import IconEmail from '../../images/email.png';
import IconTwitter from '../../images/twitter.png';
import ShareButton from '../ShareButton';

export const calculateAge = (birth) => {
  const birthday = new Date(birth);
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

export const deputyShareMessage = (deputy) => `Confira as ultimas votações, gastos e mais informações do deputado ${deputy.name}`;
export const deputyShareLink = (deputy) => `parlamentaqui.com/deputado/${deputy.id}`;

function ProfileD(props) {
  const { deputy } = props;

  return (
    <div className="d-flex justify-content-center">
      <Row className="background-div">
        <Col
          md="4"
          className="d-flex justify-content-center align-items-center"
        >
          <img
            src={deputy.photo_url}
            alt="Profile"
            className="img-arredondada"
          />
        </Col>
        <Col md="8">
          <Row className="tam-row-name">
            <Col md="10">
              <h1 className="mb-2">
                {deputy.name}
              </h1>
              <h4 className="mb-3">{`TITULAR EM EXERCÍCIO ${deputy.initial_legislature_year} - ${deputy.final_legislature_year}`}</h4>
            </Col>
            <Col
              md="2"
              className="d-flex justify-content-end align-items-start"
            >
              <ShareButton message={deputyShareMessage(deputy)} link={deputyShareLink(deputy)} />
            </Col>
          </Row>
          <Row className="tam-row-info pt-0">
            <Col md="6">
              <h5>Informações pessoais</h5>
              <p>
                <b>Nome:</b>
                {` ${deputy.full_name}`}
              </p>
              <p>
                <b>Partido:</b>
                {` ${deputy.party}`}
              </p>
              <p>
                <b>Estado:</b>
                {` ${deputy.federative_unity}`}
              </p>
              <p>
                <b>Sexo:</b>
                {` ${deputy.sex === 'M' ? ' Masculino' : ' Feminino'}`}
              </p>
              <p>
                <b>Idade:</b>
                {` ${calculateAge(deputy.birth_date)}`}
              </p>
              <p>
                <b>Email:</b>
                {` ${deputy.email}`}
              </p>
            </Col>
            <Col md="6" className="col-info">
              <h5>Informações do gabinete</h5>
              <p>
                <b>Número da sala:</b>
              </p>
              <p>
                <b>Andar:</b>
              </p>
              <p>
                <b>Prédio:</b>
              </p>
              <p>
                <b>Telefone:</b>
              </p>
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
    </div>
  );
}

export default ProfileD;
