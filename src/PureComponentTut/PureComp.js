import { PureComponent } from "react";

export default class PureComp extends PureComponent {
  render() {
    console.log("------ Pure Component Render ------");
    // PureComponent does shallow comparison of props and state check for refference same or not

    return <div>PureComponent {this.props.name.firstName}</div>;
  }
}
