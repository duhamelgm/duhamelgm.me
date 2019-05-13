import React from "react";

import showcaseProjects from "../assets/api/showcase.json";
import "./Showcase.scss";

const Showcase = () => {
  const projectsLength = showcaseProjects.projects.length;
  const iframeSrc =
    showcaseProjects.projects[Math.floor(Math.random() * projectsLength)];

  return (
    <div className="showcase">
      <span className="showcase-over" />
      <iframe src={iframeSrc.url} title="showcase" />
      <h1 className="title">duhamelgm.me</h1>
      <p className="description">Hello, I'm a Full-Stack Web Developer</p>
    </div>
  );
};

export default Showcase;
