import React from 'react';
// import logo from './logo.svg';
// import ToggleHook from './components/ToggleHook';
// import ToggleButton from './components/ToggleButton';
// import Clock from './components/Clock';
import Variable from './components/Variable';
import './App.css';

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
    <div className="App">
      {/* <div>
        <Clock />
        <ActionLink />
        <ToggleButton />
        <ToggleHook />
      </div> */}
      <header className="App-header">
        {/* <Welcome user={user} />
        <LearnReactLink /> */}
        <Variable />
      </header>
    </div>
  );
}

export default App;
