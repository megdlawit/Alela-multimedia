import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminHero.css"; 
import AdminHome from "./AdminHome";

const AdminHero = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [tagline, setTagline] = useState("");
  const [message, setMessage] = useState("");
  
  useEffect(() => {
    fetchHero();
  }, []);

  const fetchHero = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/hero");
      const hero = response.data;
      if (hero) {
        setImageUrl(hero.imageUrl);
        setTagline(hero.tagline);
      }
    } catch (error) {
      console.error("Error fetching hero:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put("http://localhost:5000/api/hero", { imageUrl, tagline }); 
      setMessage(response.data.message);
    } catch (error) {
      console.error("Error updating hero:", error);
      setMessage("An error occurred while updating hero details");
    }
  };

  return (
    <div>
    <AdminHome/>
    <div className="AdminHeroContainer">

      <h2>Update Hero Details</h2>
      {message && <div className="message">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label>Image URL:</label>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <div className="formGroup">
          <label>Tagline:</label>
          <input
            type="text"
            value={tagline}
            onChange={(e) => setTagline(e.target.value)}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
    </div>
  );
};

export default AdminHero;
