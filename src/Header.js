import NavBar from "./Navbar";
import Burger from "./Burger";
import Mercury from "./Mercury";
import Venus from "./Venus";
import Earth from "./Earth";
import Mars from "./Mars";
import Jupiter from "./Jupiter";
import Saturn from "./Saturn";
import Uranus from "./Uranus";
import Neptune from "./Neptune";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";
const Nav = styled.nav`
  width: 1540px;
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  h1 {
    padding: 0;
    margin: 0;
  }
  @media (max-width: 980px) {
    flex-flow: column nowrap;
  }
`;
const Header = () => {
  return (
    <Router>
      <Nav>
        <Link to="/">
          <h1>The Planets</h1>
        </Link>
        <Burger />
      </Nav>
      <Route exact path="/mercury" component={Mercury} />
      <Route exact path="/venus" component={Venus} />
      <Route exact path="/earth" component={Earth} />
      <Route exact path="/mars" component={Mars} />
      <Route exact path="/jupiter" component={Jupiter} />
      <Route exact path="/saturn" component={Saturn} />
      <Route exact path="/uranus" component={Uranus} />
      <Route exact path="/neptune" component={Neptune} />
    </Router>
  );
};

export default Header;
