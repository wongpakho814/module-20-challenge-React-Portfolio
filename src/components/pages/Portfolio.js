import React from "react";
import cervicalscreening from "../../images/cervical-web.png";
import sampleImg from "../../images/template-img.png";

function Portfolio() {
  return (
    <section id="previous-work">
      <h2>Previous Work</h2>
      <div>
        <a
          href="https://www.cervicalscreening.gov.hk/en/index.html"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={cervicalscreening}
            alt="cervical cancer screening program Hong Kong"
            title="cervical cancer screening program Hong Kong"
          />
        </a>
        <a href="#portfolio">
          <img src={sampleImg} alt="sample img 2" title="sample img 2" />
        </a>
        <a href="#portfolio">
          <img src={sampleImg} alt="sample img 3" title="sample img 3" />
        </a>
        <a href="#portfolio">
          <img src={sampleImg} alt="sample img 4" title="sample img 4" />
        </a>
        <a href="#portfolio">
          <img src={sampleImg} alt="sample img 5" title="sample img 5" />
        </a>
        <a href="#portfolio">
          <img src={sampleImg} alt="sample img 6" title="sample img 6" />
        </a>
      </div>
    </section>
  );
}

export default Portfolio;
