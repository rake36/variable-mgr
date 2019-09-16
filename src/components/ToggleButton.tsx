import React from 'react';

interface ToggleState {
    isToggleOn: boolean;
}

class ToggleButton extends React.Component<{}, ToggleState> {
  constructor(props: Readonly<{}>) {
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

export default ToggleButton;
