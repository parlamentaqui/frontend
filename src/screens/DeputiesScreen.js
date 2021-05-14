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
      <div className="d-block d-sm-none">
        <ImageDeputiesList deputies={deputies} />
      </div>
      <div className="d-none d-sm-block">
        <ImageDeputiesList deputies={deputies} />
      </div>
    </main>
  );
}

export default DeputiesScreen;
