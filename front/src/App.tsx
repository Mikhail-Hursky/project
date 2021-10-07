import React from 'react';
import {Container} from "semantic-ui-react";
import {Route, Switch} from 'react-router-dom';
import CollectionPage from "./pages/collection_page/CollectionPage";
import './App.scss'

const App = () => (
  <>
    <Switch>
      <div className='filter'>
        <Container>
          <Route path="/collection/:nameId">
            <>
              <h1>collection/namssss</h1>
            </>
          </Route>
          <Route path="/collection" exact>
            <>
              <CollectionPage/>
            </>
          </Route>
        </Container>
      </div>
    </Switch>
  </>
)

export default App;
