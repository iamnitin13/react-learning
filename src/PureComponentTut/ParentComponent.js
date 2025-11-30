import React, { Component } from "react";
import PureComp from "./PureComp";
import RegularComponent from "./RegularComponent";
import MemoComp from "./MemoComp";

export class ParentComponent extends Component {
  state1 = { name: { firstName: "Nitin" } };

  constructor(props) {
    super(props);
    this.state = this.state1;
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(this.state1);
    }, 2000);
  }

  render() {
    console.log("------ Parent Component Render ------");

    return (
      <>
        <h1>Parent Component</h1>
        <PureComp name={this.state.name} />
        <RegularComponent name={this.state.name} />
        <MemoComp name={this.state.name} />
      </>
    );
  }
}

export default ParentComponent;
