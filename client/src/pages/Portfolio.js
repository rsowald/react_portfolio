import React from "react";
import { Container, CardDeck } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import projectData from "../data/projects";

function Portfolio() {
    return (
        <Container id="portfolio">
            <CardDeck>
                {projectData.map(projectData => (
                    <ProjectCard
                        image={projectData.image}
                        title={projectData.title}
                        repo={projectData.repo}
                        demo={projectData.demo}
                        text={projectData.text}
                    />
                ))}
            </CardDeck>

        </Container>
    )
}

export default Portfolio;