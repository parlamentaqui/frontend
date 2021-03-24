import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SearchFilter from './SearchScreen/SearchFilter';
import DeputiesList from '../components/DeputiesList/DeputiesList';

function SearchScreen() {
  return (
    <main>
      <SearchFilter />
      <Container>
        <Row className="space" />
        <DeputiesList />
      </Container>
    </main>
  );
}

export default SearchScreen;
