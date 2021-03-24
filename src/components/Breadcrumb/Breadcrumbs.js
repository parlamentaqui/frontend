import React from 'react';
import './breadcrumbs.css';
import {
  Breadcrumb, Container
} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const Breadcrumbs = (props) => {
  const {
    history,
    location: { pathname }
  } = props;
  const pathnames = pathname.split('/').filter((x) => x);
  return (
    <Container className="mb-3 mt-3">
      <Breadcrumb aria-label="breadcrumb">
        {pathnames.length > 0 ? (
          <Breadcrumb.Item onClick={() => history.push('/')}>Home</Breadcrumb.Item>
        ) : (
          <div />
        )}
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

  );
};

export default withRouter(Breadcrumbs);
