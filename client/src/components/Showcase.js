import React, { useState } from "react";

import { TweenLite } from "gsap/TweenMax";
import showcaseProjects from "../assets/api/showcase.json";
import "./Showcase.scss";

const Showcase = () => {
  const projectsLength = showcaseProjects.projects.length;
  const [index, setIndex] = useState(
    Math.floor(Math.random() * projectsLength)
  );
  let showcaseRef;

  const changeIndex = change => {
    if (change === -1 && index === 0) {
      return setIndex(projectsLength - 1);
    } else if (change === 1 && index === projectsLength - 1) {
      return setIndex(0);
    }

    setIndex(index + change);
  };

  const animateDown = () => {
    document.querySelector("body").style.overflow = "hidden";
    document.querySelector("iframe").style.zIndex = "0";
    TweenLite.to(showcaseRef, 0.5, {
      top: "100%",
      onComplete: () => {
        document.querySelector(".up").style.display = "flex";
      }
    });
  };

  const animateUp = () => {
    document.querySelector("body").style.overflow = "unset";

    document.querySelector(".up").style.display = "none";
    document.querySelector("iframe").style.zIndex = "-1";
    TweenLite.to(showcaseRef, 0.5, {
      top: "0"
    });
  };

  return (
    <div className="showcase">
      <iframe src={showcaseProjects.projects[index].url} title="showcase" />
      <div className="up">
        <i className="fas fa-chevron-up" onClick={animateUp} />
      </div>
      <div className="showcase-over" ref={el => (showcaseRef = el)}>
        <span className="background" />
        <i className="fas fa-chevron-down down" onClick={animateDown} />
        <i className="fas fa-chevron-left" onClick={() => changeIndex(-1)} />
        <div className="text">
          <h1 className="title">duhamelgm.me</h1>
          <p className="description">Hello, I'm a Full-Stack Web Developer</p>
        </div>
        <i className="fas fa-chevron-right" onClick={() => changeIndex(1)} />
      </div>
    </div>
  );
};

export default Showcase;
