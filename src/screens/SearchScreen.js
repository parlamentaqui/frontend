import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import '../components/Breadcrumb/breadcrumb.css';
import SearchFilter from './SearchScreen/SearchFilter';
// import { useHistory } from 'react-router-dom';

function SearchScreen() {
  return (
    <main>
      <Breadcrumb>
        <BreadcrumbItem href="/">Página Inicial</BreadcrumbItem>
        <BreadcrumbItem active>Busca</BreadcrumbItem>
      </Breadcrumb>
      <SearchFilter />
    </main>
  );
}

export default SearchScreen;
