import { useEffect, useState } from "react";
import Dashboard from "./HOC/Dashboard";
import { useTheme } from "./Context/themeContext";

function App() {
  const [logIn, setLogIn] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => setLogIn(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        color: theme == "dark" ? "#fff" : "#000",
        background: theme === "dark" ? "#000" : "#fff",
      }}
    >
      <Dashboard name="Nitin" isLogIn={logIn} />
      <div
        style={{
          position: "absolute",
          right: 20,
          top: 10,
        }}
      >
        <button
          style={{
            width: 40,
            height: 40,
            borderRadius: 100,
            border: "1px solid",
            backgroundImage: "linear-gradient(to right, #fff, #000)",
            cursor: "pointer",
          }}
          onClick={toggleTheme}
        />
      </div>
    </div>
  );
}

export default App;
