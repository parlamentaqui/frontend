import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProjectsList.css';

function ProjectsList() {
  return (
    <div className="d-flex projectBox" md="12" lg="2">
      <div>
        <p className="projectText">Adriana Ventura</p>
        <p className="projectText">NOVO SP</p>
      </div>
      <div>
        <p className="projectText">PL 121/1999</p>
        <p className="projectText">Trabalho e Emprego</p>
      </div>
    </div>
  );
}

export default ProjectsList;
