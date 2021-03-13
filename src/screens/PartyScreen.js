import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Breadcrumb/breadcrumb.css';

function PartyScreen() {
  return (
    <main>
      <Breadcrumb>
        <BreadcrumbItem href="/">Página Inicial</BreadcrumbItem>
        <BreadcrumbItem active>Lista de Partidos</BreadcrumbItem>
      </Breadcrumb>
      <h1>Lista de partidos</h1>
    </main>
  );
}

export default PartyScreen;
