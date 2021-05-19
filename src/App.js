import React,{lazy,Suspense} from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const HomeScreen = lazy(()=>import('./components/HomeScreen'))
const SearchView = lazy(()=>import('./components/SearchView'))
const NavBar = lazy(()=>import('./components/NavBar'))



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
