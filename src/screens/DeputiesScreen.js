import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Breadcrumb/breadcrumb.css';

function DeputiesScreen() {
  return (
    <main>
      <Breadcrumb>
        <BreadcrumbItem href="/">Página Inicial</BreadcrumbItem>
        <BreadcrumbItem active>Lista de Deputados</BreadcrumbItem>
      </Breadcrumb>
      <h1>Lista de deputados</h1>
    </main>
  );
}

export default DeputiesScreen;
