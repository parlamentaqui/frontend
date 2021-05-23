import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProfileMobile.css';
import { Row, Col } from 'react-bootstrap';
import {
  useHistory,
  useLocation,
} from 'react-router-dom/cjs/react-router-dom.min';
import Dotdotdot from 'react-dotdotdot';
import IconInsta from '../../images/insta.png';
import IconFace from '../../images/face.png';
import IconEmail from '../../images/email.png';
import IconTwitter from '../../images/twitter.png';
import ShareButton from '../ShareButton';
import IconInfo from '../../images/icon-info.png';
import { curiositiesRoute } from '../../Api';
import {
  showDeputyCabinetInfo,
  showPersonalDeputyInfo,
  deputyShareMessage,
  deputyShareLink,
} from './Profile';

function ProfileMobile(props) {
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
    <div className="d-flex justify-content-center">
      <Row className="background-div-mb">
        <Col
          md="4"
          className="d-flex justify-content-center align-items-center tam-row-name-mb"
        >
          <h4>
            <b>{deputy.name}</b>
          </h4>
        </Col>
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
        <Col md="7">
          <Row className="tam-row-name-mb">
            <Col md="12">
              <h4>{`TITULAR EM EXERCÍCIO ${deputy.initial_legislature_year} - ${deputy.final_legislature_year}`}</h4>
            </Col>
          </Row>
          <Row className="tam-row-info-mb">
            <Col md="6" className="col-info-mb">
              {showPersonalDeputyInfo(deputy)}
            </Col>
            <Col md="6" className="col-info-mb">
              {showDeputyCabinetInfo(deputy)}
            </Col>
          </Row>
          <Row className="tam-row-social-mb d-flex justify-content-center align-items-center">
            <img src={IconEmail} alt="Email" className="icon-email" />
            <img src={IconInsta} alt="Insta" className="icon-insta" />
            <img src={IconFace} alt="Face" className="icon-face" />
            <img src={IconTwitter} alt="Twitter" className="icon-tt" />
            <ShareButton
              message={deputyShareMessage(deputy)}
              link={deputyShareLink(deputy)}
              theme="dark"
            />
          </Row>
        </Col>
        <Col>
          <div className="curiosityMob">
            <div className="d-flex align-items-center">
              <img src={IconInfo} alt="Info" className="icon-info mr-3" />
              <div>
                <Dotdotdot clamp={6}>
                  <p title={curiosity.curiosity}>
                    {curiosity && curiosity.curiosity}
                  </p>
                </Dotdotdot>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ProfileMobile;
