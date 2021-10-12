import React from 'react';
import {Route, Switch} from 'react-router-dom';

const App = () => (
  <>
    <Switch>
      <Route path="/collection/:nameId">
        <>
          <h1>collection/namssss</h1>
        </>
      </Route>
      <Route path="/collection" exact>
        <>
          <h1>collection</h1>
        </>
      </Route>
      <Route path="*">
        <>
          <h1>NOT FOUNDED</h1>
        </>
      </Route>
    </Switch>
  </>
)

export default App;
