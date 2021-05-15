import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Container, Image, Button, Row } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { propositionYearRoute } from '../../Api';
import DefaultPicture from '../../images/default-project.png';
import IconMore from '../../images/icon-more.png';
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
  const history = useHistory();
  const location = useLocation();
  const { project } = props;
  const year = history.location.pathname.split('/')[2];
  const [limit, setLimit] = useState(30);
  const [filter, setFilter] = useState({});
  useEffect(() => {
    axios.get(propositionYearRoute(year)).then((response) => {
      setFilter(response.data);
      console.log(response.data);
    });
  }, [year]);
  return (
    <Container className="break-line">
      {/* <Row>
        {year.map((element) => calculateYear(element))}
      </Row> */}
      <Row>
        {project.slice(0, limit).map((element) => formatPropImage(element))}
      </Row>
      <Row className="more mt-4 mb-4">
        {console.log(project.length)}
        {project.length > limit ? (
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
