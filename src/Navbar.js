import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useState, useLayoutEffect } from "react";
import mercury from "./assets/planet-mercury.svg";
import venus from "./assets/planet-venus.svg";
import earth from "./assets/planet-earth.svg";
import mars from "./assets/planet-mars.svg";
import jupiter from "./assets/planet-jupiter.svg";
import saturn from "./assets/planet-saturn.svg";
import uranus from "./assets/planet-uranus.svg";
import neptune from "./assets/planet-neptune.svg";

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
  li:nth-child(8){
    padding-bottom:70px;
  }
  li{
    
    display:flex;
    // align-items:center;
    margin-left:25%;
  }
  li img{
    width:10%;
    margin-right:15px;
    
  }
  a{
   
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
  const [size, setSize] = useState();
  function useWindowSize() {
    useLayoutEffect(() => {
      function updateSize() {
        setSize(window.innerWidth);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }
  useWindowSize();

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
        {size >= 790 ? (
          <li>
            <NavLink exact to="/" activeClassName="hover" className="border">
              MERCURY
            </NavLink>
          </li>
        ) : (
          <li>
            <img src={mercury} alt="small pic of mercury" />
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
        )}
        {size >= 790 ? (
          <li>
            <NavLink
              exact
              to="/venus"
              activeClassName="hover"
              className="border"
            >
              VENUS
            </NavLink>
          </li>
        ) : (
          <li>
            <img src={venus} alt="small pic of mercury" />
            <NavLink
              onClick={() => setOpen(!open)}
              exact
              to="/venus"
              activeClassName="hover"
              className="border"
            >
              VENUS
            </NavLink>
          </li>
        )}
        {size >= 790 ? (
          <li>
            <NavLink
              exact
              to="/earth"
              activeClassName="hover"
              className="border"
            >
              EARTH
            </NavLink>
          </li>
        ) : (
          <li>
            <img src={earth} alt="small pic of mercury" />
            <NavLink
              onClick={() => setOpen(!open)}
              exact
              to="/earth"
              activeClassName="hover"
              className="border"
            >
              EARTH
            </NavLink>
          </li>
        )}
        {size >= 790 ? (
          <li>
            <NavLink
              exact
              to="/mars"
              activeClassName="hover"
              className="border"
            >
              MARS
            </NavLink>
          </li>
        ) : (
          <li>
            <img src={mars} alt="small pic of mercury" />
            <NavLink
              onClick={() => setOpen(!open)}
              exact
              to="/mars"
              activeClassName="hover"
              className="border"
            >
              MARS
            </NavLink>
          </li>
        )}
        {size >= 790 ? (
          <li>
            <NavLink
              exact
              to="/jupiter"
              activeClassName="hover"
              className="border"
            >
              JUPITER
            </NavLink>
          </li>
        ) : (
          <li>
            <img src={jupiter} alt="small pic of mercury" />
            <NavLink
              onClick={() => setOpen(!open)}
              exact
              to="/jupiter"
              activeClassName="hover"
              className="border"
            >
              JUPITER
            </NavLink>
          </li>
        )}
        {size >= 790 ? (
          <li>
            <NavLink
              exact
              to="/saturn"
              activeClassName="hover"
              className="border"
            >
              SATURN
            </NavLink>
          </li>
        ) : (
          <li>
            <img src={saturn} alt="small pic of mercury" />
            <NavLink
              onClick={() => setOpen(!open)}
              exact
              to="/saturn"
              activeClassName="hover"
              className="border"
            >
              SATURN
            </NavLink>
          </li>
        )}
        {size >= 790 ? (
          <li>
            <NavLink
              exact
              to="/uranus"
              activeClassName="hover"
              className="border"
            >
              URANUS
            </NavLink>
          </li>
        ) : (
          <li>
            <img src={uranus} alt="small pic of mercury" />
            <NavLink
              onClick={() => setOpen(!open)}
              exact
              to="/uranus"
              activeClassName="hover"
              className="border"
            >
              URANUS
            </NavLink>
          </li>
        )}
        {size >= 790 ? (
          <li>
            <NavLink
              exact
              to="/neptune"
              activeClassName="hover"
              className="border"
            >
              NEPTUNE
            </NavLink>
          </li>
        ) : (
          <li>
            <img src={neptune} alt="small pic of mercury" />
            <NavLink
              onClick={() => setOpen(!open)}
              exact
              to="/neptune"
              activeClassName="hover"
              className="border"
            >
              NEPTUNE
            </NavLink>
          </li>
        )}
      </UL>
    </main>
  );
};

export default NavBar;
