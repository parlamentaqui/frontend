import React from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Propositions from '../components/Propositions/Propositions';
import PropMobile from '../components/Propositions/PropositionsMobile';

function PropositionScreen() {
  const { id } = useParams();

  return (
    <main>
      {/* <Container> */}
      <Container className="d-block d-sm-none">
        <h1>Página de uma proposição</h1>
        <PropMobile />
      </Container>
      {/* <Container> */}
      <Container className="d-none d-sm-block">
        <h1>Página de uma proposicao yay</h1>
        <Propositions />
      </Container>
    </main>
  );
}

export default PropositionScreen;
