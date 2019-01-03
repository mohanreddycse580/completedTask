import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import AddUser from "./user/AddUser";
import Claim from "./claims/Claim";
import InsurenePayer from "./insurence/InsurencePayer";
import DeleteUser from "./user/DeleteUser";
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/add" component={AddUser} />
      <Route exact path="/claim" component={Claim} />
      <Route exact path="/insurence" component={InsurenePayer} />
      <Route exact path="/delete" component={DeleteUser} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
