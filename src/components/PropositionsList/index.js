import React from 'react';
import { ListGroup } from 'react-bootstrap';
import ActivityListProposition from '../ActivityListProposition/index';

function PropositionList(props) {
  const { proposicao, theme } = props;
  return (
    <div className="mt-3">
      <ListGroup>
        {proposicao.slice(0, 6).map((element) => (
          <ActivityListProposition targetInfo={element} key={element.id} theme={theme} />
        ))}
      </ListGroup>
    </div>
  );
}

export default PropositionList;
