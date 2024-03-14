import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";

const Programs = () => {
  return (
    <div className="Progress" id="progress">
      {/* Header */}
      <div className="programs-header">
        <spna className="stroke-text">Explore our</spna>
        <spna>Programs</spna>
        <spna className="stroke-text">to shape you</spna>
      </div>

      <div className="program-categories">
        {programsData.map((program) => (
          <div className="category">
            {program.image}
            <spna>{program.heading}</spna>
            <spna>{program.details}</spna>

            <div className="join-now">
              <spna>Join Now</spna>
              <img src={RightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
