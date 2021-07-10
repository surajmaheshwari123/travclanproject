import React from 'react';
import './App.css';
import EachMerchant from './components/eachmerchant';
import Merchant from './components/merchant';
import NotFound from './components/notfound';
import { Redirect, Route, Switch } from "react-router-dom";
function App() {
 

  return (  
    <React.Fragment>  
    
    <main className="container">
      <Switch>
      <Route path="/merchants/:id" component={EachMerchant}></Route>
      <Route path="/merchants" component={Merchant}></Route>
        <Route path="/not-found" component={NotFound}></Route>
        <Redirect from="/" exact to="/merchants" />
        <Redirect to="/not-found" />
      </Switch>
    </main>
  </React.Fragment>
  );
}

export default App;
