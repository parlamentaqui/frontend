import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './screens/HomeScreen';
import DeputyProfileScreen from './screens/DeputyProfileScreen';
import DeputiesScreen from './screens/DeputiesScreen';
import ErrorScreen from './screens/ErrorScreen';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/deputado/:id" component={DeputyProfileScreen} />
        <Route path="/deputados" component={DeputiesScreen} />
        <Route component={ErrorScreen} />
      </Switch>
    </main>
  );
}

export default App;
