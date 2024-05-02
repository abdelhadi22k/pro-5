import { Container } from "react-bootstrap";

const SkillsAndExpertise = () => {
  return (
    <div className="SkillsEndExperience" id="Skills">
      <Container className="SkillsEndExperienceContainer">
        <div className="skills">
          <h1 className="minTitle">
            {" "}
            Skills & <br /> Experience{" "}
          </h1>
          <p>
          We have good experience in the field of digital services 
          and high technical skills, learn about them
          </p>
          <h4>Skills</h4>
          <div className="skillHolder">
            <div className="skillTitle">
              {" "}
              <lord-icon
                src="https://cdn.lordicon.com/bvymuvni.json"
                trigger="hover"
                colors="primary:#0b60b0,secondary:#000000"
                style={{ width: "70px", height: "70px" }}
              ></lord-icon>
              <span> UX Design</span>
            </div>
            <div className="skillTitle">
              {" "}
              <lord-icon
                src="https://cdn.lordicon.com/dqrpfjei.json"
                trigger="hover"
                colors="primary:#0b60b0,secondary:#000000"
                style={{ width: "70px", height: "70px" }}
              ></lord-icon>
              <span>UI Design</span>
            </div>
            <div className="skillTitle">
              {" "}
              <lord-icon
                src="https://cdn.lordicon.com/tcqjuymo.json"
                trigger="hover"
                colors="primary:#0b60b0,secondary:#000000"
                style={{ width: "70px", height: "70px" }}
              ></lord-icon>
              <span>Wireframe</span>
            </div>
            <div className="skillTitle">
              {" "}
              <lord-icon
                src="https://cdn.lordicon.com/nmguxqka.json"
                trigger="hover"
                state="hover-squeeze"
                colors="primary:#0b60b0,secondary:#000000"
                style={{ width: "70px", height: "70px" }}
              ></lord-icon>
              <span>Prototype</span>
            </div>
            <div className="skillTitle">
              {" "}
              <lord-icon
                src="https://cdn.lordicon.com/ffoywhrm.json"
                trigger="hover"
                colors="primary:#0b60b0,secondary:#000000"
                style={{ width: "70px", height: "70px" }}
              ></lord-icon>
              <span>FullStack</span>
            </div>
            <div className="skillTitle">
              {" "}
              <lord-icon
                src="https://cdn.lordicon.com/kgwqxfas.json"
                trigger="hover"
                colors="primary:#0b60b0,secondary:#000000"
                style={{ width: "70px", height: "70px" }}
              ></lord-icon>
              <span>Front-End</span>
            </div>
            <div className="skillTitle">
              {" "}
              <lord-icon
                src="https://cdn.lordicon.com/pgveulug.json"
                trigger="hover"
                colors="primary:#0b60b0,secondary:#000000"
                style={{ width: "70px", height: "70px" }}
              ></lord-icon>
              <span>Back-End</span>
            </div>
            <div className="skillTitle">
              <lord-icon
                src="https://cdn.lordicon.com/jtkfemwz.json"
                trigger="morph"
                state="morph-check"
                colors="primary:#0b60b0,secondary:#000000"
                style={{ width: "70px", height: "70px" }}
              ></lord-icon>
              <span>SEO</span>
            </div>
          </div>
        </div>

        <div className="experience">
          <h4> Experience </h4>

          <div className="line"></div> 
          <div className="servicesBox">
            <span>2021 - Present</span>
            <div>
              <h1>Web Developer</h1>
              <span>Freelancer</span>
            </div>
          </div>

          <div className="line"></div>
          <div className="servicesBox">
            <span>2021 - Present</span>
            <div>
              <h1>UIUX Designer</h1>
              <span>Freelancer</span>
            </div>
          </div>

          <div className="line"></div>
          <div className="servicesBox">
            <span>2022 - Present</span>
            <div>
              <h1>SEO</h1>
              <span>Freelancer</span>
            </div>
          </div>

          <div className="line"></div>
          <div className="servicesBox">
            <span>2021 - Present</span>
            <div>
              <h1>+60 Completed project </h1>
              <span>Freelancer</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SkillsAndExpertise;
