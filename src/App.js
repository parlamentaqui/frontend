import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './screens/HomeScreen';
import DeputiesScreen from './screens/DeputiesScreen';
import ErrorScreen from './screens/ErrorScreen';
import TopBar from './components/TopBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectsScreen from './screens/ProjectsScreen';
import PartyScreen from './screens/PartyScreen';
import SearchScreen from './screens/SearchScreen';
import Breadcrumbs from './components/Breadcrumbs';
import DeputyProfileScreen from './screens/DeputyProfileScreen';

function App() {
  return (
    <main>
      <TopBar />
      <Breadcrumbs />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/deputados/:id" component={DeputyProfileScreen} />
        <Route path="/deputados" component={DeputiesScreen} />
        <Route path="/projetos" component={ProjectsScreen} />
        <Route path="/partidos" component={PartyScreen} />
        <Route path="/busca" component={SearchScreen} />
        <Route component={ErrorScreen} />
      </Switch>
    </main>
  );
}

export default App;
