import React from 'react';
import { ListGroup } from 'react-bootstrap';
import ActivityListItem from '../ActivityListItem/index';
import './index.css';

function DeputiesList(props) {
  const { deputados, elements, theme } = props;
  const end = elements != null && elements !== 0 ? elements : deputados.length;
  return (
    <div className={`mt-3 deputies-list ${theme}`}>
      <ListGroup>
        {deputados.slice(0, end).map((element, index) => (
          <ActivityListItem targetInfo={element} isLast={index === end - 1} key={element.id} />
        ))}
      </ListGroup>
    </div>
  );
}

export default DeputiesList;
