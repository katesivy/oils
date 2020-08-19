import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Oils from './Components/Oils';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Link,
} from "react-router-dom";



const App = () => {

  const [url, setUrl] = useState('');

  return (
    
    <>
     <Switch>
        <Route path="/oils">
          <Oils  />
        </Route>
     
        <Route exact path="/">
          <Header />
          <Main />
        </Route>
        </Switch>
    </>
  );
}


function Wrapper() {
  return (
    <Router>
      <App />
    </Router>
  )
}
export default Wrapper;
{/* export default App; */}
