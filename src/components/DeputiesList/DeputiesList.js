import React from 'react';
import { ListGroup } from 'react-bootstrap';
import ActivityListItem from '../ActivityListItem/index';

function DeputiesList(props) {
  const { deputados } = props;
  return (
    <div className="mt-3">
      <ListGroup>
        {deputados.slice(0, 6).map((element) => (
          <ActivityListItem targetInfo={element} key={element.id} />
        ))}
      </ListGroup>
    </div>
  );
}

export default DeputiesList;
