import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeScreen from './components/HomeScreen'
import SearchView from './components/SearchView'
import NavBar from './components/NavBar'


function App() {
  return (
    <>
    <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/search/:val" component={SearchView} />
        </Switch>
      </Router>

    </>
  );
}

export default App;
