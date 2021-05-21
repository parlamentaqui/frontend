import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import { Row, Col } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import growthI from '../../images/growth.png';
import { growthRoute } from '../../Api';
import AnnotationChart from '../Charts/AnnotationChart';

function spentGrowth(growth) {
  return (
    <>
      <Row>
        <Col xs={4} className="py-3 w-100 h-100" title={growth.date}>
          {growth.year}
        </Col>
        <Col xs={8} className="w-100 h-100 py-3" title={growth.value}>
          R$
          {growth.value}
        </Col>
      </Row>
    </>
  );
}

function PratrimonialGrowth() {
  const history = useHistory();
  const location = useLocation();
  const id = history.location.pathname.split('/')[2];
  const [growth, setGrowth] = useState([]);
  useEffect(() => {
    axios.get(growthRoute(id)).then((response) => {
      setGrowth(response.data);
    });
  }, []);
  return (
    <div className="d-flex justify-content-center">
      <Row className="background-div-1">
        <Col>
          <Row>
            <Col md="10" className="d-flex align-items-center my-3 crescimento">
              <img src={growthI} alt="crescimento" className="growth mr-2" />
              CRESCIMENTO PATRIMONIAL
            </Col>
          </Row>
          {growth.length === 0 ? (
            <div className="w-100 py-4 d-flex justify-content-center align-items-center growth">
              <p>Sem Declarações</p>
            </div>
          ) : (
            <>
              <Row className="growth py-3">
                <Col xs={2}>Ano</Col>
                <Col xs={10}>Declaração de Patrimônio</Col>
              </Row>
              <Row className="growth">
                <Col className="py-3 w-100">
                  {growth.slice(0, 5).map((element) => spentGrowth(element))}
                </Col>
                <Col className="py-3 borda">
                  <AnnotationChart growth={growth} />
                </Col>
              </Row>
            </>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default PratrimonialGrowth;
