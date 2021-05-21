import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import ProjectsList from '../components/ProjectsList';
import { allPropositionsRoute } from '../Api';

function ProjectsScreen() {
  const [project, setProject] = useState([]);
  useEffect(() => {
    axios.get(allPropositionsRoute).then((response) => {
      setProject(response.data);
    });
  }, []);
  return (
    <main>
      <Container className="d-flex justify-content flex-start">
        <ProjectsList project={project} />
      </Container>
    </main>
  );
}

export default ProjectsScreen;
