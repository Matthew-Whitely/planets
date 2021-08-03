import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import background from "./assets/maxresdefault.jpg";

function App() {
  return (
    <Router>
      <div
        className="App"
        style={{
          backgroundImage: `url(${background}`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%",
          minHeight: "100vh",
          maxHeight: "100%",
        }}
      >
        <Header />
      </div>
    </Router>
  );
}

export default App;
