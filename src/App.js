import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/Layouts/NavBar';
import Dashboard from './components/Dashboard/Dashboard';
import ProjectDetails from './components/Projects/ProjectDetails';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import CreateProject from './components/Projects/CreateProject';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />
          <Route path='/project/:id' component={ProjectDetails} />
          <Route path='/create' component={CreateProject} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
