import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminStatus.css";
import AdminHome from "./AdminHome";

const AdminStatus = () => {
  const [numberOfCustomers, setNumberOfCustomers] = useState(0);
  const [numberOfPartnerCompanies, setNumberOfPartnerCompanies] = useState(0);
  const [numberOfEvents, setNumberOfEvents] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchStatus();
  }, []);

  const fetchStatus = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/status");
      const status = response.data;
      setNumberOfCustomers(status.numberOfCustomers);
      setNumberOfPartnerCompanies(status.numberOfPartnerCompanies);
      setNumberOfEvents(status.numberOfEvents);
    } catch (error) {
      console.error("Error fetching status:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put("http://localhost:5000/api/status", {
        numberOfCustomers,
        numberOfPartnerCompanies,
        numberOfEvents
      });
      setMessage(response.data.message);
    } catch (error) {
      console.error("Error updating status:", error);
      setMessage("An error occurred while updating status");
    }
  };

  return (
    <div>
        <AdminHome />
    <div className="admin-status-container">
      <h2>Update Status</h2>
      {message && <div className="message">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Number of Customers:</label>
          <input
            type="number"
            value={numberOfCustomers}
            onChange={(e) => setNumberOfCustomers(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Number of Partner Companies:</label>
          <input
            type="number"
            value={numberOfPartnerCompanies}
            onChange={(e) => setNumberOfPartnerCompanies(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Number of Events:</label>
          <input
            type="number"
            value={numberOfEvents}
            onChange={(e) => setNumberOfEvents(e.target.value)}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
    </div>
  );
};

export default AdminStatus;
