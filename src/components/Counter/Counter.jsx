import { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.initialValue,
    };
  }
  //incrementa el contador
  increment = () => {
    this.setState({ counter: this.state.counter + 1 });//sumamos 1 al contador
    console.log(this.state.counter);
  };
  render() {
    return <span onClick={this.increment}>Counter: {this.state.counter}</span>;
  }
}
