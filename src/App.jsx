import "./App.css";
import IceCreamView from "./features/icecream/IceCreamView";
import CakeView from "./features/cake/CakeView";
import UserView from "./features/users/UserView";

function App() {
  return (
    <div className="App">
      <CakeView />
      <IceCreamView />
      <UserView />
    </div>
  );
}

export default App;
