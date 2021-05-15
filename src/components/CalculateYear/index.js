import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';

export const calculateYear = (year) => {
  const ano = year;
  const anosAntes = new Date().getFullYear() - ano;
  const anosDepois = 5 + (5 - anosAntes);
  let i = 0;
  for (i = ano - anosDepois; i <= ano + anosAntes; i + 1) {
    console.log(i);
  }
  return { i };
};

function CalculateYear(props) {
  const { year } = props;
  return (
    <Container className="break-line">
      <Row>{year.map((element) => calculateYear(element))}</Row>
    </Container>
  );
}

export default CalculateYear;
