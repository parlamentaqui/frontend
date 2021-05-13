import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageDeputiesList from '../components/ImageDeputiesList/index';
import { deputadosHomeRoute } from '../Api';

function DeputiesScreen() {
  const [deputies, setDeputies] = useState([]);

  useEffect(async () => {
    const result = await axios(deputadosHomeRoute);
    setDeputies(result.data);
  }, []);

  return (
    <main>
      <ImageDeputiesList deputies={deputies} />
    </main>
  );
}

export default DeputiesScreen;
