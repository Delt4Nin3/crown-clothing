import React from 'react';
import {Route, Switch} from 'react-router-dom';
import 'typeface-open-sans-condensed';
import './App.css';

import HomePage from "./components/homepage/homepage.component";

const HatsPage = () => (
  <div>
    <h1>HATS</h1>
  </div>
);

const SneakersPage = () => (
  <div>
    <h1>SNEAKERS</h1>
  </div>
);

const JacketsPage = () => (
  <div>
    <h1>JACKETS</h1>
  </div>
);

const MenPage = () => (
  <div>
    <h1>MEN</h1>
  </div>
);

const WomenPage = () => (
  <div>
    <h1>WOMEN</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path={'/'} component={HomePage}/>
        <Route exact path={'/hats'} component={HatsPage}/>
        <Route exact path={'/sneakers'} component={SneakersPage}/>
        <Route exact path={'/jackets'} component={JacketsPage}/>
        <Route exact path={'/men'} component={MenPage}/>
        <Route exact path={'/women'} component={WomenPage}/>
      </Switch>
    </div>
  );
}

export default App;
