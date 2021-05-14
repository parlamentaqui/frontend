import React from 'react';
import { Col, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DefaultPicture from '../../images/default-project.png';
import './index.css';

function formatPropImage(project) {
  return (
    <Col md="2" className="prop-image-box p-0 m-0">
      <Link to={`/proposicao/${project.proposicao_id}`}>
        <Image
          className="prop-img m-2"
          alt="FotoProjeto"
          src={project.image_url ? project.image_url : DefaultPicture}
        />
        <div className="transparent-filter">
          <div className="prop-resumed-info mb-3">
            <p>
              <strong>
                {project.sigla_tipo}
                {' '}
                {project.numero}
                /
                {project.ano}

              </strong>
            </p>
            <p>
              {project.tema_proposicao
                ? (`${project.tema_proposicao}`) : 'Sem Tema'}
            </p>
          </div>
        </div>
      </Link>
    </Col>
  );
}

function ImageDeputiesList(props) {
  const { project } = props;
  return (
    <Container className="break-line">
      {project.map((element) => formatPropImage(element))}
    </Container>
  );
}

export default ImageDeputiesList;
