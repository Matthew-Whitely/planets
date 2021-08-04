import { NavLink } from "react-router-dom";

import styled from "styled-components";

const UL = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  z-index:99;

  li {
    align-self: center;
  }

  @media (max-width: 980px) {
    margin-top: 20px;
  }
}
.hover {
  color: purple;
}

  @media (max-width: 790px) {
    margin: 0;
    flex-flow: column nowrap;
    background-color: rgb(2, 2, 37);
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  }
  li {
    align-content: flex-end;
  }
`;

const NavBar = ({ open }) => {
  return (
    <main>
      <UL open={open}>
        <li>
          <NavLink exact to="/" activeClassName="hover" className="border">
            MERCURY
          </NavLink>
        </li>
        <li>
          <NavLink to="/venus" activeClassName="hover" className="border">
            VENUS
          </NavLink>
        </li>
        <li>
          <NavLink to="/earth" activeClassName="hover" className="border">
            EARTH
          </NavLink>
        </li>
        <li>
          <NavLink to="/mars" activeClassName="hover" className="border">
            MARS
          </NavLink>
        </li>
        <li>
          <NavLink to="/jupiter" activeClassName="hover" className="border">
            JUPITER
          </NavLink>
        </li>
        <li>
          <NavLink to="/saturn" activeClassName="hover" className="border">
            SATURN
          </NavLink>
        </li>
        <li>
          <NavLink to="/uranus" activeClassName="hover" className="border">
            URANUS
          </NavLink>
        </li>
        <li>
          <NavLink to="/neptune" activeClassName="hover" className="border">
            NEPTUNE
          </NavLink>
        </li>
      </UL>
    </main>
  );
};

export default NavBar;
