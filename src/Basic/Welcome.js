import React from "react";

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      user: { name: "Nitin", age: 26 },
      timer: Date.now(),
    }; // current state
    console.log("contructor called");
    this.callPropMethod = this.callPropMethod.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    console.log("called on getderivedstatefromprops", props, state);
    return { ...Welcome.state, count: props.initial };
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("called on getsnapshotbeforeupdate", prevProps, prevState);
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("called on shouldcomponentupdate", nextProps, nextState);
    return true;
  }

  // componentDidCatch() {
  //   console.log("called on componenterrror");
  // }

  componentDidMount() {
    // this.timerId = setInterval(() => {
    //   this.setState({ timer: Date.now() });
    // }, 1000);

    console.log("Component Mount");
  }

  componentDidUpdate() {
    console.log("Component Update");
  }

  componentWillUnmount() {
    console.log("Component Unmount");
    clearInterval(this.timerId);
  }

  increment() {
    //setState is async, setstate take two parameters first is state object or function and second is callback
    // setstate use shallow merge to update the state

    // this.setState({ count: this.state.count + 1 }); //state object updating current state

    //state as function
    this.setState(
      (prev) => ({ count: prev.count + 1 }), // using previous state to update current state
      () => {
        console.log("Cb", this.state.count);
      }
    );

    console.log("After Cb", this.state.count);
  }

  incrementFiveTime() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  // arrow function to bind this
  incrementByProps = () => {
    console.log(this);
    this.setState((prev, props) => ({ count: prev.count + props.initial }));
  };

  //bind in constructor
  callPropMethod() {
    this.props.handleClick();
  }

  render() {
    console.log("render called", this.props, this.state);

    const { name, handleClick } = this.props;
    const { count, user, timer } = this.state;
    // return (
    //   <div
    //   // onClick={(e) => {
    //   //   this.setState({ count: this.state.count + 1 });
    //   //   e.stopPropagation();
    //   // }}
    //   >
    //     Class Component {this.state.count}
    //     <h1>Welcome {this.props.name}</h1>
    //     {this.props.children}
    //   </div>
    // );

    //without jsx
    return React.createElement(
      "div",
      {
        style: { border: "1px solid black", padding: "10px", margin: "10px" },
      },
      [
        `Class Component ${user.name} - ${user.age} - ${count} - Timer: ${timer}`,
        React.createElement("h1", {}, `Welcome ${name}`),
        this.props.children,
        <button onClick={this.increment.bind(this)}>Increment</button>,
        <button onClick={() => this.incrementFiveTime()}>
          Increment 5 time
        </button>,
        <button onClick={this.incrementByProps}>Increment by Props</button>,
        // <button onClick={this.callPropMethod}>Call Prop Method</button>,
        <button onClick={handleClick}>Call Prop Method</button>,
      ]
    );
  }
}

/**
 *
 * Mounting --- constructor -> getDerivedStateFromProps -> render -> componentDidMount
 *
 * Updating --- getDerivedStateFromProps -> shouldComponentUpdate -> render -> getSnapshotBeforeUpdate -> componentDidUpdate
 *
 * Unmounting --- componentWillUnmount
 */
