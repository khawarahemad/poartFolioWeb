import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>About Me</h2>
                  <p>Get to know more about my journey and experience</p>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
        <Row className="about-content">
          <Col md={6}>
            <div className="about-box">
              <h3>Professional Journey</h3>
              <div className="timeline">
                <div className="timeline-item">
                  <h4>Core Community Team Member</h4>
                  <h5>DevSomeware</h5>
                  <p>Contributing to the development and growth of the DevSomeware community, helping developers connect and learn.</p>
                </div>
                <div className="timeline-item">
                  <h4>Cybersecurity Enthusiast</h4>
                  <p>Specializing in memory analysis, network security, and developing security tools. Passionate about protecting digital assets and creating secure applications.</p>
                </div>
                <div className="timeline-item">
                  <h4>Software Developer</h4>
                  <p>Building innovative solutions using modern technologies. Focused on creating efficient, user-friendly applications that solve real-world problems.</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="about-box">
              <h3>Community Involvement</h3>
              <div className="community-content">
                <div className="community-item">
                  <h4>DevSomeware Core Team</h4>
                  <p>Active member of the DevSomeware community, contributing to:</p>
                  <ul>
                    <li>Community development and growth</li>
                    <li>Technical workshops and mentoring</li>
                    <li>Open source contributions</li>
                    <li>Developer networking events</li>
                  </ul>
                </div>
                <div className="community-item">
                  <h4>Open Source Contributor</h4>
                  <p>Contributing to various open-source projects and sharing knowledge with the developer community.</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}; 