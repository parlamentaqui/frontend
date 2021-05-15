import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './index.css';

export const item = (year, Selectedyear) => {
  const location = useLocation();
  const itemClass = year.toString() === Selectedyear ? 'mx-3 anos selecionado' : 'mx-3 anos';
  return (
    <a href={`${location.pathname}?year=${year}`} className={itemClass}>
      {year}
    </a>
  );
};

function CalculateYear(props) {
  const { year } = props;
  const ano = parseInt(year, 10);
  const listaAnos = [];
  let anosAntes = new Date().getFullYear() - ano;
  anosAntes = anosAntes < 5 ? anosAntes : 5;
  const anosDepois = 5 + (5 - anosAntes);
  let i = 0;
  for (i = ano + anosAntes; i >= ano - anosDepois; i -= 1) {
    listaAnos.push(i);
  }
  return (
    <Container className="break-line">
      <div className="d-flex justify-content-center w-100 mb-4 anos-wrapper">
        {listaAnos.map((element) => item(element, year))}
      </div>
    </Container>
  );
}

export default CalculateYear;
