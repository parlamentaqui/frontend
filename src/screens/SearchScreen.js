import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import SearchFilter from '../components/SearchFilter';
import DeputiesList from '../components/DeputiesList';
import { camaraSearchRoute, partiesSearchRoute, ufSearchRoute } from '../Api';

function SearchScreen() {
  const location = useLocation();
  const parameters = queryString.parse(location.search);
  const [deputados, setDeputados] = useState([]);
  const [estados, setEstados] = useState([]);
  const [partidos, setPartidos] = useState([]);
  useEffect(() => {
    const requestBody = {
      nome: `${parameters.q || ''}`,
      uf: `${parameters.estado || ''}`,
      partido: `${parameters.partido || ''}`
    };
    axios.post(camaraSearchRoute, requestBody).then((response) => {
      setDeputados(response.data);
    });
    axios.get(ufSearchRoute).then((response) => {
      setEstados(response.data);
    });
    axios.get(partiesSearchRoute).then((response) => {
      setPartidos(response.data);
    });
  }, []);
  return (
    <main>
      <SearchFilter estados={estados} partidos={partidos} />
      <Container>
        <DeputiesList deputados={deputados} />
      </Container>
    </main>
  );
}

export default SearchScreen;
