import React from 'react';
import {Route, Switch} from 'react-router-dom';
import 'typeface-open-sans-condensed';
import './App.css';

import HomePage from "./pages/homepage/homepage.page";
import ShopPage from "./pages/shop/shop.page";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.page";

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path={'/'} component={HomePage}/>
        <Route exact path={'/shop'} component={ShopPage}/>
        <Route exact path={'/signin'} component={SignInAndSignUpPage}/>
      </Switch>
    </div>
  );
}

export default App;
