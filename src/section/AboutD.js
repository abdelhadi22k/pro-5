import React from "react";
import { Container } from "react-bootstrap";

const AboutD = () => {
  const style = {
    backgroundImage: 'url("sources/img/aboutSectionImg.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    maxWidth: "100vw",
    minHeight: "100vh",
    zIndex: 21,
    margin: 0,
    padding: 0,
  };
  return (
    <div>
      <div className="aboutContainerImg" style={style}>
        <div className="Shade">
          <Container className="aboutContainerInfo">
            <div>
              <h1 className="minTitle">
                Create your own amazing <span>website</span> or web{" "}
                <span>application</span>
              </h1>
              <p className="minParagraph">
                {" "}
                Transforming ideas into beautiful and functional web
                experiences.
              </p>
              <div className="btnContainer">

              <a href='#FAQs' className="minBtn1">Learn More</a>
              <a href='#Contact' className="minBtn4">Contact Us</a>

              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default AboutD;
