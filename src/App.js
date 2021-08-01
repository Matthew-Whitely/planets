import "./App.css";
import { Router, Route, Switch } from "react-router";
import Header from "./Header";

import background from "./assets/maxresdefault.jpg";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background}`,
        // backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
        height: "100vh",
      }}
    >
      <Header />
    </div>
  );
}

export default App;
