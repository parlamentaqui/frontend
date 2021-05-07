import React, { useEffect, useState } from 'react';
import './index.css';
import {
  Breadcrumb, Container
} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { profileRoute } from '../../Api';

// Método que conserta o Breadcrumb
const defineNome = (pathnames) => {
  if (pathnames.length > 1) {
    if (!pathnames[0].localeCompare('deputados')) {
      const [deputado, setDeputado] = useState([]);

      useEffect(() => {
        axios.get(profileRoute(pathnames[1])).then((response) => {
          setDeputado(response.data);
        });
      }, []);

      return ['Deputados', deputado.name];
    }
    // Implementar para as outras entidades que virão (proposições, partidos, etc)
    // const [proposicao, setProposicao] = useState([]);

    // useEffect(() => {
    //   axios.get(PropositionRoute(pathnames[1])).then((response) => {
    //     setDeputado(response.data);
    //   });
    // }, []);

    return ['Teste', 'teste'];
  }

  // Retorna vazio caso esteja na Home
  if (pathnames.length === 0) {
    return [];
  }

  // Coloca a primeira letra maiúscula
  return [String(pathnames[0][0]).toUpperCase() + String(pathnames[0]).substring(1)];
};


const Breadcrumbs = (props) => {
  const {
    history,
    location: { pathname }
  } = props;
  const pathnames = defineNome(pathname.split('/').filter((x) => x));
  return (
    pathnames.length > 0 && (
      <Container className="mb-3 mt-3">
        <Breadcrumb aria-label="breadcrumb">
        <Breadcrumb.Item onClick={() => history.push('/')}>Página Inicial</Breadcrumb.Item>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            return isLast ? (
              <Breadcrumb.Item active key={name}>{name}</Breadcrumb.Item>
            ) : (
              <Breadcrumb.Item key={name} onClick={() => history.push(routeTo)}>
                {name}
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb>
      </Container>
    )
  );
};

export default withRouter(Breadcrumbs);
