import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { propositionRoute, tweetsPropositionRoute } from '../../Api';
import Proposition from '../../components/Proposition/Proposition';
import PropMobile from '../../components/Proposition/PropositionsMobile';
import './index.css';
import Tweet from '../../components/Tweet';

function PropositionScreen() {
  const history = useHistory();
  const id = history.location.pathname.split('/')[2];
  const [proposition, setProposition] = useState([]);
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    axios.get(propositionRoute(id)).then((response) => {
      setProposition(response.data);
    });
    axios.get(tweetsPropositionRoute(id)).then((response) => {
      setTweets(response.data);
    });
  }, []);

  return (
    <main>
      {/* <Container> */}
      <Container className="d-block d-sm-none">
        {/* <h1>Página de uma proposição</h1> */}
        <PropMobile proposition={proposition} />
      </Container>
      {/* <Container> */}
      <Container className="d-none d-sm-block">
        {/* <h1>Página de uma proposicao yay</h1> */}
        <Proposition proposition={proposition} />
      </Container>
      <Container className="mt-4 mb-2">
        <Row>
          <Col md={{ span: 6, offset: 6 }}>
            <h2 className="mb-3">Tweets</h2>
            {tweets.length === 0 ? (
              <div className="no-tweets pl-2">
                <p>Não existem tweets.</p>
              </div>
            ) : (
              <Tweet tweets={tweets} />
            )}
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default PropositionScreen;
