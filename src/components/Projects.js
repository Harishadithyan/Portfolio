import { Container, Row, Col, Tab, Nav, Card } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { Cert } from "./Cert";
import cert0 from "../assets/img/cert.jpg";
import cert1 from "../assets/img/cert1.jpg";
import cert2 from "../assets/img/cert2.jpg";
import cert3 from "../assets/img/cert3.jpg";
import cert4 from "../assets/img/cert4.jpg";
import cert5 from "../assets/img/cert5.jpg";
import cert6 from "../assets/img/cert6.jpg";
import cert7 from "../assets/img/cert7.jpg";
import cert8 from "../assets/img/cert8.jpg";
import cert9 from "../assets/img/java.jpg";
import cert10 from "../assets/img/C.jpg";
import cert11 from "../assets/img/gedit.jpg";
import cert12 from "../assets/img/forage.png";
import cert13 from "../assets/img/ns3.jpg";
import cert14 from "../assets/img/Ardunio.jpg";
import cert15 from "../assets/img/Tata.jpg";
import cert16 from "../assets/img/Software.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";

import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Instagram clone",
      description: "React , Django",
      vidUrl: "https://res.cloudinary.com/dl2hcx3sr/video/upload/v1770486194/Insta_clone_-_Made_with_Clipchamp_ddj9ig.mp4",
    },
    {
      title: "Food App",
      description: "React Native",
      vidUrl: "https://res.cloudinary.com/dl2hcx3sr/video/upload/v1753010788/Screen_Recording_2025-03-04_205445_pzfxhb.mp4",
    },
    {
      title: "IoT Dashboard",
      description: "React Native + NodeMCU",
      vidUrl: "https://res.cloudinary.com/dl2hcx3sr/video/upload/v1753010635/iot_rmkwmj.mp4",
    },
    {
      title: "Student Management",
      description: "Django",
      vidUrl: "https://res.cloudinary.com/dl2hcx3sr/video/upload/v1753010572/WhatsApp_Video_2025-07-19_at_16.48.28_d66665c9_xeylj3.mp4",
    },
    {
      title: "Blog Thoughtify",
      description: "Django CMS",
      vidUrl: "https://res.cloudinary.com/dl2hcx3sr/video/upload/v1753010599/WhatsApp_Video_2025-07-19_at_16.45.33_258489df_hs0cof.mp4",
    },
    {
      title: "Todo App",
      description: "Django Web",
      vidUrl: "https://res.cloudinary.com/dl2hcx3sr/video/upload/v1753010569/WhatsApp_Video_2025-07-19_at_16.47.47_97e366c0_zvpsad.mp4",
    }
  ];

  const certifications = [
    {
      title: "Python and Django Full Stack",
      description: "UDEMY",
      imgUrl: cert0,
    },
    {
      title: "Django Framework Basics",
      description: "GUVI",
      imgUrl: cert1,
    },
    {
      title: "Build Ticketing App",
      description: "GUVI",
      imgUrl: cert2,
    },
    {
      title: "React JS",
      description: "GUVI",
      imgUrl: cert3,
    },
    {
      title: "Software Engineer intern",
      description: "Hacker Rank",
      imgUrl: cert16,
    },
    {
      title: "C Programming",
      description: "GUVI",
      imgUrl: cert4,
    },
    {
      title: "JAVA",
      description: "Spoken Tutorial",
      imgUrl: cert9,
    },
    {
      title: "C and Cpp",
      description: "Spoken Tutorial",
      imgUrl: cert10,
    },
    {
      title: "Developer and Technology Job Simulation",
      description: "Forage",
      imgUrl: cert12,
    },
    {
      title: "TATA",
      description: "TATA",
      imgUrl: cert15,
    },
    {
      title: "Gedit",
      description: "Spoken Tutorial",
      imgUrl: cert11,
    },
    {
      title: "Ardunio",
      description: "Spoken Tutorial",
      imgUrl: cert14,
    },
    {
      title: "NS3",
      description: "Spoken Tutorial",
      imgUrl: cert13,
    },
    {
      title: "Wi-Fi Robotics",
      description: "GENESIS EduTech",
      imgUrl: cert5,
    },
    {
      title: "Python Basics",
      description: "GUVI",
      imgUrl: cert6,
    },
    {
      title: "MySQL",
      description: "SCALER",
      imgUrl: cert7,
    },
    {
      title: "MongoDB",
      description: "MongoDB University",
      imgUrl: cert8,
    },
  ];

  const projectLinks = [
    {
      title: "Thoughtify Blog",
      github: "https://github.com/Harishadithyan/Thoughtifydaily.git",
      appLink: "https://thoughtifydaily.onrender.com/",
      docker:"https://hub.docker.com/repository/docker/harishadithyanm/thoughtify-blog/general",
    },
    {
      title: "Todo",
      github: "https://github.com/Harishadithyan/Todo-app.git",
      appLink: "https://todo-app-32un.onrender.com/",
      docker:"https://hub.docker.com/repository/docker/harishadithyanm/todo/general",
    },
    {
      title: "Weather",
      github: "https://github.com/Harishadithyan/Weather.git",
      appLink: "https://weather-gnw2.onrender.com/",
    },
    {
      title: "IoT Dashboard",
      github: "https://github.com/Harishadithyan/iot_dashboard.git",
      appLink: "https://drive.google.com/file/d/1kvXuwGPo1tG3OPGbRcehTL3tQGZRV7AN/view?usp=drive_link",
    },
    {
      title: "Insta clone",
      github: "https://github.com/Harishadithyan/Instagram_clone.git",
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
                  <h2>Projects, Certifications & GitHub</h2>
<p>
  Explore my projects, certifications, and open-source work that demonstrate my skills in web, app, and IoT development.
  From real-time applications and social platforms to smart IoT dashboards, each project reflects hands-on problem solving.
  My GitHub showcases complete source code, while certifications highlight continuous learning with technologies like React, Django, and NodeMCU.
</p>


                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <div className="nav-scroll-wrapper">
    <Nav
      variant="pills"
      className="nav-pills mb-5 justify-content-start align-items-center flex-nowrap"
      id="pills-tab"
    >
      <Nav.Item>
        <Nav.Link eventKey="first">Demo</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="second">Certs</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="third">Links</Nav.Link>
      </Nav.Item>
    </Nav>
  </div>

                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <Row>
                          {certifications.map((cert, index) => (
                            <Cert key={index} {...cert} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <Row>
                          {projectLinks.map((proj, index) => (
                            <Col key={index} md={6} lg={4} className="mb-4">
                              <Card
  style={{
    background: "rgba(30, 30, 30, 0.6)", // greyish-transparent
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "20px",
    padding: "20px",
    color: "#f1f1f1",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    minHeight: "180px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
    transition: "transform 0.3s ease",
  }}
  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
>
  <Card.Body>
  <Card.Title style={{ fontSize: "1.1rem", fontWeight: "600" }}>
    {proj.title}
  </Card.Title>

  <Card.Text style={{ fontSize: "0.9rem" }}>
    {proj.github && (
      <>
        <strong>GitHub:</strong>{" "}
        <a
          href={proj.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#65e509ff", textDecoration: "none" }}
        >
          Repo Link
        </a>
        <br />
      </>
    )}

    {proj.docker && (
      <>
        <strong>Docker:</strong>{" "}
        <a
          href={proj.docker}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#65e509ff", textDecoration: "none" }}
        >
          Image Link
        </a>
        <br />
      </>
    )}

    {proj.appLink && (
      <>
        <strong>Live App:</strong>{" "}
        <a
          href={proj.appLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#65e509ff", textDecoration: "none" }}
        >
          View App
        </a>
      </>
    )}
  </Card.Text>
</Card.Body>

</Card>

                            </Col>
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
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};
