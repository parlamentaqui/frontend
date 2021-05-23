import React, { useEffect, useState } from 'react';
import axios from 'axios';
import queryString from 'query-string';
import { Col, Container, Image, Button, Row } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { propositionYearRoute } from '../../Api';
import DefaultPicture from '../../images/default-project.png';
import IconMore from '../../images/icon-more.png';
import './index.css';
import CalculateYear from '../CalculateYear';

function formatPropImage(project) {
  return (
    <Col xs={6} md="2" className="prop-image-box m-0 mb-3 mb-lg-4">
      <Link to={`/projetos/${project.proposicao_id}`}>
        <Image
          className="prop-img"
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

function ImageDeputiesList() {
  const location = useLocation();
  const parameters = queryString.parse(location.search);
  const year = parameters.year ? parameters.year : 2021;
  const [limit, setLimit] = useState(30);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios.get(propositionYearRoute(year)).then((response) => {
      setProjects(response.data);
    });
  }, [year]);
  return (
    <Container className="break-line">
      <CalculateYear year={year} />
      <Row className="w-100 m-0">
        {projects.slice(0, limit).map((element) => formatPropImage(element))}
      </Row>
      <Row className="more mt-4 mb-4 w-100">
        {projects.length > limit ? (
          <>
            <Button
              variant="outline-light"
              onClick={() => {
                const temp = limit + 30;
                setLimit(temp);
              }}
            >
              VER MAIS
              <img src={IconMore} alt="More" className="icon-more ml-3" />
            </Button>
          </>
        ) : (' ')}
      </Row>
    </Container>
  );
}

export default ImageDeputiesList;
