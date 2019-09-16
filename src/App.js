import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function ToggleHook() {
  const [isToggleOn, setIsToggleOn] = useState(true);

  useEffect(() => {
    // document.title = `Toggled: ${isToggleOn}`;
    console.log(`Toggled: ${isToggleOn}`);
  });

  return (
    <button onClick={() => setIsToggleOn(!isToggleOn)}>
      {isToggleOn ? 'ON' : 'OFF'}
    </button>
  );
}

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({ isToggleOn: !state.isToggleOn }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    // correct way to set state if combining exist state with props
    //  don't ever mix this.state with this.props
    this.setState((state, props) => ({ date: new Date() }));

    // if we don't need existing state or props, then can just overwrite state
    // this.setState({ date: new Date() });
  }

  render() {
    return <h2>{this.state.date.toLocaleTimeString()}</h2>;
  }
}

function Welcome(props) {
  return (
    <p>
      Hey {props.user.firstname}, edit <code>src/App.js</code> and save to
      reload.
    </p>
  );
}

function LearnReactLink() {
  return (
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  );
}

function ReactLogo() {
  return <img src={logo} className="App-logo" alt="logo" />;
}

const user = {
  firstname: 'Matt',
  lastname: 'Rakestraw',
};

function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('ActionLink::handleClick');
  }

  return <button onClick={handleClick}>Click Me!</button>;
}

function App() {
  return (
    <div className="App">
      <div>
        <Clock />
        <ActionLink />
        <ToggleButton />
        <ToggleHook />
      </div>
      <header className="App-header">
        <Welcome user={user} />
        <LearnReactLink />
        <ReactLogo />
      </header>
    </div>
  );
}

export default App;
