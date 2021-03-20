import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function DeputyProfileScreen(props) {
  const { match } = props;
  const { id } = match.params;

  return (
    <main>
      <h1>
        Deputado
        {id}
      </h1>
    </main>
  );
}

export default DeputyProfileScreen;
