import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DefaultPicture from '../../images/default-user.png';
import './index.css';

function formatDeputyImage(deputy) {
  return (
    <>
      <div className="deputy-image-box">
        <Link to={`/deputados/${deputy.id}`}>
          <Image
            className="deputy-img m-2"
            alt="FotoDeputado"
            src={deputy.photo_url ? deputy.photo_url : DefaultPicture}
          />
          <div className="deputy-resumed-info mb-3">
            <p>
              <strong>{deputy.name}</strong>
            </p>
            <p>
              {deputy.party
                ? `${deputy.party} - ${deputy.federative_unity}`
                : 'Sem Info'}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
}

function ImageDeputiesList(props) {
  const { deputies } = props;
  //   const end = elements != null && elements !== 0 ? elements : deputados.length;
  return (
    <Container className="break-line justify-content space-between">
      {deputies.map((element) => formatDeputyImage(element))}
    </Container>
  );
}

export default ImageDeputiesList;
