import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import DeputiesList from '../components/DeputiesList';
import { deputadosHomeRoute } from '../Api';

function DeputiesScreen() {
  const [deputies, setDeputies] = useState([]);

  useEffect(() => {
    axios.get(deputadosHomeRoute).then((response) => {
      setDeputies(response.data);
    });
  }, []);

  return (
    <main>
      <Container>
        <h1>Lista de deputados</h1>
        <DeputiesList deputados={deputies} theme="dark" />
      </Container>
    </main>
  );
}

export default DeputiesScreen;
