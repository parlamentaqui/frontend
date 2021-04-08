import React from 'react';
import './Profile.css';
import { Row, Col } from 'react-bootstrap';
// import Profile from '../../images/perfil.png';
import IconInsta from '../../images/insta.png';
import IconFace from '../../images/face.png';
import IconEmail from '../../images/email.png';
import IconTwitter from '../../images/twitter.png';
import ShareButton from '../ShareButton/ShareButton';

function ProfileD(props) {
  const { deputy } = props;

  const calculateAge = (birth) => {
    const birthday = new Date(birth);
    const ageDifMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
  const shareMessage = `Confira as ultimas votações, gastos e mais informações do deputado ${deputy.name}`;
  const shareLink = `localhost:3000/deputado/${deputy.id}`;
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
              <h4>
                <b>{deputy.name}</b>
              </h4>
              <h4>{`TITULAR EM EXERCÍCIO ${deputy.initial_legislature_year} - ${deputy.final_legislature_year}`}</h4>
            </Col>
            <Col
              md="2"
              className="d-flex justify-content-end align-items-start"
            >
              <ShareButton message={shareMessage} link={shareLink} />
            </Col>
          </Row>
          <Row className="tam-row-info">
            <Col md="6">
              <h4>Informações pessoais</h4>
              <h5>
                <b>Nome:</b>
                {` ${deputy.full_name}`}
              </h5>
              <h5>
                <b>Partido:</b>
                {` ${deputy.party}`}
              </h5>
              <h5>
                <b>Estado:</b>
                {` ${deputy.federative_unity}`}
              </h5>
              <h5>
                <b>Sexo:</b>
                {` ${deputy.sex === 'M' ? ' Masculino' : ' Feminino'}`}
              </h5>
              <h5>
                <b>Idade:</b>
                {` ${calculateAge(deputy.birth_date)}`}
              </h5>
              <h5>
                <b>Email:</b>
                {` ${deputy.email}`}
              </h5>
            </Col>
            <Col md="6" className="col-info">
              <h4>Informações do gabinete</h4>
              <h5>
                <b>Número da sala:</b>
              </h5>
              <h5>
                <b>Andar:</b>
              </h5>
              <h5>
                <b>Prédio:</b>
              </h5>
              <h5>
                <b>Telefone:</b>
              </h5>
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
