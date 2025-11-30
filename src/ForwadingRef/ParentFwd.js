import React, { Component, createRef } from "react";
import { Child } from "./Child";

export default class ParentFwd extends Component {
  constructor(props) {
    super(props);
    this.componentRef = createRef();
    this.num = null;
  }

  //this.componentRef is forwared to child component and we can access the child dom node
  componentDidMount() {
    console.log(this.componentRef, this.num);
  }

  render() {
    return (
      <div className="App">
        <h1>ParentFwd</h1>
        <Child ref={this.componentRef} />
        <button onClick={() => this.componentRef.current.focus()}>Click</button>
      </div>
    );
  }
}

ParentFwd.defaultProps = {
  num: 2,
};
