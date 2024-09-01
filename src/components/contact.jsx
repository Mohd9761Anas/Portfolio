import React, { useState, forwardRef } from 'react';
import axios from 'axios';


const Contact = forwardRef((props,ref) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://formspree.io/f/mjkbgkar', formData);
      if (response.status === 200) {
        setResponseMessage('Message sent successfully!');
      } else {
        setResponseMessage('Failed to send message.');
      }
    } catch (error) {
      setResponseMessage('Failed to send message.');
    }
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact" ref={ref}>
        <div className="container d-flex flex-column align-items-center justify-content-center">
      <h1 className="mt-5">Get in Touch</h1>
      <form className="w-50 mt-4" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="email">Your Email Address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary mt-4">Send Message</button>
      </form>
      {responseMessage && <p className="mt-3">{responseMessage}</p>}
    </div>
    </div>
  );
});

export default Contact;
