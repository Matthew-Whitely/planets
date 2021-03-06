import { useEffect, useState, useLayoutEffect } from "react";
import { data } from "./data.js";
import mercuryImage from "./assets/planet-jupiter.svg";
import dataIcon from "./assets/geology-jupiter.png";
import internalMercuryImage from "./assets/planet-jupiter-internal.svg";
import styled from "styled-components";
const PLANET = styled.section`
  .planetFlex {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-auto-rows: minmax(100px, auto);
    gap: 20px;
  }
  .planetImage {
    text-align: center;
    padding: 50px;
    grid-row: 1/3;
    justify-self: center;
    position: relative;
    margin-bottom: 40px;
  }
  .icon {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
  }
  .none {
    display: none;
  }
  .planetImage img {
    width: 100%;
  }
  .planetText h2 {
    font-size: 4rem;
    padding-bottom: 50px;
  }

  .planetText {
    align-self: start;
  }
  .planetData {
    width: 100%;
    margin-right: 30px;
  }
  .planetButtons {
    grid-column: 2 /2;
    margin: 0;
    width: 100%;
  }
  button {
    margin-top: 20px;
    padding: 20px;
    background: black;
    border: 2px grey solid;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    color: white;
    cursor: pointer;
  }
  button:hover {
    background-color: rgb(216, 58, 52);
  }
  button:active,
  button:focus {
    background-color: purple;
  }

  @media (max-width: 980px) {
    .planetFlex {
      grid-template-columns: 1fr 1fr;
    }
    .planetImage {
      grid-column: 1/3;
    }
    button {
      width: 300px;
    }
    .planetText h2 {
      padding-bottom: 25px;
    }
  }

  @media (max-width: 750px) {
    .planetFlex {
      grid-template-columns: 1fr;
      justify-items: center;
    }
    .planetImage {
      grid-column: 1/3;
      grid-row: 2/3;
    }
    .planetText {
      text-align: center;
    }
    .planetButtons {
      grid-row: 1/ 2;
      grid-column: 1/3;
      height: auto;
      flex-direction: row;
      align-self: start;
      justify-content: space-between;
    }
    button {
      border: none;
    }
  }
  @media (max-width: 500px) {
    button {
      margin-top: 6px;
      padding: 10px;

      font-size: 0.9rem;
    }
  }
`;
const Jupiter = () => {
  const [mercuryData, setMercuryData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [button, setButton] = useState(null);
  const [theMercuryImage, setTheMercuryImage] = useState(mercuryImage);
  const [size, setSize] = useState();
  const [icon, setIcon] = useState(false);
  useEffect(() => {
    setMercuryData(data[4]);
    setIsLoading(false);
  }, []);
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
    <PLANET className="wrapper">
      <div>
        {isLoading ? null : (
          <div>
            <div className="planetFlex">
              <div className="planetImage">
                <img src={theMercuryImage} alt="Plaent Earth" />
                <div className={icon ? "icon" : "none"}>
                  <img src={dataIcon} alt="erath surface" />
                </div>
              </div>

              <div className="planetText">
                <h2>{mercuryData.name}</h2>
                <p>{button}</p>
              </div>

              <div className="planetButtons">
                <button
                  onClick={() => {
                    setButton(mercuryData.overview.content);
                    setTheMercuryImage(mercuryImage);
                    setIcon(false);
                  }}
                >
                  OVERVIEW
                </button>
                {size >= 790 ? (
                  <button
                    onClick={() => {
                      setButton(mercuryData.structure.content);
                      setTheMercuryImage(internalMercuryImage);
                      setIcon(false);
                    }}
                  >
                    INTERNAL STRUCTURE
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setButton(mercuryData.structure.content);
                      setTheMercuryImage(internalMercuryImage);
                      setIcon(false);
                    }}
                  >
                    STRUCTURE
                  </button>
                )}
                {size >= 790 ? (
                  <button
                    onClick={() => {
                      setButton(mercuryData.geology.content);
                      setTheMercuryImage(mercuryImage);
                      setIcon(true);
                    }}
                  >
                    SURFACE GEOLOGY
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setButton(mercuryData.geology.content);
                      setTheMercuryImage(mercuryImage);
                      setIcon(true);
                    }}
                  >
                    SURFACE
                  </button>
                )}
              </div>
            </div>
            <ul className="bottomUi">
              <li>
                <p>Rotation Time</p>
                <p>{mercuryData.rotation} </p>
              </li>
              <li>
                <p>Revolution Time</p>
                <p>{mercuryData.revolution} </p>
              </li>
              <li>
                <p>Radius</p>
                <p>{mercuryData.radius}</p>
              </li>
              <li>
                <p>Average Temp</p>
                <p>{mercuryData.temperature}</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </PLANET>
  );
};

export default Jupiter;
