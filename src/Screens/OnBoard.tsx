import React from "react";
import TopBar from "../Navigation/TopBar";
import Navigation from "../Navigation/Navigation";
import "./styles.scss";
import freelancer from "../videos/freelancer.mp4";
import Sponsors from "../component/home/sponsors";
import InformationContainer from "../component/information/informationContainer";
import { data, dataGreat } from "../assets/data";

const OnBoard = () => {
  return (
    <div className="contain">
      <TopBar />
      <Navigation />
      <div className="background">
        <video
          className="background-video"
          src={freelancer}
          autoPlay={true}
          loop
          muted
        />

        <div className="background-title">
          <h1>Hire the best freelancers for any job, online.</h1>
          <h5>
            Millions of people use freelancer.com to turn their ideas into
            reality.
          </h5>
          <div className="button">
            <button className="button_Hire">
              <a>Hire a Freelancer</a>
            </button>
            <button className="button_Earn">
              <a>Earn Money Freelancing</a>
            </button>
          </div>
        </div>
      </div>
      <div className="body">
        <div className="sponsor">
          <p>As used by</p>
          <Sponsors />
        </div>
        <div>
          <hr />
        </div>

        <div>
          <InformationContainer
            id={1}
            title="Need something done?"
            card={data}
          />
        </div>
        <div>
          <hr />
        </div>

        <div>
          <InformationContainer
            id={2}
            title="What's great about it?"
            card={dataGreat}
          />
        </div>
      </div>
    </div>
  );
};

export default OnBoard;
