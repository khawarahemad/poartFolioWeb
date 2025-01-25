import { Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Certificates = () => {
  // Sample certificates data
  const certificates = [
    {
      title: "Foundations of Cybersecurity",
      issuer: "Coursera",
      date: "November 2024",
      image: "https://raw.githubusercontent.com/khawarahemad/assets/main/certificates/Foundations%20of%20Cybersecurity.png",
    },
    {
      title: "Connect and Protect: Networks and Network Security",
      issuer: "Coursera",
      date: "November 2024",
      image: "https://raw.githubusercontent.com/khawarahemad/assets/main/certificates/Connect%20and%20Protect%3A%20Networks%20and%20Network%20Security.png",
    },
    {
      title: "Play It Safe: Manage Security Risks",
      issuer: "Coursera",
      date: "Nov 2022",
      image: "https://github.com/khawarahemad/assets/blob/main/certificates/CPlay%20It%20Safe:%20Manage%20Security%20Risk.png?raw=true",
    },
    {
      title: "Tools of the Trade: Linux and SQL",
      issuer: "Coursera",
      date: "Dec 2024",
      image: "https://raw.githubusercontent.com/khawarahemad/assets/main/certificates/Tools%20of%20the%20Trade%3A%20Linux%20and%20SQL.png",
    },
  ];

  return (
    <section className="certificate" id="certificates">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Certificates</h2>
                  <p>Here are some of the certifications I've earned.</p>
                </div>
              )}
            </TrackVisibility>
          </div>
        </div>
        <Row>
          {certificates.map((certificate, index) => (
            <Col key={index} md={6} lg={3} className="certificate-item">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <div className="certificate-card" style={{ backgroundImage: `url(${certificate.image})` }}>
                      <div className="certificate-content">
                        <h3>{certificate.title}</h3>
                        <p>{certificate.issuer}</p>
                        <p>{certificate.date}</p>
                      </div>
                    </div>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};