import React from 'react';
import {Switch,Route,BrowserRouter} from 'react-router-dom'
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/navbar'
import HomePage from './pages/homepage'
import Login from './pages/login'
import SignUp from './pages/signup'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <NavBar/>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/login' component={Login}/>
            <Route exact path='/signup' component={SignUp}/>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
