import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeScreen from './components/HomeScreen'
import SearchView from './components/SearchView'
import UploadFile from './components/UploadFile';


function App() {
  return (
    <>
    <Router>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/upload_file" component={UploadFile} />
          <Route exact path="/search/:val" component={SearchView} />
        </Switch>
      </Router>

    </>
  );
}

export default App;
