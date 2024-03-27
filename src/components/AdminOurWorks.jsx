import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminOurWorks.css";
import AdminHome from "./AdminHome";

const AdminOurWorks = () => {
    const [ourWorks, setOurWorks] = useState({});
    const [title, setTitle] = useState("");
    const [picture1, setPicture1] = useState("");
    const [picture2, setPicture2] = useState("");
    const [picture3, setPicture3] = useState("");
    const [picture4, setPicture4] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetchOurWorks();
    }, []);

    const fetchOurWorks = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/ourworks");
            const { title, picture1, picture2, picture3, picture4 } = response.data[0]; // Assuming there's only one record in the database
            setTitle(title);
            setPicture1(picture1);
            setPicture2(picture2);
            setPicture3(picture3);
            setPicture4(picture4);
        } catch (error) {
            console.error("Error fetching our works:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put("http://localhost:5000/api/ourworks", {
                title,
                picture1,
                picture2,
                picture3,
                picture4
            });
            setMessage(response.data.message);
        } catch (error) {
            console.error("Error updating our works:", error);
            setMessage("An error occurred while updating our works");
        }
    };

    return (
        <div className="admin-our-works">
            <AdminHome/>
            <h2>Update Our Works</h2>
            {message && <div className="admin-our-works__message">{message}</div>}
            <form onSubmit={handleSubmit} className="admin-our-works__form">
                <div>
                    <label className="admin-our-works__label">Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="admin-our-works__input"
                    />
                </div>
                <div>
                    <label className="admin-our-works__label">Picture 1:</label>
                    <input
                        type="text"
                        value={picture1}
                        onChange={(e) => setPicture1(e.target.value)}
                        className="admin-our-works__input"
                    />
                </div>
                <div>
                    <label className="admin-our-works__label">Picture 2:</label>
                    <input
                        type="text"
                        value={picture2}
                        onChange={(e) => setPicture2(e.target.value)}
                        className="admin-our-works__input"
                    />
                </div>
                <div>
                    <label className="admin-our-works__label">Picture 3:</label>
                    <input
                        type="text"
                        value={picture3}
                        onChange={(e) => setPicture3(e.target.value)}
                        className="admin-our-works__input"
                    />
                </div>
                <div>
                    <label className="admin-our-works__label">Picture 4:</label>
                    <input
                        type="text"
                        value={picture4}
                        onChange={(e) => setPicture4(e.target.value)}
                        className="admin-our-works__input"
                    />
                </div>
                <button type="submit" className="admin-our-works__button">Update</button>
            </form>
        </div>
    );
};

export default AdminOurWorks;
