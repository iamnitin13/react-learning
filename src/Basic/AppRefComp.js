import React, { Component, createRef } from "react";

export default class AppRefComp extends Component {
  constructor(props) {
    super(props);
    this.inputRef = createRef();
    this.cbRef = null;

    // old way: using setCbRef will directly access dom node (not need of current), & it will be removed on comp unmount
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    if (this.cbRef !== null) {
      this.cbRef.focus();
    }

    // this.inputRef.current.focus();
  }

  componentWillUnmount() {
    console.log("CbRef is unmount", this.cbRef);
  }

  render() {
    return (
      <div style={{ marginTop: "2rem" }}>
        Ref Component
        <input type="text" ref={this.setCbRef} />
        <button onClick={() => console.log(this.inputRef.current.value)}>
          Click
        </button>
      </div>
    );
  }
}
