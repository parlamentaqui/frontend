import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DefaultPicture from '../../images/default-user.png';
import './index.css';

function formatDeputyImage(deputy) {
  console.log('AQUI', deputy);
  return (
    <>
      <div>
        <Image
          className="deputy-img m-2"
          src={deputy.photo_url ? deputy.photo_url : DefaultPicture}
        />
        <div className="deputy-info">
          <h6>{deputy.name}</h6>
          <h6>
            {deputy.party
              ? `${deputy.party} - ${deputy.federative_unity}`
              : 'Informações adicionais não disponíveis'}
          </h6>
        </div>
      </div>
    </>
  );
}

function ImageDeputiesList(props) {
  const { deputies } = props;
  //   const end = elements != null && elements !== 0 ? elements : deputados.length;
  return (
    <Container className="break-line">
      {deputies.map((element) => formatDeputyImage(element))}
    </Container>
  );
}

export default ImageDeputiesList;
