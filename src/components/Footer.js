import React from "react";
import { Container } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <div className="Footer">
      <Container className="FooterLink">
        <div className="">
          <ScrollLink
            className="mainLink"
            to="home"
            smooth={true}
            duration={1600}
            offset={-100}
          >
            <img alt="logoBrand" src="sources/svg/mainImg.svg"></img>
          </ScrollLink>
        </div>

        <div className="">
        
          <ScrollLink
            className="mainLink"
            to="about"
            smooth={true}
            duration={1400}
            offset={-100}
          >
            {" "}
            About Me <div></div>
          </ScrollLink>

          <ScrollLink
            className="mainLink"
            to="services"
            smooth={true}
            duration={1200}
            offset={-100}
          >
            {" "}
            Services <div></div>
          </ScrollLink>
          <ScrollLink
            className="mainLink"
            to="Skills"
            smooth={true}
            duration={1000}
            offset={-100}
          >
            {" "}
            Skills <div></div>
          </ScrollLink>
          <ScrollLink
            className="mainLink"
            to="Project"
            smooth={true}
            duration={800}
            offset={-100}
          >
            {" "}
            Project <div></div>
          </ScrollLink>
          <ScrollLink
            className="mainLink"
            to="opinions"
            smooth={true}
            duration={600}
            offset={-100}
          >
            {" "}
            opinions <div></div>
          </ScrollLink>
          <ScrollLink
            className="mainLink"
            to="FAQs"
            smooth={true}
            duration={400}
            offset={-100}
          >
            {" "}
            FAQs <div></div>
          </ScrollLink>
        </div>

        <div className="">
          <div className="contactMeBoxIcon ">
            <a target="blank"  href="https://www.instagram.com/a.cos._/?hl=ar">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a target="blank" href="https://www.facebook.com/profile.php?id=100091746498169">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a target="blank" href="https://www.linkedin.com/in/a-cos-701331300/">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </Container>

      <Container className="FooterContainer">
        <div className="Line"></div>
      </Container>

      <Container className="FooterContainer">
        <div className="FooterInfo">
          {" "}
          <span>© 2024 acos ( abdelhadi kaba )</span> All rights reserved
        </div>
        <div className="FooterInfo">
          <a href="/#FAQs">Terms and Conditions</a>
        </div>
        <div className="FooterInfo">
          <a href="/#FAQs">Privacy Policy</a>
        </div>
        <div className="FooterInfo">
          <a href="/#FAQs">Cookie Policy</a>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
