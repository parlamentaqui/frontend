import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import './index.css';
import { Row, Col, Button, Form, FormControl } from 'react-bootstrap';
// import { useHistory, useLocation } from 'react-router-dom';
import growth from '../../images/growth.png';
// import { growthRoute } from '../../Api';

// function spentGrowth(growth) {
//   return (
//     <>
//       <Col className="borda py-3" title={growth.date}>
//         {growth.date}
//       </Col>
//       <Col className="borda py-3" title={growth.value}>
//         R$
//         {growth.value}
//       </Col>
//     </>
//   );
// }

function PratrimonialGrowth() {
  //   const history = useHistory();
  //   const location = useLocation();
  //   const id = history.location.pathname.split('/')[2];
  //   const [growth, setGrowth] = useState([]);

  //   useEffect(() => {
  //     axios.get(growthRoute(id)).then((response) => {
  //       setGrowth(response.data);
  //     });
  //   }, []);
  return (
    <div className="d-flex justify-content-center">
      <Row className="background-div-1">
        <Col>
          <Row>
            <Col md="10" className="d-flex align-items-center my-3 crescimento">
              <img src={growth} alt="crescimento" className="growth mr-2" />
              CRESCIMENTO PATRIMONIAL
            </Col>
          </Row>
          <Row className="growth">
            <Col className="borda py-3">
              a
              {/* {growth.slice(0, 5).map((element) => spentGrowth(element))} */}
            </Col>
            <Col className="py-3">
              b
              {/* <AnnotationChart growth={growth} /> */}
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default PratrimonialGrowth;
