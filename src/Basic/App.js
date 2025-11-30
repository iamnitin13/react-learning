import { Fragment, useEffect, useState } from "react";
import "./App.css";
import Welcome from "./Welcome";
import Greeting from "./Greeting";
import Calculator from "../LiftingStateTut/Calculator";
import AppRefComp from "./AppRefComp";
import Portal from "./Modal";

const App = () => {
  const [initial, setInitial] = useState(3);
  const iters = new Array(initial).fill(`Nitin${Math.random()}`);
  const [showModal, setShowModal] = useState(false);

  const handleClick = (event) => {
    setInitial(initial + 3);
  };

  // using react createElement
  // return React.createElement(
  //   "div",
  //   { className: "App", onClick: handleClick },
  //   React.createElement("h1", null, "Hello world")
  // );

  //jsx
  return (
    <div className="App">
      {/* <h1 htmlFor="ff">Hello world</h1> */}
      {/* <Welcome name="Nitin">
        <p>This is children component</p>
      </Welcome> */}
      {/* {iters.map((name, index) => (
        <Fragment key={index} children={<h1>HHH</h1>}>
          <h1>Hi</h1>
          <p>This is paragraph</p>
        </Fragment>
      ))} */}
      {initial > 10 ? (
        iters.map((name, index) => <Greeting name={name} key={index} />)
      ) : (
        <Welcome name="Nikhil" initial={initial} handleClick={handleClick} />
      )}
      {/* <Welcome name="Shani" /> */}
      <Calculator />
      {initial > 3 ? null : <AppRefComp />}

      <fieldset>
        Modal Component
        <p>This is Modal Component Click on Button To Open Modal</p>
        <button onClick={() => setShowModal(true)}>Open Modal</button>
        {showModal && (
          <Portal
            title="My Modal"
            message="This is dummy message for modal compoent from app component"
            onClose={() => setShowModal(false)}
          />
        )}
      </fieldset>
    </div>
  );
};

export default App;
