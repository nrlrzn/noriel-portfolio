import { useState } from 'react';
import { Input, Button } from 'antd';

const { TextArea } = Input;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setStatus(' Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus(' Error sending message');
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact">
        <div className="contact-container">
          <h2>Contact Me</h2>
          <form onSubmit={handleSubmit}>
            <Input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              size="large"
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              size="large"
            />
            <TextArea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
            />
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              block
              className="submit-btn"
            >
              Send Message
            </Button>
          </form>

          {status && (
            <p
              className={`status-message ${
                status.toLowerCase().includes('successfully')
                  ? 'success'
                  : 'error'
              }`}
            >
              {status}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
