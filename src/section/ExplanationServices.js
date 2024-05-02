import { Container, Image } from "react-bootstrap";

const ExplanationServices = () => {
  return (
    <section id="explanationServices" className="explanationServices">
      <Container className="aboutContainer">
        <div className="aboutInfo">
          <h3 className="minTitleSection"> Professional work team</h3>
          <h1 className="minTitle">
            A group of community experiences and talents here
          </h1>
          <p className="minParagraph">
            {" "}
            acos is here to help you. We have years of experience designing
            powerful, distinctive introductory websites for companies of all
            sizes.
          </p>
          <div className="infoBox">
            <div>
              <h4>Capable work team</h4>
              <p className="minParagraph">
                {" "}
                Your project is in safe hands with our experts
              </p>
            </div>
            <div>
              <h4>Excellent support service </h4>
              <p className="minParagraph">
                {" "}
                Our support service is always there to help you
              </p>
            </div>
          </div>
          <div className="btnContainer">
            <a href="#Project" className="minBtn1">
              Check out projects{" "}
            </a>
            <a href="#Contact" className="minBtn3">
              Contact Us
            </a>
          </div>
        </div>

        <div className="aboutImg">
          <Image
            loading="lazy"
            src="sources/img/explanationServices.png"
            fluid
          />
        </div>
      </Container>
    </section>
  );
};
export default ExplanationServices;
