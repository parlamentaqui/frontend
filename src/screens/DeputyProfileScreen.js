import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Breadcrumb/breadcrumb.css';

function DeputyProfileScreen(props) {
  const { match } = props;
  const { id } = match.params;

  return (
    <main>
      <Breadcrumb>
        <BreadcrumbItem href="/">Página Inicial</BreadcrumbItem>
        <BreadcrumbItem href="/deputados">Lista de Deputados</BreadcrumbItem>
        <BreadcrumbItem active>{id}</BreadcrumbItem>
      </Breadcrumb>
      <h1>
        Deputado
        {id}
      </h1>
    </main>
  );
}

export default DeputyProfileScreen;
