import React, { useState } from "react";
import { Container } from "react-bootstrap";
import NavProject from "../components/product/NavProject";
import { project } from "../data/project";
import Project from "../components/Project";
import { Link } from "react-router-dom";

const Portfolio = () => {
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
    <div className="Portfolio" id="Portfolio">
    <div className="PortfolioNav">
    <Container className="PortfolioNavContainer">
    <Link to='/' className="minBtn3">Back To Home Page</Link>
    </Container>
    </div>
      <Container className="project">
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

export default Portfolio;
