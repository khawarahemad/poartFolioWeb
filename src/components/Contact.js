import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const validateForm = () => {
    const { firstName, lastName, email, phone, message } = formDetails;

    // Check if any field is empty
    if (!firstName || !lastName || !email || !phone || !message) {
      setStatus({ success: false, message: 'All fields are required.' });
      return false;
    }

    // Validate email format
    if (!email.includes('@')) {
      setStatus({ success: false, message: 'Please enter a valid email address.' });
      return false;
    }

    // Validate phone number (only numbers allowed)
    if (!/^\d+$/.test(phone)) {
      setStatus({ success: false, message: 'Phone number should contain only numbers.' });
      return false;
    }

    return true; // Form is valid
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    // Validate the form before proceeding
    if (!validateForm()) {
      setButtonText("Send");
      return; // Stop if validation fails
    }

    // Define your Discord webhook URL
    const discordWebhookUrl = "https://discord.com/api/webhooks/1332430764591284384/eC69Iu-L8-zTXHxUFzxPQm7xqo_y2x6REUgfyt8GDBHdKuhHo_9PtgXlpwdz_wOOPaLa";

    // Format the message to send to Discord
    const discordMessage = {
      content: `
        **New Contact Form Submission || @hey_khawar01 @hey_khan_bhai ||** 
        
        **Name**: ${formDetails.firstName} ${formDetails.lastName}
        **Email**: ${formDetails.email}
        **Phone**: ${formDetails.phone}
        **Message**: ${formDetails.message}
      `,
    };

    try {
      // Send data to Discord
      let response = await fetch(discordWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(discordMessage),
      });

      // Check if the response status is 204 (No Content)
      if (response.status === 204) {
        setStatus({ success: true, message: 'Message sent successfully to Khawar!' });
        setFormDetails(formInitialDetails); // Reset form
      } else {
        setStatus({ success: false, message: 'Something went wrong, please try again later.' });
      }
    } catch (error) {
      setStatus({ success: false, message: 'Network error. Please try again later.' });
    }

    setButtonText("Send");

    // Show toast notification for 5 seconds
    setTimeout(() => {
      setStatus({});
    }, 5000);
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          onChange={(e) => onFormUpdate('firstName', e.target.value)}
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.lastName}
                          placeholder="Last Name"
                          onChange={(e) => onFormUpdate('lastName', e.target.value)}
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) => onFormUpdate('email', e.target.value)}
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          onChange={(e) => onFormUpdate('phone', e.target.value)}
                          required
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) => onFormUpdate('message', e.target.value)}
                          required
                        ></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      {/* Toast notification */}
      {status.message && (
        <div className={`toast-notification ${status.success ? "success" : "error"}`}>
          <p>{status.message}</p>
        </div>
      )}
    </section>
  );
};