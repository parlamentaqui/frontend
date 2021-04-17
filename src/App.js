import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DeputiesScreen from './screens/DeputiesScreen';
import ErrorScreen from './screens/ErrorScreen';
import TopBar from './components/TopBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectsScreen from './screens/ProjectsScreen';
import PartyScreen from './screens/PartyScreen';
import SearchScreen from './screens/SearchScreen';
import Breadcrumbs from './components/Breadcrumbs';
import Teste from './components/DataVoting/DataVoting';
import DeputyProfileScreen from './screens/DeputyProfileScreen/index';
import HomeScreen from './screens/HomeScreen/index';

function App() {
  return (
    <main>
      <TopBar />
      <Breadcrumbs />
      <Switch>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/deputados/:id" component={DeputyProfileScreen} />
        <Route path="/deputados" component={DeputiesScreen} />
        <Route path="/projetos" component={ProjectsScreen} />
        <Route path="/partidos" component={PartyScreen} />
        <Route path="/busca" component={SearchScreen} />
        <Route path="/teste" component={Teste} />
        <Route component={ErrorScreen} />
      </Switch>
    </main>
  );
}

export default App;
