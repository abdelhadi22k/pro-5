import { Container, Image } from "react-bootstrap";

const About = () => {
 

  return ( 
    <section id="about" className="about">
      <Container className="aboutContainer">
        <div className="aboutInfo">
          <h3 className="minTitleSection"> Exactly who we are</h3>
          <h1 className="minTitle">
          Acos is a company specialized in developing <span>websites</span> 
          </h1>
          <p className="minParagraph">
            {" "}
            The agency features a specialized team of developers and web designers who 
            have extensive experience in the fields of design and programming.
          </p>
          <div className="infoBox">
            <div>
              <h4>Practical websites</h4>
              <p className="minParagraph">
                {" "}
                Web design and development based on performance and effectiveness.
              </p>
            </div>
            <div>
              <h4>Creative uiux designs</h4>
              <p className="minParagraph">
                {" "}
                A unique, attractive, easy-to-use, interactive, innovative, responsive, inspiring experience.
              </p>
            </div>
          </div>
          <div className="btnContainer">
          <a href='#FAQs' className="minBtn1">Learn More</a>
          <a href='#Contact' className="minBtn3">Contact Us</a>
          </div>
        </div>

        <div className="aboutImg">
          <Image loading="lazy" src="sources/img/about.png" fluid />
        </div>
      </Container>
    </section>
  );
};
export default About;
