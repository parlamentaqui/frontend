import React from 'react';

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
