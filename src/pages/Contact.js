/*import React from 'react';

export const Contact = () => {
  return <div>Contact Page
    <div>
      <h1>Contact Page</h1>
      <p>This is the contact page</p>
      <h3>Kajapathy k</h3>
      <p>fornt developer</p>
    </div>
  </div>;
};*/


import React from 'react';
import './ContactPage.css'; // Import the CSS file for ContactPage styling

const ContactPage = () => {
  const [formStatus, setFormStatus] = React.useState('Send');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');

    // Extract form data (name, email, message) from e.target.elements
    const { name, email, message } = e.target.elements;

    // You can handle the form data here (e.g., send it to a server or log it)
    console.log('Name:', name.value);
    console.log('Email:', email.value);
    console.log('Message:', message.value);

    // Reset form status after submission
    setFormStatus('Sent');
  };

  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact EduFord Educational Institute</h2>
      <p className="contact-info">
        <strong>Location:</strong> 123 Main Street, Cityville, Country
      </p>
      <p className="contact-info">
        <strong>Phone:</strong> +1 (800) 123-4567
      </p>
      <p className="contact-info">
        <strong>Email:</strong> info@eduforinstitute.com
      </p>

      <h3 className="contact-subheading">Send us a message:</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name:
          </label>
          <input type="text" className="form-control" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email:
          </label>
          <input type="email" className="form-control" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message:
          </label>
          <textarea
            className="form-control"
            id="message"
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          {formStatus}
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
