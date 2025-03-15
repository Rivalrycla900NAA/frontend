import React, { useState } from "react";
import { Card, CardContent, Button } from "@mui/material";
import { UploadCloud } from "lucide-react";
import "./UserProfile.css";
import UserProfileForm from './UserProfileForm'; // new component

export default function UserProfile() {
    const [activeSection, setActiveSection] = useState('profile');

    const sidebarOptions = ["Profile", "Donations", "Settings", "Logout"];

    const handleSidebarClick = (option) => {
        setActiveSection(option.toLowerCase());
    };

    return (
        <div className="user-profile-container">
            <aside className="sidebar">
                <ul>
                    {sidebarOptions.map(option => (
                        <li
                            key={option}
                            onClick={() => handleSidebarClick(option)}
                            className={activeSection === option.toLowerCase() ? 'active' : ''}
                        >
                            {option}
                        </li>
                    ))}
                    <button className="sidebar-signup-button" onClick={() => setActiveSection('signup')}>
                        Sign Up
                    </button>
                </ul>
            </aside>

            <div className="main-content">
                <div className="user-header">
                    <img src="/profile.png" alt="User" className="profile-image" />
                    <h1 className="user-name">John Doe</h1>
                </div>

                {activeSection === 'profile' && (
                    <div className="profile-section">
                        <h2 className="form-title">User Profile Form</h2>
                        {/* your existing profile form here */}
                    </div>
                )}

                {activeSection === 'donations' && (
                    <div className="donations-section">
                        <Button className="upload-button">
                            <UploadCloud size={16} /> Upload a Donation
                        </Button>
                        {/* Your donation cards go here */}
                    </div>
                )}

                {activeSection === 'settings' && (
                    <div className="settings-section">
                        <h2 className="form-title">Settings</h2>
                        <p>Settings content goes here.</p>
                    </div>
                )}

                {activeSection === 'logout' && (
                    <div className="logout-section">
                        <h2 className="form-title">Logout</h2>
                        <p>Are you sure you want to logout?</p>
                        <Button variant="contained">Logout</Button>
                    </div>
                )}

                {activeSection === 'signup' && <UserProfileForm />}
            </div>
        </div>
    );
}
