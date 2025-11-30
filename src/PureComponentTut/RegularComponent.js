import React, { Component } from "react";

export class RegularComponent extends Component {
  render() {
    console.log("Regular Component Render");

    return <div>RegularComponent {this.props.name.firstName}</div>;
  }
}

export default RegularComponent;
