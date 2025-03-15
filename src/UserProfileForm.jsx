import React, { useState } from "react";
import { Button } from "@mui/material";
import "./UserProfile.css";

export default function UserProfileForm() {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        address: "",
        contact: "",
        employment_status: "",
        income_range: "",
        housing_type: "",
        gross_income: "",
        stocks: "",
        crypto: "",
        reference: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(formData, null, 2));
    };

    return (
        <form onSubmit={handleSubmit} className="profile-form">
            <h2 className="form-title">Sign Up</h2>
            <div className="form-grid">
                {Object.keys(formData).map(key => (
                    <div className="form-group" key={key}>
                        <label htmlFor={key}>{key.replace("_", " ")}:</label>
                        {["employment_status", "income_range", "housing_type"].includes(key) ? (
                            <select id={key} name={key} value={formData[key]} onChange={handleChange} required>
                                {key === "employment_status" && <>
                                    <option value="">Select Employment Status</option>
                                    <option value="employed">Employed</option>
                                    <option value="unemployed">Unemployed</option>
                                    <option value="self-employed">Self-Employed</option>
                                </>}
                                {key === "income_range" && <>
                                    <option value="">Select Income Range</option>
                                    <option value="0-30k">0 - 30k</option>
                                    <option value="30k-60k">30k - 60k</option>
                                    <option value="60k-80k">60k - 80k</option>
                                    <option value="80k+">80k+</option>
                                </>}
                                {key === "housing_type" && <>
                                    <option value="">Select Housing Type</option>
                                    <option value="own">Own</option>
                                    <option value="rent">Rent</option>
                                    <option value="other">Other</option>
                                </>}
                            </select>
                        ) : (
                            <input
                                type={["gross_income", "stocks", "crypto"].includes(key) ? "number" : "text"}
                                id={key}
                                name={key}
                                value={formData[key]}
                                onChange={handleChange}
                                required
                            />
                        )}
                    </div>
                ))}
            </div>
            <Button type="submit" className="submit-button">Submit</Button>
        </form>
    );
}
