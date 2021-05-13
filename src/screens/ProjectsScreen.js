import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import ProjectsList from '../components/ProjectsList/ProjectsList';

function ProjectsScreen() {
  return (
    <main>
      <Container>
        <ProjectsList />
      </Container>
    </main>
  );
}

export default ProjectsScreen;
