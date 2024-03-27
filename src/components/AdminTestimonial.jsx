// AdminTestimonial.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminHome from "./AdminHome";
import "./AdminTestimonial.css";

const AdminTestimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [newTestimonial, setNewTestimonial] = useState({
    image: "",
    name: "",
    role: "",
    description: ""
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/testimonials");
      setTestimonials(response.data);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTestimonial({ ...newTestimonial, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/testimonials", newTestimonial);
      setMessage(response.data.message);
      setNewTestimonial({
        image: "",
        name: "",
        role: "",
        description: ""
      });
      fetchTestimonials();
    } catch (error) {
      console.error("Error creating testimonial:", error);
      setMessage("An error occurred while creating testimonial");
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/testimonials/${id}`);
      setMessage(response.data.message);
      fetchTestimonials();
    } catch (error) {
      console.error("Error deleting testimonial:", error);
      setMessage("An error occurred while deleting testimonial");
    }
  };

  return (
    <div>
    <AdminHome />
    <div className="admin-testimonial-container">
  
      <h2>Create New Testimonial</h2>
      {message && <div className="message">{message}</div>}
      <form onSubmit={handleSubmit} className="testimonial-form">
        <div className="input-field">
          <label>Image:</label>
          <input
            type="text"
            name="image"
            value={newTestimonial.image}
            onChange={handleInputChange}
          />

        </div>
     
        <div className="input-field">
          <label> Name:</label>
          <input
            type="text"
            name="name"
            value={newTestimonial.name}
            onChange={handleInputChange}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div className="input-field" >
          <label> Role:</label>
          <input
            type="text"
            name="role"
            value={newTestimonial.role}
            onChange={handleInputChange}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div className="input-field">
          <label >Description:</label>
          <textarea
            name="description"
            value={newTestimonial.description}
            onChange={handleInputChange}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <button type="submit" className="submit-button">
          Create Testimonial
        </button>
      </form>

      <h2>Testimonials</h2>
      <ul className="testimonial-list">
        {testimonials.map((testimonial) => (
          <li key={testimonial._id} className="testimonial-item">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <div className="testimonial-details">
              <p><strong>Name:</strong> {testimonial.name}</p>
              <p><strong>Role:</strong> {testimonial.role}</p>
              <p><strong>Description:</strong> {testimonial.description}</p>
            </div>
            <button onClick={() => handleDelete(testimonial._id)} className="delete-button">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default AdminTestimonial;
