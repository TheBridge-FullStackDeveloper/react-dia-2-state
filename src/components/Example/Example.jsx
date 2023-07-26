import React from "react";

class Example extends React.Component {
  constructor() {
    super();
    this.state = { favoriteColor: "red" };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
      setTimeout(() => {
        this.setState({ favoriteColor: "green" });
      }, 2000);
    }, 3000);
  }

  componentDidUpdate() {
    console.log("componente actualizado");
  }
  render() {
    return <h1>My Favorite Color is {this.state.favoriteColor}</h1>;
  }
}

export default Example;
