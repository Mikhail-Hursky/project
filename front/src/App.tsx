import React from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import CollectionPage from './pages/collectionPage/CollectionPage';
import ChampionPage from './pages/championPage/ChampionPage';
import './App.scss';
import { COLLECTION, COLLECTION_CHAMPION } from './Constants';

const App = () => (
  <div className="filter">
    <Switch>
      <Container>
        <Route path={COLLECTION_CHAMPION}>
          <ChampionPage />
        </Route>
        <Route path={COLLECTION} exact>
          <CollectionPage />
        </Route>
      </Container>
    </Switch>
  </div>
);

export default App;
