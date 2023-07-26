import React from "react";
import ExampleChild from "../ExampleChild/ExampleChild";

class ExampleFather extends React.Component {
  constructor() {
    super();
    this.state = { show: true };
  }

  handleRemove = () => this.setState({ show: false });

  render() {
    return (
      <div>
        {this.state.show ? <ExampleChild /> : null}
        <button onClick={this.handleRemove}>
          Eliminar el componete ExampleChild "Componente Father"
        </button>
      </div>
    );
  }
}

export default ExampleFather;
