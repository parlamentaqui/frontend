import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Breadcrumb/breadcrumb.css';

function ProjectsScreen() {
  return (
    <main>
      <Breadcrumb>
        <BreadcrumbItem href="/">Página Inicial</BreadcrumbItem>
        <BreadcrumbItem active>Lista de Projetos</BreadcrumbItem>
      </Breadcrumb>
      <h1>Lista de projetos</h1>
    </main>
  );
}

export default ProjectsScreen;