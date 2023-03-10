import React from "react";
import pfp from "../../images/personal-pic.jfif";

function About() {
  return (
    <section id="about-me">
      <h2>About Me</h2>
      <img id="profile-pic" src={pfp} alt="My pfp" />
      <p>
        Hey there! My name is Pak Ho Wong and I am a fresh graduate from the
        University of Melbourne, major in Computer Systems and Design. Currently
        considering full-stack web developer as my future career, but I also
        know other coding languages such as Java, Python and C++. I am living in
        the CBD of Melbourne right now and am always down for a coffee or two!
      </p>
    </section>
  );
}

export default About;
