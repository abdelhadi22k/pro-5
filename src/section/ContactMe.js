import { Container } from "react-bootstrap";
import React from "react";

const ContactMe = () => {
  return (
    <section className="contactMe" id="Contact">
      <Container className="contactMeContainer">
        <div>
          <h1 className="minTitle">Get in Touch</h1>
          <p className="minParagraph">
            Our official digital accounts to communicate with us
          </p>
        </div>
        <div className="contactMeHolder">
          <div className="contactMeBox">
            <div>
              <i className="fa-solid fa-at"></i>{" "}
            </div>
            <div>
              <h4> Email </h4>
              <p>abdelhadikaba64@gmail.com</p>
            </div>
          </div>

          <div className="contactMeBox">
            <div>
              <i className="fa-brands fa-whatsapp"></i>
            </div>
            <div>
              <h4> WhatsApp </h4>
              <p>+213774823948</p>
            </div>
          </div>

          <div className="contactMeBox">
            <div>
              <i className="fa-regular fa-message"></i>
            </div>
            <div>
              <h4> official accounts </h4>
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

                <a target="blank" href="https://dribbble.com/abdo_k">
                  <i class="fa-brands fa-dribbble"></i>
                </a>
             
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactMe;
// <a href="#">
//   <i class="fa-brands fa-behance"></i>
// </a>
