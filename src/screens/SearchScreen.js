import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import SearchFilter from '../components/SearchScreen/SearchFilter';
import DeputiesList from '../components/DeputiesList/DeputiesList';
import { camaraSearchRoute } from '../Api';

function SearchScreen() {
  const location = useLocation();
  const parameters = queryString.parse(location.search);
  const [deputados, setDeputados] = useState([]);
  useEffect(() => {
    const requestBody = {
      nome: `${parameters.q || ''}`,
      uf: `${parameters.estado || ''}`,
      partido: `${parameters.partido || ''}`
    };
    axios.post(camaraSearchRoute, requestBody).then((response) => {
      setDeputados(response.data);
    });
  }, []);
  return (
    <main>
      <SearchFilter />
      <Container>
        <DeputiesList deputados={deputados} />
      </Container>
    </main>
  );
}

export default SearchScreen;
