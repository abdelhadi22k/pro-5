import { Container } from "react-bootstrap";
import { project } from "../data/project";
import { useState } from "react";
import NavProject from "../components/product/NavProject";
import Project from "../components/product/Project";
import { Link } from "react-router-dom";

const Projects = () => {
  
  const allCategory = ["All", ...new Set(project.map((el) => el.category))];

  const [data, setDate] = useState(project);

  const category = (cat) => {
    if (cat === `All`) {
      setDate(project);
    } else {
      const newArray = project.filter((element) => element.category === cat);
      setDate(newArray);
    }
  };

  return (
    <div className="projectSection" id="Project">
      <Container className="project">
        <div className="projectInfo">
          <h1 className="minTitle">Latest Projects</h1>
          <p className="minParagraph">
            {" "}
            Take a look at some of our past work
          </p>
          <div className="btnContainer">
          <Link to='/Portfolio' className="minBtn1">View More</Link>
          <a href='#Contact' className="minBtn3">Contact Us</a>

          </div>
        </div>

        <div className="projectContainer">
          <div className="projectNavbar">
            <NavProject 
              showCategory={category}
              allCat={allCategory}
            ></NavProject>
          </div>
          <div className="projectHolder">
            <Project project={data}></Project>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
