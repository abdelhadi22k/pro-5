import { Container, Image } from "react-bootstrap";

import React from "react";

const GetToKnowMe = () => {
  return (
    <section className="getToKnowMe">
      <Container className="aboutContainer">
        <div className="aboutInfo">
          <h3 className="minTitleSection"> We provide solutions </h3>
          <h1 className="minTitle">
            Crafting Beautiful and Functional Websites
          </h1>
          <p className="minParagraph">
            {" "}
            Create websites to enhance your digital presence. 
            Get your website now
          </p>
          <div className="btnContainer">
          <a href="#Contact" className="minBtn1">
            Contact Us
          </a>
          
        </div>
        </div>

        <div className="aboutImg">
          <Image loading="lazy" src="sources/img/getToKnowMe.png" fluid />
        </div>
      </Container>
    </section>
  );
};

export default GetToKnowMe;
