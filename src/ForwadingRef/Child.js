import { createRef, forwardRef } from "react";

// export const Child = forwardRef((props, ref) => {
//   // forwardRef will give the ref that is fowardred from parent
//   return <input type="text" ref={ref} />;
// });

import React, { Component } from "react";

export class Child extends Component {
  constructor(props) {
    super(props);
    this.inputRef = createRef();
  }

  handleFocus() {
    this.inputRef.current.focus();
  }
  render() {
    return <input type="text" ref={this.inputRef} />;
  }
}
