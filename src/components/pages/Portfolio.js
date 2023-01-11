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
        <p>Cervical Cancer Screening Program Hong Kong</p>
        <a href="#portfolio">
          <img src={sampleImg} alt="sample img 2" title="sample img 2" />
        </a>
        <p>Sample project</p>
        <a href="#portfolio">
          <img src={sampleImg} alt="sample img 3" title="sample img 3" />
        </a>
        <p>Sample project</p>
        <a href="#portfolio">
          <img src={sampleImg} alt="sample img 4" title="sample img 4" />
        </a>
        <p>Sample project</p>
        <a href="#portfolio">
          <img src={sampleImg} alt="sample img 5" title="sample img 5" />
        </a>
        <p>Sample project</p>
        <a href="#portfolio">
          <img src={sampleImg} alt="sample img 6" title="sample img 6" />
        </a>
        <p>Sample project</p>
      </div>
    </section>
  );
}

export default Portfolio;
