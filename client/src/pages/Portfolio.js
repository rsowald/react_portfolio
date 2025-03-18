import React from "react";
import { Container, CardDeck } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import projectData from "../data/projects";

function Portfolio() {
  return (
    <Container id="portfolio" style={{ maxWidth: "70%" }}>
      <CardDeck
        style={{
          marginTop: "10px",
          marginLeft: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gridGap: ".75rem",
        }}
      >
        {projectData.map((projectData) => (
          <ProjectCard
            key={projectData.title}
            image={projectData.image}
            title={projectData.title}
            repo={projectData.repo}
            demo={projectData.demo}
            text={projectData.text}
          />
        ))}
      </CardDeck>
    </Container>
  );
}

export default Portfolio;
