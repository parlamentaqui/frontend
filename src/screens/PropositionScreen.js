import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import { propositionRoute } from '../Api';
import Proposition from '../components/Proposition/Proposition';
import PropMobile from '../components/Proposition/PropositionMobile';

function PropositionScreen() {
  const history = useHistory();
  const id = history.location.pathname.split('/')[2];
  const [proposition, setProposition] = useState([]);

  useEffect(() => {
    axios.get(propositionRoute(id)).then((response) => {
      setProposition(response.data);
    });
  }, []);

  return (
    <main>
      {/* <Container> */}
      <Container className="d-block d-sm-none">
        {/* <h1>Página de uma proposição</h1> */}
        <PropMobile props={id} />
      </Container>
      {/* <Container> */}
      <Container className="d-none d-sm-block">
        {/* <h1>Página de uma proposicao yay</h1> */}
        <Proposition proposition={proposition} />
      </Container>
    </main>
  );
}

export default PropositionScreen;
