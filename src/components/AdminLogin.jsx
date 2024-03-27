import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
import "./Adminlogin.css";

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMessage, setErrMessage] = useState("");
    const nav = useNavigate();

    function Login(e) {
        e.preventDefault();

        axios.post("http://localhost:5000/api/admin/login", { email, password })
            .then((res) => {
                console.log(res.data);
                if (res.data.status === 401) {
                    setErrMessage(res.data.message);
                } else {
                    nav("/AdminHome");
                }
            })
            .catch((error) => {
                console.error('Login failed:', error);
                if (error.response && error.response.data) {
                    setErrMessage(error.response.data.message);
                } else {
                    setErrMessage("An unexpected error occurred.");
                }
            });
    }

    return (
        <div className="container-fluid h-100">
            <div className="row justify-content-center align-items-center h-100">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Admin Login</h2>
                            {errMessage && <div className="alert alert-danger" role="alert">{errMessage}</div>}
                            <form >
                                <div className="form-group">
                                    <label htmlFor="username">Email</label>
                                    <input
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        type="password"
                                        className="form-control"
                                        placeholder="Enter your password"
                                        required
                                    />
                                </div>
                                <button onClick={Login} className="btn btn-primary btn-block">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
