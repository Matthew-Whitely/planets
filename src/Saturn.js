import { useEffect, useState } from "react";
import { data } from "./data.js";
import mercuryImage from "./assets/planet-saturn.svg";
import internalMercuryImage from "./assets/planet-saturn-internal.svg";
const Saturn = () => {
  const [mercuryData, setMercuryData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [button, setButton] = useState(null);
  const [theMercuryImage, setTheMercuryImage] = useState(mercuryImage);
  useEffect(() => {
    setMercuryData(data[5]);
    setIsLoading(false);
  }, []);

  return (
    <section className="wrapper">
      <div>
        {isLoading ? null : (
          <div>
            <div className="planetFlex">
              <div className="planetImage">
                <img src={theMercuryImage} />
              </div>
              {console.log(mercuryData)}
              <div className="planetText">
                <h2>{mercuryData.name}</h2>
                <p>{button}</p>
                <div className="planetButtons">
                  <button
                    onClick={() => {
                      setButton(mercuryData.overview.content);
                      setTheMercuryImage(mercuryImage);
                    }}
                  >
                    OverView
                  </button>
                  <button
                    onClick={() => {
                      setButton(mercuryData.structure.content);
                      setTheMercuryImage(internalMercuryImage);
                    }}
                  >
                    Internal Structure
                  </button>
                  <button
                    onClick={() => {
                      setButton(mercuryData.geology.content);
                      setTheMercuryImage(mercuryImage);
                    }}
                  >
                    Surface Geology
                  </button>
                </div>
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
    </section>
  );
};

export default Saturn;
