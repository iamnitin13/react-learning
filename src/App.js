import logo from "./logo.svg";
import "./App.css";
// import ClickCounter from "./higherOrderComp/clickCounter";
// import HoverCounter from "./higherOrderComp/hoverCounter";
import React, { Profiler, Suspense, useReducer } from "react";
import ClickCounter from "./renderprops/ClickCounter";
import ClassStateHook from "./hooks/classBased/classStateHook";
import FunctionStateHook from "./hooks/functionalBased/functionStateHook";
import IncDescCounter from "./hooks/functionalBased/IncDescCounter";
import ObjStateHook from "./hooks/functionalBased/objStateHook";
import ArrayStateHook from "./hooks/functionalBased/arrayStateHook";
import ClassEffectHook from "./hooks/classBased/classEffectHooks";
import FunctionEffectHook from "./hooks/functionalBased/functionEffectHook";
import ClassMouseEffectHook from "./hooks/classBased/classMouseEffectHook";
import FunctionMouseEffectHook from "./hooks/functionalBased/functionMouseEffectHook";
import MouseContainer from "./hooks/functionalBased/mouseContainer";
import FetchingEffectHook from "./hooks/functionalBased/FetchingEffectHook";
// import ComponentC from "./component/componentC";
// import Counter from "./renderprops/Counter";
import HoverCounter from "./renderprops/HoverCounter";
import UserContext, { UserProvider } from "./context/userContext";
import IncDescCounterReducerHook from "./hooks/functionalBased/IncDescCounterReducerHook";
import ComplexReducerHook from "./hooks/functionalBased/complexReducerHooks";
import MultipleReducerHook from "./hooks/functionalBased/multipleReducerHook";
import ComponentA from "./ReducerContext/component/ComponentA";
import ComponentB from "./ReducerContext/component/ComponentB";
import ComponentC from "./ReducerContext/component/ComponentC";
import FetchingReducerEffectHook from "./hooks/functionalBased/FetchingReducerEffectHook";
import FirstRefHook from "./hooks/functionalBased/FirstRefHook";
import { BrowserRouter, router } from "react-router-dom";
import HomeComponent from "./reactRouter/HomeComponent";
import { Route, Routes } from "react-router-dom";
// import AboutComponent from "./reactRouter/AboutComponent";
import Navbar from "./reactRouter/Navbar";
import OrderConfirmed from "./reactRouter/OrderConfirmed";
import NotFound from "./reactRouter/NotFound";
import Product from "./reactRouter/Product";
import FeaturedProduct from "./reactRouter/pages/FeaturedProduct";
import NewProduct from "./reactRouter/pages/NewProduct";
import Users from "./reactRouter/pages/Users";
import UserDetails from "./reactRouter/pages/UserDetails";
import UserAdmin from "./reactRouter/pages/UserAdmin";
import Profile from "./reactRouter/routerAuthentication/Profile";
import { AuthProvider } from "./context/authContext";
import Login from "./reactRouter/routerAuthentication/Login";
import LoggedWrapper from "./reactRouter/routerAuthentication/LoggedWrapper";
import Parent from "./performanceOptimization/useCallback/Parent";
import Counter from "./performanceOptimization/useMemo/Counter";

// step 1 react.lazy will take a function in which we dynamic import component(by passing the path) (it must be default export)
const LazyAbout = React.lazy(() => import("./reactRouter/AboutComponent"));
// promise will return by the dynamic import which converted into a module that contain export default componnet
// step 2 configure the lazyAbout module to the specific route

