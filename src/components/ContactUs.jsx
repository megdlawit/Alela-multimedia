import React, { useState } from 'react';
import './ContactUs.css';
import Navbar from './Navbar';
import { Footer } from '.';
import Button from './Button';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Implement form submission logic here (e.g., send data to server)
    console.log('Form submitted:', formData);

    // Reset form after submission (optional)
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className=" contact bg-primary w-full overflow-hidden" >

    <div className="contact-us-container ">
    <Navbar />
      <div className="form-container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <Button/>
        </form>
      </div>
      <div className="map-container">
        <h2>Find Us</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31527.13535134059!2d38.74847824652011!3d8.982092318714457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b857576054613%3A0xc12626909a1dfd04!2sYemerou%20Senay%20BLDG.!5e0!3m2!1sen!2set!4v1711560715694!5m2!1sen!2set" 
          width="100%"
          height="400"
          allowFullScreen
          loading="lazy"
        ></iframe>
    
      </div>

    </div>
    <Footer />
        </div>
  );
};

export default ContactUs;
