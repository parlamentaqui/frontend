import React from 'react';
import { ListGroup } from 'react-bootstrap';
import ActivityListItem from '../ActivityListItem/index';

function DeputiesList(props) {
  const { deputados, elements } = props;
  const end = elements != null && elements !== 0 ? elements : deputados.length;
  return (
    <div className="mt-3">
      <ListGroup>
        {deputados.slice(0, end).map((element) => (
          <ActivityListItem targetInfo={element} key={element.id} />
        ))}
      </ListGroup>
    </div>
  );
}

export default DeputiesList;
