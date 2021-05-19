import React,{Suspense} from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeScreen from './components/HomeScreen'
import SearchView from './components/SearchView'
import NavBar from './components/NavBar'


function App() {
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
    <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/search/:val" component={SearchView} />
        </Switch>
      </Router>
    </Suspense>

    </>
  );
}

export default App;
