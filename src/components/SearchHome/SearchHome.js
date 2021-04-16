import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchHome.css';
import { Col, Row } from 'react-bootstrap';

function SearchHome() {
  const [searchString, setSearchString] = useState('');

  return (
    <div className="d-lg-none mt-4">
      <Form inline action="/busca">
        <Row className="mr-3 ml-3">
          <Col xs={10} md={10} className="pr-0 pl-0">
            <FormControl
              name="q"
              type="text"
              placeholder="Busca por deputados"
              value={searchString}
              onChange={(e) => {
                setSearchString(e.target.value);
              }}
            />
          </Col>
          <Col xs={2} md={2} className="pr-0 pl-0">
            <Button
              variant="info"
              type="submit"
              disabled={searchString.length === 0}
            >
              <FontAwesomeIcon
                icon={faSearch}
                color="#a4d4b4"
                size="lg"
                className="d-lg-none"
              />
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default SearchHome;
