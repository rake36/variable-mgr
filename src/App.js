import React from 'react';
import { Route, withRouter } from 'react-router';

// import logo from './logo.svg';
// import ToggleHook from './components/ToggleHook';
// import ToggleButton from './components/ToggleButton';
// import Clock from './components/Clock';
import Variable from './components/Variable';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'formik';
// import './App.css';

// TODO: Bootstrap layout
// TODO: Ajax CRUD
// TODO: Validation errors
// TODO: Unit Tests

// function Welcome(props) {
//   return (
//     <p>
//       Hey {props.user.firstname}, edit <code>src/App.js</code> and save to
//       reload.
//     </p>
//   );
// }

// function LearnReactLink() {
//   return (
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   );
// }

// function ReactLogo() {
//   return <img src={logo} className="App-logo" alt="logo" />;
// }

// const user = {
//   firstname: 'Matt',
//   lastname: 'Rakestraw',
// };

// function ActionLink() {
//   function handleClick(e) {
//     e.preventDefault();
//     console.log('ActionLink::handleClick');
//   }

//   return <button onClick={handleClick}>Click Me!</button>;
// }

function App() {
  return (
    <div className="container">
      <Variable />
    </div>
  );
}

export default App;
