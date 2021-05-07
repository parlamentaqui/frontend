import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col, Container, Image } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import { propositionRoute } from '../../Api';
import Proposition from '../../components/Proposition/Proposition';
import PropMobile from '../../components/Proposition/PropositionMobile';
import './index.css';
import Tweet from '../../components/Tweet';

function PropositionScreen() {
  const history = useHistory();
  const id = history.location.pathname.split('/')[2];
  const [proposition, setProposition] = useState([]);
  // ToDo: const dos tweets
  const [tweet, setTweet] = useState([]);
  useEffect(() => {
    axios.get(propositionRoute(id)).then((response) => {
      setProposition(response.data);
    });
    // ToDo: axios p tweets
    // axios.get(rotaDosTweets(const dos tweets)).then((response) => {
    //   setDeputy(response.data);
    // });
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
            {/* ToDo: */}
            {/* props p passar dentro do componente tweet: tweets={tweets}  */}
            {/* ToDo: logica p ver se tem tweets. Verifica se o array está vazio */}
            {/* caso esteja retorna div de vazio, caso n retorna tweets */}
            {tweet.length === 0 ? (
              <div className="no-tweets pl-2">
                <p>Não existem tweets.</p>
              </div>
            ) : (
              <Tweet />
            )}
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default PropositionScreen;
