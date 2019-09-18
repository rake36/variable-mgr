import React from 'react';
// import { Route, withRouter } from 'react-router';
import Variable from './components/Variable';
import 'bootstrap/dist/css/bootstrap.min.css';

// STARTED: Bootstrap layout using react-bootstrap
// STARTED: Validation errors
// TODO: Master/Detail
// TODO: Ajax CRUD
// TODO: Unit Tests
// TODO: Router to change pages

function App() {
  return (
    <div className="container">
      <Variable />
    </div>
  );
}

export default App;
