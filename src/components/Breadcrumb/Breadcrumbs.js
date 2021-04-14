import React from 'react';
import './breadcrumbs.css';
import { Breadcrumb, Container } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const Breadcrumbs = (props) => {
  const {
    history,
    location: { pathname }
  } = props;
  const pathnames = pathname.split('/').filter((x) => x);
  const notInHome = history.location.pathname !== '/';
  return (
    <Container className={notInHome ? 'mb-3 mt-3 ' : 'd-none'}>
      <Breadcrumb aria-label="breadcrumb">
        {pathnames.length > 0 ? (
          <Breadcrumb.Item onClick={() => history.push('/')}>
            Home
          </Breadcrumb.Item>
        ) : (
          <div />
        )}
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <Breadcrumb.Item active key={name}>
              {name}
            </Breadcrumb.Item>
          ) : (
            <Breadcrumb.Item key={name} onClick={() => history.push(routeTo)}>
              {name}
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    </Container>
  );
};

export default withRouter(Breadcrumbs);
