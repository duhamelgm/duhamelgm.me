import React from "react";

import socialMedia from "../assets/api/social_media.json";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <h2>Get in touch</h2>
      <p>
        If you want help in any project, or just want to come and say hi, feel
        free to contact me
      </p>
      <ul className="social-media">
        {socialMedia.list.map(social => (
          <li key={social.name}>
            <a href={social.url} style={{ background: social.colorLight }}>
              <i
                className={social.icon}
                style={{ background: social.colorBase }}
              />{" "}
              <p>{social.content}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;
