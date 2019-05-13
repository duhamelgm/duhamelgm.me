import React, { useEffect } from "react";

import skills from "../assets/api/skills.json";
import "./About.scss";
import bioPicture from "../assets/img/bio_picture.png";

import { TimelineLite } from "gsap/TweenMax";
import ScrollMagic from "scrollmagic";

const About = () => {
  const controller = new ScrollMagic.Controller();
  const skillsTimeline = new TimelineLite();
  const skillsSpan = [];

  useEffect(() => {
    new ScrollMagic.Scene({
      triggerElement: "#skills-list",
      duration: 1, // scroll distance
      offset: -300, // start this scene after scrolling for 50px
      reverse: false
    })
      .on("enter", animateSkills)
      .addTo(controller); // assign the scene to the controller
  });

  const animateSkills = () => {
    skillsTimeline.staggerTo(
      skillsSpan,
      0.8,
      {
        cycle: {
          width: function(index) {
            return skills.list[index].percentage;
          }
        }
      },
      0.2
    );
  };

  return (
    <div className="about">
      <img src={bioPicture} alt="profile" />
      <h2>Hi</h2>
      <p>
        I'm a Full-Stack Web Developer. I have a passion for JS and frontend
        techonologies
      </p>
      <ul className="skills" id="skills-list">
        {skills.list.map((skill, id) => (
          <li className="skill" key={skill.name}>
            <p>{skill.name}</p>
            <span ref={li => (skillsSpan[id] = li)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