// 1. create context first
// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthProvider>
      {/* <div className="App"> */}
      {/* <ClickCounter name="Clock" />
      <HoverCounter />
      <ClassStateHook />
      <FunctionStateHook />
      <IncDescCounter />
      <ObjStateHook /> */}

      {/* id is a sting which indentify whihc ui you are measuring ; 
       onrender callback recive information when component inside profiler update(what is render & time taken for that*/}
      {/* 
      <Profiler id="App" onRender={render}>
        <ArrayStateHook />
      </Profiler>

      <ClassEffectHook /> 
      <FunctionEffectHook /> 
      <ClassMouseEffectHook />
      <FunctionMouseEffectHook /> 

      <MouseContainer />
      <FetchingEffectHook /> */}

      {/* 2. step 2 provide context with some value & wrap your component with the proivder; so children must have the value */}
      {/* 3. step 3 is now consume it value by exporting the UserContext to the rquired children of ComponentC */}
      {/* <UserProvider value="Nitin">
       <ChannelContext.Provider value={"codeevalution"}>
        <ComponentC />
       </ChannelContext.Provider>
      </UserProvider> */}

      {/* render props as a function to reuse common code other than HOC method we pass children or render props as a function that use function 
      argument as props and pass it to it children component to render jsx and reuse the common logic */}
      {/* <Counter>
        {(count, incrementCount) => (
          <ClickCounter count={count} onClick={incrementCount} />
        )}
      </Counter>
      <Counter>
        {(count, incrementCount) => (
          <HoverCounter count={count} onMouseOver={incrementCount} />
        )}
      </Counter> */}

      {/* useReducer component */}
      {/* <IncDescCounterReducerHook /> */}

      {/* complex reducer using state and action as object */}
      {/* <ComplexReducerHook /> */}

      {/* multiple reducer different state with same state transition*/}
      {/* <MultipleReducerHook /> */}

      {/* global state management using useRfeducer & useContext hooks */}
      {/* <UserProvider value={{ countState: count, countDispatch: dispatch }}>
        <div>
          Count: {count}
          <ComponentA />
          <ComponentB />
          <ComponentC />
        </div>
      </UserProvider> */}

      {/* fetching data using useReducer & useEffect */}
      {/* <FetchingReducerEffectHook /> */}

      {/* useRef focus on input when page load */}
      {/* <FirstRefHook /> */}

      {/* react router; Routes is a container for nested tree that render the element that match the specified url*/}
      <Navbar />
      <div className="App">
        <Routes>
          {/* render element that match the path */}
          <Route path="/" element={<HomeComponent />} />

          {/* step3. render the lazy module by wrapping in suspense component & provide the fallback component */}
          <Route
            path="/about"
            element={
              <Suspense fallback="Loading..">
                <LazyAbout />
              </Suspense>
            }
          />
          <Route path="order-placed" element={<OrderConfirmed />} />
          <Route path="product" element={<Product />}>
            {/* show any child element as default when naviagte to parent routes; 
          use index props that will share path of  parent route
          without changing the parent path;it not add child path as index props will share parent path as a route*/}
            <Route index element={<FeaturedProduct />} />
            {/* step1 for nested route create route inside the parent route; it will create path i.e parent/child */}
            {/* <Route path="featured" element={<FeaturedProduct />} /> */}
            <Route path="new" element={<NewProduct />} />
          </Route>

          {/* dynamic routes without nesting*/}
          {/* <Route path="users" element={<Users />} />
        <Route path="users/:id" element={<UserDetails />} /> */}
          {/* react router first match the more sepecif route if found render that else match dynamic route */}
          {/* <Route path="users/admin" element={<UserAdmin />} /> */}

          {/* dynamic routes with nesting */}
          <Route path="users" element={<Users />}>
            <Route path=":userId" element={<UserDetails />} />
            <Route path="admin" element={<UserAdmin />} />
          </Route>

          {/* authentication using context API */}
          <Route
            path="profile"
            element={
              <LoggedWrapper>
                <Profile />
              </LoggedWrapper>
            }
          />
          <Route path="login" element={<Login />} />

          {/* * is special meaning in react it match for no routes */}
          <Route path="*" element={<NotFound />} />

          {/* useCallback */}
          <Route path="/usecallback" element={<Parent />} />

          {/* useMemo */}
          <Route path="/usememo" element={<Counter />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
