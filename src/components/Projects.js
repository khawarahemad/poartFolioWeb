import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/memory.png";
import projImg2 from "../assets/img/VIEWmax.png";
import projImg3 from "../assets/img/Weather.png";
import projImg4 from "../assets/img/Framework.png";
import projImg5 from "../assets/img/RESIZER.png";
import projImg6 from "../assets/img/MUsify.png";
import projImg7 from "../assets/img/AdvancedDllInjector.png";
import projImg8 from "../assets/img/SoundScrape.png";
import projImg9 from "../assets/img/VidToText.png";
import projImg10 from "../assets/img/profile-hub.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Memory Editing Tool",
      description: "It can edit memory of target process..",
      imgUrl: projImg1,
      githubUrl: "https://github.com/khawarahemad/memory-editing",
      tab: "first",
    },
    {
      title: "ViewMax",
      description: "The COMMAND Line tool can increase GitHub ProFile View",
      imgUrl: projImg2,
      githubUrl: "https://github.com/khawarahemad/ViewMax",
      tab: "first",
    },
    {
      title: "AdvancedDllInjector",
      description: "The COMMAND Line AdvancedDllInjector tool can inject any dll into any process",
      imgUrl: projImg7,
      githubUrl: "https://github.com/khawarahemad/InjectXKhanBhai",
      tab: "first",
    },
    {
      title: "SoundScrape",
      description: "The COMMAND Line tool can download you favorite singer songs",
      imgUrl: projImg8,
      githubUrl: "https://github.com/khawarahemad/SoundScrape",
      tab: "first",
    },
    {
      title: "VidToText",
      description: "AI-Powered Video and File to Text Converter",
      imgUrl: projImg9,
      githubUrl: "https://github.com/khawarahemad/vid_to_text",
      tab: "first",
    },
    {
      title: "Weather App For IOS",
      description: "It's a weather app for IOS Device..",
      imgUrl: projImg3,
      githubUrl: "https://github.com/khawarahemad/Whether-App-for-iOS",
      tab: "second",
    },
    {
      title: "Apple FrameWork",
      description: "It's a framework app for IOS Device. It gives all framework details..",
      imgUrl: projImg4,
      githubUrl: "https://github.com/khawarahemad/Apple-framework",
      tab: "second",
    },
    {
      title: "ProfileHub",
      description: "The Hub of links for your profile..",
      imgUrl: projImg10,
      githubUrl: "https://profilehub-ten.vercel.app",
      tab: "third",
    },
    {
      title: "Musify",
      description: "The Music streaming web App..",
      imgUrl: projImg6,
      githubUrl: "https://musify-eta-ten.vercel.app",
      tab: "third",
    },
    {
      title: "img-resizer",
      description: "The website can resize your img size..",
      imgUrl: projImg5,
      githubUrl: "https://github.com/khawarahemad/img-resideer",
      tab: "third",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>
                    Here are some of my projects. You can find more details on my GitHub Profile.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tools</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">iOS Apps</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Web Apps</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.filter(project => project.tab === "first").map((project, index) => (
                            <ProjectCard
                              key={index}
                              title={project.title}
                              description={project.description}
                              imgUrl={project.imgUrl}
                              githubUrl={project.githubUrl}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects.filter(project => project.tab === "second").map((project, index) => (
                            <ProjectCard
                              key={index}
                              title={project.title}
                              description={project.description}
                              imgUrl={project.imgUrl}
                              githubUrl={project.githubUrl}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects.filter(project => project.tab === "third").map((project, index) => (
                            <ProjectCard
                              key={index}
                              title={project.title}
                              description={project.description}
                              imgUrl={project.imgUrl}
                              githubUrl={project.githubUrl}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>

                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
