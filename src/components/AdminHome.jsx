import React from "react";
import { AppBar, Toolbar, Typography, Container, Drawer, List, ListItem, ListItemText } from "@mui/material";
import "./AdminHome.css"; 
import { FaBarsStaggered } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const AdminHome = () => {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const handleSidebarItemClick = (page) => {
        navigate(`/Admin${page}`);
        setOpen(false); // Close sidebar after navigation
    };

    return (
        <div className="admin-container">
            <Container className="main-content">
                <div onClick={toggleDrawer}>
                    <FaBarsStaggered />
                </div>
                {/* Add main content here */}
            </Container>

            {/* App Bar */}
            <AppBar position="static" className="app-bar">
                <Toolbar>
                    <Typography variant="h6" className="app-bar-title">Admin Dashboard</Typography>
                </Toolbar>
            </AppBar>

            {/* Sidebar */}
            <Drawer open={open} onClose={toggleDrawer}>
                <List className="sidebar">
                    
                    <ListItem button className="sidebar-item" onClick={() => handleSidebarItemClick("Hero")}>
                        <ListItemText primary="Hero" />
                    </ListItem>
                    <ListItem button className="sidebar-item" onClick={() => handleSidebarItemClick("Status")}>
                        <ListItemText primary="Status" />
                    </ListItem>
                    <ListItem button className="sidebar-item" onClick={() => handleSidebarItemClick("Service")}>
                        <ListItemText primary="Service" />
                    </ListItem>
                    <ListItem button className="sidebar-item" onClick={() => handleSidebarItemClick("OurWorks")}>
                        <ListItemText primary="Our works" />
                    </ListItem>
                    <ListItem button className="sidebar-item" onClick={() => handleSidebarItemClick("Testimonial")}>
                        <ListItemText primary="Testimonial" />
                    </ListItem>
                    <ListItem button className="sidebar-item" onClick={() => handleSidebarItemClick("Clients")}>
                        <ListItemText primary="Clients" />
                    </ListItem>
                    
                  
                </List>
            </Drawer>
            {/* Main content */}
        </div>
    );
};

export default AdminHome;
