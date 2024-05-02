import React, { useState } from "react";
import { Image } from "react-bootstrap";

const itemsPerPage = 4;

const Project = ({ project }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(project.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = project.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="ProjectContainer">
        {currentItems.length !== 0 ? (
          currentItems.map((element) => {
            return (
              <div key={element.id} className="mb-2">
                <div className="projectBox">

                  <a target="blank" href={element.shewMore}> Shew More</a>
                    <h6>{element.title}</h6>

                  <Image
                    className="projectImg"
                    src={element.imgUrl}
                    alt={element.title}
                    fluid
                  />
                </div>
                <div className="line lineProject"></div>
              </div>
            );
          })
        ) : (
          <h3>No Project</h3>
        )}
      </div>
      <div className="totalPages">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            className="PagesButton"
            key={index}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Project;
