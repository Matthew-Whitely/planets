import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const UL = styled.ul`


  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  z-index:99;


  li {
    align-self: center;
  }
  li:nth-child(8){
    padding-bottom:50px;
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
    padding:0;
    background-color: rgb(2, 2, 37);
    position: fixed;
    top: 0;
    right: 0;
    min-height:100vh;
    height:auto;
    width: 300px;
    padding-top: 3.5rem;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
       a{
     margin-bottom:30px;npms
    
  }
  }

`;
const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 999;
  visibility: hidden;
  cursor: pointer;
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "white" : "white")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0deg)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0deg)")};
    }
  }
  @media (max-width: 790px) {
    visibility: visible;
  }
`;

const NavBar = () => {
  const [open, setOpen] = useState();
  return (
    <main>
      <StyledBurger
        setOpen={setOpen}
        open={open}
        onClick={() => setOpen(!open)}
      >
        <div />
        <div />
        <div />
      </StyledBurger>

      <UL open={open}>
        <li>
          <NavLink
            onClick={() => setOpen(!open)}
            exact
            to="/"
            activeClassName="hover"
            className="border"
          >
            MERCURY
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => setOpen(!open)}
            to="/venus"
            activeClassName="hover"
            className="border"
          >
            VENUS
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => setOpen(!open)}
            to="/earth"
            activeClassName="hover"
            className="border"
          >
            EARTH
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => setOpen(!open)}
            to="/mars"
            activeClassName="hover"
            className="border"
          >
            MARS
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => setOpen(!open)}
            to="/jupiter"
            activeClassName="hover"
            className="border"
          >
            JUPITER
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => setOpen(!open)}
            to="/saturn"
            activeClassName="hover"
            className="border"
          >
            SATURN
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => setOpen(!open)}
            to="/uranus"
            activeClassName="hover"
            className="border"
          >
            URANUS
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => setOpen(!open)}
            to="/neptune"
            activeClassName="hover"
            className="border"
          >
            NEPTUNE
          </NavLink>
        </li>
      </UL>
    </main>
  );
};

export default NavBar;
