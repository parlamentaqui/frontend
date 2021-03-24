import React from 'react';
import { ListGroup } from 'react-bootstrap';
import ProfileImage from '../../images/Kokay.jpg';
import ActivityListItem from '../ActivityListItem/index';

const deputy = {
  name: 'Érika Kokay Almeida',
  politicalParty: 'PT',
  state: 'Distrito Federal',
  image: ProfileImage,
  id: 0
};
const testArray = [deputy, deputy, deputy, deputy, deputy, deputy];

function DeputiesList() {
  return (
    <div>
      <ListGroup>
        {testArray.map((element) => (
          <ActivityListItem targetInfo={element} />
        ))}
      </ListGroup>
    </div>
  );
}

export default DeputiesList;
