import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './index.css';
import { totalExpenses, typeExpenses } from '../../Api';

function ComparationSpent() {
  const history = useHistory();
  const id = history.location.pathname.split('/')[2];
  const [total, setTotal] = useState({});
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    axios.get(totalExpenses(id)).then((response) => {
      setTotal(response.data);
    });
    axios.get(typeExpenses(id)).then((response) => {
      setExpenses(response.data);
    });
  }, []);
  return <div className="d-flex justify-content-center">aa</div>;
}
export default ComparationSpent;
