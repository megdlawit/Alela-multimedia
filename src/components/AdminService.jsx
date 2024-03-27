import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminService.css";
import AdminHome from "./AdminHome";

const AdminService = () => {
    const [services, setServices] = useState([]);
    const [selectedService, setSelectedService] = useState(null);
    const [newName, setNewName] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/services");
            setServices(response.data);
        } catch (error) {
            console.error("Error fetching services:", error);
        }
    };

    const handleUpdate = async () => {
        try {
            if (!selectedService) {
                setMessage("Please select a service to update");
                return;
            }
            if (!newName && !newDescription) {
                setMessage("Please provide either a new name or a new description");
                return;
            }
            await axios.put(`http://localhost:5000/api/services/${selectedService._id}`, {
                name: newName || selectedService.name,
                description: newDescription || selectedService.description
            });
            setMessage("Service updated successfully");
            // Fetch the updated service data after the update operation is completed
            fetchServices();
            // Clear input fields and selected service
            setNewName("");
            setNewDescription("");
            setSelectedService(null);
        } catch (error) {
            console.error("Error updating service:", error);
            setMessage("An error occurred while updating service. Please try again later.");
        }
    };

    return (
        <div>
            <AdminHome/>
            <div className="admin-service-container">
                <h2>Update Existing Service</h2>
                {message && <div className="service-message">{message}</div>}
                <div className="service-select">
                    <label>Select Service:</label>
                    <select onChange={(e) => setSelectedService(JSON.parse(e.target.value))}>
                        <option value="">--Select Service--</option>
                        {services.map((service) => (
                            <option key={service._id} value={JSON.stringify(service)}>
                                {service.name}
                            </option>
                        ))}
                    </select>
                </div>
                {selectedService && (
                    <form onSubmit={(e) => { e.preventDefault(); handleUpdate(); }}>
                        <div>
                            <label>Current Name:</label>
                            <input
                                type="text"
                                value={selectedService.name}
                                disabled
                            />
                        </div>
                        <div>
                            <label>Current Description:</label>
                            <textarea
                                value={selectedService.description}
                                disabled
                            />
                        </div>
                        <div>
                            <label>New Name:</label>
                            <input
                                type="text"
                                value={newName}
                                onChange={(e) => setNewName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>New Description:</label>
                            <textarea
                                value={newDescription}
                                onChange={(e) => setNewDescription(e.target.value)}
                            />
                        </div>
                        <button type="submit">Update</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default AdminService;
