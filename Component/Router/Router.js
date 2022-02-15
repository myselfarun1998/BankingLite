import React from "react";
// import Bank from "./Component/Bank";
// import Banksuccess from "./Component/Banksuccess";
// import Phone from "./Component/Phone";
// import Phonesuccess from "./Component/Phonesuccess";
// import Upisuccess from "./Component/Upisuccess";
// // import Phonesuccess from './src/Component/Phonesuccess';
// import Password from "./Component/Password";
// import Home from "./Component/Home";
// // import History from "./Component/History";
import History from "../History";
import Bank from "../Bank";
import Banksuccess from "../Banksuccess";
import Phone from "../Phone";
import Phonesuccess from "../Phonesuccess";
import PassWord from "../Password";
import Home from "../Home";
import Upi from "../Upi";
import Upisuccess from "../Upisuccess";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
 const Routing = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/upi">
            <Upi />
          </Route>
          <Route path="/bank">
            <Bank />
          </Route>
          <Route path="/phone">
            <Phone />
          </Route>
          <Route path="/banksuccess">
            <Banksuccess />
          </Route>
          <Route path="/upisuccess">
            <Upisuccess />
          </Route>
          <Route path="/phonesuccess">
            <Phonesuccess />
          </Route>
        

          <Route   path="/">
            <PassWord />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default Routing;