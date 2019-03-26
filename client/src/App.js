import React from "react";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Search from "../pages/Search";
import Favorites from "../pages/Favorites";
import NoMatch from "../pages/noMatch";

import Nav from "../components/nav";

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Search}/>
          <Route exact path="/favorites" component={Favorites}/>
          <Route component={NoMatch}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;