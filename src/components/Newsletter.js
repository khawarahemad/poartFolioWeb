import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";

export const Newsletter = ({ onValidated }) => {
  const [email, setEmail] = useState('');
  const [buttonText, setButtonText] = useState('Submit');
  const [status, setStatus] = useState({});

  useEffect(() => {
    if (status.message) {
      const timer = setTimeout(() => {
        setStatus({});
      }, 5000); // Hide notification after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [status.message]);

  const validateEmail = () => {
    if (!email || email.indexOf("@") === -1) {
      setStatus({ success: false, message: 'Please enter a valid email address.' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    // Validate email
    if (!validateEmail()) {
      setButtonText("Submit");
      return;
    }

    // Define your Discord webhook URL
    const discordWebhookUrl = "https://discord.com/api/webhooks/1332746122762129472/POj5VkH1u8fzU13JNehRSnDnYWkA0kzDpsEVcUf61pjsZusOsOOCX4OP7tgSrqtM54Cj";

    // Format the message to send to Discord
    const discordMessage = {
      content: `
        ╭━━━◈✨ **MEET Alert!** ✨◈━━━╮
        
        **📩 Email:**: ${email}

        💌 **Slide in ASAP!** || @hey_khawar01 @hey_khan_bhai ||  

      ╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯ 
      `,
    };

    try {
      // Send data to Discord
      const response = await fetch(discordWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(discordMessage),
      });

      // Check if the response status is 204 (No Content)
      if (response.status === 204) {
        setStatus({ success: true, message: 'Message sent to Khawar. successful!' });
        setEmail(''); // Reset email field
      } else {
        setStatus({ success: false, message: 'Something went wrong. Please try again later.' });
      }
    } catch (error) {
      setStatus({ success: false, message: 'Network error. Please try again later.' });
    }

    setButtonText("Submit");
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row className="align-items-center">
          <Col lg={12} md={6} xl={5} className="text-center text-md-start">
            <h3>Let’s Meet...<br />& Have some Conversation.</h3>
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                />
                <button type="submit"><span>{buttonText}</span></button>
              </div>
            </form>
          </Col>
        </Row>
      </div>

      {/* Toast notification */}
      {status.message && (
        <div className={`toast-notification ${status.success ? "success" : "error"}`}>
          <p>{status.message}</p>
        </div>
      )}
    </Col>
  );
};