import { Container, Image } from "react-bootstrap";

const Services = () => {
  return (
    <section className="services" id="services">
      <Container className="servicesContainer">
        <div className="servicesImg">
          <Image loading="lazy" src="sources/img/services.png" fluid />
        </div>
        <div className="servicesInfo">
          <div className="servicesBox">
            <div>1</div>
            <div>
              {" "}
              <h1 className="minTitle">
              Web Development
              </h1>
              <p className="">
                {" "}
                Programming, building and designing websites and web 
                applications to achieve digital goals,
               
              </p>
            </div>
          </div>
          <div className="servicesBox">
            <div>2</div>
            <div>
              {" "}
              <h1 className="minTitle">
              UIUX Design 
              </h1>
              <p className="">
                {" "}
                Designing the visual and interactive aspects of web and mobile 
                applications to enhance the user experience and make them attractive.
              </p>
            </div>
          </div>
          <div className="servicesBox">
            <div>3</div>
            <div>
              {" "}
              <h1 className="minTitle">
              SEO Support
              </h1>
              <p className="">
                {" "}
                SEO support to increase organic visibility and improve rankings in search engines,
                which helps in improving reach of the target audience.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;
