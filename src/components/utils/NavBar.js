import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import { useTranslation } from "react-i18next";
// import { useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

function NavBar() {

  // const languages = [
  //   { code: "en", lang: "English" },
  //   { code: "ar", lang: "Arabic" },
  // ];

  // const { i18n } = useTranslation();

  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  // };


  // useEffect(() => {
  //   document.body.dir = i18n.dir();
  // }, [i18n, i18n.language]);

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary navbar">
      <Container>
        <Navbar.Brand>
          <ScrollLink
            className="mainLink"
            to="home"
            smooth={true}
            duration={500}
            offset={-100}
          >
            <img alt="logoBrand" src="sources/svg/mainLogo.svg"></img>
          </ScrollLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="navbarCollapse">
          <Nav className="linkContainer">
            <ScrollLink
              className="mainLink"
              to="about"
              smooth={true}
              duration={500}
              offset={-100}
            >
              {" "}
              About Us <div></div>{" "}
            </ScrollLink>
            <ScrollLink
              className="mainLink"
              to="services"
              smooth={true}
              duration={500}
              offset={-100}
            >
              Services <div></div>{" "} 
            </ScrollLink>
            <ScrollLink
              className="mainLink"
              to="Skills"
              smooth={true}
              duration={500}
              offset={-100}
            >
              {" "}
              Skills <div></div>{" "}
            </ScrollLink>
            <ScrollLink
              className="mainLink"
              to="Project"
              smooth={true}
              duration={500}
              offset={-100}
            >
              {" "}
              Project <div></div>{" "}
            </ScrollLink>
            <ScrollLink
              className="mainLink"
              to="Contact"
              smooth={true}
              duration={500} 
              offset={-100}
            >
              {" "}
              Contact Us <div></div>{" "}
            </ScrollLink>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

//  <NavDropdown
//             title={<i className="fa-solid fa-earth-europe"></i>}
//             id="navbarScrollingDropdown"
//           >
//             {languages.map((lng) => {
//               return (
//                 <NavDropdown.Item
//                   key={lng.code}
//                   onClick={() => changeLanguage(lng.code)}
//                   className={lng.code === i18n.language ? "x" : ""}
//                 >
//                   {" "}
//                   {lng.lang}
//                 </NavDropdown.Item>
//               );
//             })}
//           </NavDropdown>
