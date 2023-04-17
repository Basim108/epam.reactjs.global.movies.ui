import { Component, createElement } from 'react';

export default class Counter extends Component {
  state = {
    count: 0,
  };

  constructor(props) {
    super(props);
    this.state.count = this.props.initialValue || 0;
  }

  onIncreaseBtn() {
    this.setState({ count: this.state.count + 1 });
  }

  onDecreaseBtn() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return createElement(
      'div',
      { style: counterStyle },
      createElement('button', { style: buttonStyle, onClick: this.onIncreaseBtn.bind(this) }, '+'),
      createElement('span', { 'data-testid': 'Counter' }, this.state.count),
      createElement('button', { style: buttonStyle, onClick: this.onDecreaseBtn.bind(this) }, '-'),
    );
  }
}

const counterStyle = {
  margin: '5px',
  textAlign: 'center',
  display: 'block',
};
const buttonStyle = {
  margin: '5px',
  textAlign: 'center',
  display: 'inline-block',
};
