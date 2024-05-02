
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const PortfolioEntry = () => {
  return (
    <section className="PortfolioEntry">
      <Container className="">
        <div>
          <h1 className="minTitle">
          Welcome to my Portfolio
          </h1>
          <p className="minParagraph">
            {" "}
            Take a look at some of our past work
          </p>
          <div className="btnContainer">
            <Link to='/Portfolio' className="minBtn1">Visit our Portfolio</Link>
            <a href="#Contact" className="minBtn5">
            Contact Us
          </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PortfolioEntry;
