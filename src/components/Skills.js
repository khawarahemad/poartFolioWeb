import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const skillCategories = {
    "Cybersecurity": ["Network Security", "Memory Analysis", "Penetration Testing", "Security Tools"],
    "Development": ["React", "JavaScript", "Python", "C++"],
    "Tools & Technologies": ["Git", "Docker", "Linux", "SQL"],
    "Soft Skills": ["Problem Solving", "Team Leadership", "Communication", "Project Management"]
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col size={12}>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>Technical expertise and professional capabilities</p>
              <Row className="skill-categories">
                {Object.entries(skillCategories).map(([category, skills], index) => (
                  <Col key={index} md={6} lg={3} className="skill-category">
                    <div className="skill-category-box">
                      <h3>{category}</h3>
                      <ul>
                        {skills.map((skill, skillIndex) => (
                          <li key={skillIndex}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
