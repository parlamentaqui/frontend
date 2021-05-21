import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory, useLocation } from 'react-router-dom';
import './Profile.css';
import { Row, Col } from 'react-bootstrap';
import IconInsta from '../../images/insta.png';
import IconFace from '../../images/face.png';
import IconEmail from '../../images/email.png';
import IconTwitter from '../../images/twitter.png';
import IconInfo from '../../images/icon-info.png';
import ShareButton from '../ShareButton';
import { curiositiesRoute } from '../../Api';

// Demora em carregar as curiosidades

export const calculateAge = (birth) => {
  const birthday = new Date(birth);
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

export const deputyShareMessage = (deputy) => `Confira as ultimas votações, gastos e mais informações do deputado ${deputy.name}`;
export const deputyShareLink = (deputy) => `parlamentaqui.com/deputado/${deputy.id}`;

export function showPersonalDeputyInfo(deputy) {
  return (
    <div>
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
    </div>
  );
}

export function showDeputyCabinetInfo(deputy) {
  return (
    <div>
      <h5>Informações do gabinete</h5>
      <p>
        <b>Número da sala:</b>
        {` ${deputy.office_number ? deputy.office_number : 'Não disponivel'}`}
      </p>
      <p>
        <b>Andar:</b>
        {` ${deputy.office_floor ? deputy.office_floor : 'Não disponivel'}`}
      </p>
      <p>
        <b>Prédio:</b>
        {` ${deputy.office_premise ? deputy.office_premise : 'Não disponivel'}`}
      </p>
      <p>
        <b>Telefone:</b>
        {` ${deputy.office_phone ? deputy.office_phone : 'Não disponivel'}`}
      </p>
    </div>
  );
}

function ProfileD(props) {
  const { deputy } = props;
  const history = useHistory();
  const location = useLocation();
  const id = history.location.pathname.split('/')[2];
  const [curiosity, setCuriosity] = useState({});
  useEffect(() => {
    axios.get(curiositiesRoute(id)).then((response) => {
      setCuriosity(response.data);
    });
  }, []);
  return (
    <div className="d-flex justify-content-center position-relative">
      <div className="background-div d-flex">
        <div className="d-flex justify-content-center align-items-center flex-column deputy-picture">
          <img
            src={deputy.photo_url}
            alt="Profile"
            className="img-arredondada"
          />
          <div>
            <Row className="tam-row-social d-flex justify-content-center align-items-center m-0">
              <img src={IconEmail} alt="Email" className="icon-email" />
              <img src={IconInsta} alt="Insta" className="icon-insta" />
              <img src={IconFace} alt="Face" className="icon-face" />
              <img src={IconTwitter} alt="Twitter" className="icon-tt" />
            </Row>
          </div>
        </div>
        <div className="w-100">
          <Row className="tam-row-name p-0">
            <Col md="10">
              <h1 className="mb-2">{deputy.name}</h1>
              <h4 className="mb-3 tit-exercicio">{`TITULAR EM EXERCÍCIO ${deputy.initial_legislature_year} - ${deputy.final_legislature_year}`}</h4>
            </Col>
            <Col
              md="2"
              className="d-flex justify-content-end align-items-start"
            >
              <ShareButton message={deputyShareMessage(deputy)} link={deputyShareLink(deputy)} theme="dark" />
            </Col>
          </Row>
          <Row className="tam-row-info pt-0">
            <Col md="6">{showPersonalDeputyInfo(deputy)}</Col>
            <Col md="6" className="col-info">
              {showDeputyCabinetInfo(deputy)}
            </Col>
          </Row>
          <div className="curiosity">
            <div className="d-flex align-items-flex-end">
              <img src={IconInfo} alt="Info" className="icon-info mr-3 align-self-auto" />
              <p>{curiosity && curiosity.curiosity}</p>
              {/* ToDo: olhar https://github.com/CezaryDanielNowak/React-dotdotdot p resolver */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileD;
