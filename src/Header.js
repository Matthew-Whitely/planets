import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Mercury from "./Mercury";
import Venus from "./Venus";
import Earth from "./Earth";
import Mars from "./Mars";
import Jupiter from "./Jupitor";
import Saturn from "./Saturn";
import Uranus from "./Uranus";
import Neptune from "./Neptune";

const Header = () => {
  return (
    <Router>
      <header className="wrapper">
        <nav>
          <Link to="/">
            <h1>The Planets</h1>
          </Link>
          <ul>
            <li>
              <Link to="/Mercury">Mercury</Link>
            </li>
            <li>
              <Link to="/Venus">Venus</Link>
            </li>
            <li>
              <Link to="/Earth">Earth</Link>
            </li>
            <li>
              <Link to="/Mars">Mars</Link>
            </li>
            <li>
              <Link to="/Jupiter">Jupiter</Link>
            </li>
            <li>
              <Link to="/Saturn">Saturn</Link>
            </li>
            <li>
              <Link to="/Uranus">Uranus</Link>
            </li>
            <li>
              <Link to="/Neptune">Neptune</Link>
            </li>
          </ul>
        </nav>
        <Route path="/mercury" component={Mercury} />
        <Route path="/venus" component={Venus} />
        <Route path="/earth" component={Earth} />
        <Route path="/mars" component={Mars} />
        <Route path="/jupiter" component={Jupiter} />
        <Route path="/saturn" component={Saturn} />
        <Route path="/uranus" component={Uranus} />
        <Route path="/neptune" component={Neptune} />
      </header>
    </Router>
  );
};

export default Header;
