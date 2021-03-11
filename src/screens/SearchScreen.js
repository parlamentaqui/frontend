import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import '../components/Breadcrumb/breadcrumb.css';

function SearchScreen() {
  return (
    <main>
      <Breadcrumb>
        <BreadcrumbItem href="/">Página Inicial</BreadcrumbItem>
        <BreadcrumbItem active>Busca</BreadcrumbItem>
      </Breadcrumb>
      <h1>SearchScreen</h1>
    </main>
  );
}

export default SearchScreen;
