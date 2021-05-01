import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import SearchFilter from '../components/SearchFilter';
import SearchFilterP from '../components/SearchFilterProposition';
import DeputiesList from '../components/DeputiesList';
import PropositionsList from '../components/PropositionsList';

import {
  camaraSearchRoute,
  partiesSearchRoute,
  ufSearchRoute,
  propositionSearchRoute,
} from '../Api';

function SearchScreen() {
  const location = useLocation();
  const parameters = queryString.parse(location.search);
  const [deputados, setDeputados] = useState([]);
  const [estados, setEstados] = useState([]);
  const [partidos, setPartidos] = useState([]);
  const [proposicao, setProposicao] = useState([]);
  const [mode, setMode] = useState('Deputados');

  useEffect(() => {
    const requestBody = {
      nome: `${parameters.q || ''}`,
      uf: `${parameters.estado || ''}`,
      partido: `${parameters.partido || ''}`,
    };
    const requestBody2 = {
      proposicao: `${parameters.p || ''}`,
      deputado: `${parameters.deputados || ''}`,
      partido: `${parameters.partido || ''}`,
    };
    console.log(requestBody2);
    axios.post(camaraSearchRoute, requestBody).then((response) => {
      setDeputados(response.data);
    });
    axios.get(ufSearchRoute).then((response) => {
      setEstados(response.data);
    });
    axios.get(partiesSearchRoute).then((response) => {
      setPartidos(response.data);
    });
    axios.post(propositionSearchRoute, requestBody2).then((response) => {
      setProposicao(response.data);
    });
  }, []);
  return (
    <main>
      {mode === 'Deputados' ? (
        <>
          <SearchFilter
            estados={estados}
            partidos={partidos}
            mode={mode}
            setMode={(value) => setMode(value)}
          />
          <Container>
            <DeputiesList deputados={deputados} />
          </Container>
        </>
      ) : (
        [
          <SearchFilterP
            partidos={partidos}
            deputados={deputados}
            mode={mode}
            setMode={(value) => setMode(value)}
          />,
          <Container>
            <PropositionsList proposicao={proposicao} deputados={deputados} />
          </Container>,
        ]
      )}
    </main>
  );
}

export default SearchScreen;
