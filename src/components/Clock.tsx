import React from 'react';

interface ClockState {
  date: Date;
}

class Clock extends React.Component<{}, ClockState> {
  timerID!: NodeJS.Timeout;
  constructor(props: Readonly<{}>) {
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

export default Clock;
