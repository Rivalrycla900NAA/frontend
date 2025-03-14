import React, { useState } from "react";
import { Card, CardContent, Button } from "@mui/material";
import { UploadCloud } from "lucide-react";
import "./UserProfile.css";
export default function UserProfile() {
    const [donations, setDonations] = useState([
        { id: 1, name: "Winter Jackets", image: "/donation1.jpg" },
        { id: 2, name: "School Supplies", image: "/donation2.jpg" },
    ]);

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

    const handleUpload = () => {
        const newDonation = { id: donations.length + 1, name: "New Donation", image: "/placeholder.jpg" };
        setDonations([...donations, newDonation]);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        alert(JSON.stringify(formData, null, 2));
    };

    return (
        <div className="max-w-3xl mx-auto p-6">
            <div className="flex items-center gap-4 mb-6">
                <img src="/profile.png" alt="User " className="w-16 h-16 rounded-full border" />
                <h1 className="text-2xl font-bold">John Doe</h1>
            </div>

            <form onSubmit={handleSubmit} className="profile-form">
                <h2>User Profile Form</h2>
                <div className="form-grid">
                    <div>
                        <label htmlFor="firstname">First Name:</label>
                        <input type="text" id="firstname" name="firstname" value={formData.firstname} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="lastname">Last Name:</label>
                        <input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="address">Address:</label>
                        <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="contact">Contact:</label>
                        <input type="tel" id="contact" name="contact" value={formData.contact} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="employment_status">Employment Status:</label>
                        <select id="employment_status" name="employment_status" value={formData.employment_status} onChange={handleChange} required>
                            <option value="employed">Employed</option>
                            <option value="unemployed">Unemployed</option>
                            <option value="self-employed">Self-Employed</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="income_range">Income Range:</label>
                        <select id="income_range" name="income_range" value={formData.income_range} onChange={handleChange} required>
                            <option value="0-30k">0 - 30k</option>
                            <option value="30k-60k">30k - 60k</option>
                            <option value="60k-80k">60k - 80k</option>
                            <option value="80k+">80k+</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="housing_type">Housing Type:</label>
                        <select id="housing_type" name="housing_type" value={formData.housing_type} onChange={handleChange} required>
                            <option value="own">Own</option>
                            <option value="rent">Rent</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="gross_income">Gross Income Last Year ($):</label>
                        <input type="number" id="gross_income" name="gross_income" value={formData.gross_income} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="stocks">Stocks Investment ($):</label>
                        <input type="number" id="stocks" name="stocks" value={formData.stocks} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="crypto">Crypto Investment ($):</label>
                        <input type="number" id="crypto" name="crypto" value={formData.crypto} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="reference">Reference:</label>
                        <input type="text" id="reference" name="reference" value={formData.reference} onChange={handleChange} required />
                    </div>
                </div>
                <Button type="submit">Submit</Button>
            </form>

            <Button onClick={handleUpload} className="mb-6 flex items-center gap-2">
                <UploadCloud size={16} /> Upload a Donation
            </Button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {donations.map((donation) => (
                    <Card key={donation.id} className="overflow-hidden">
                        <img src={donation.image} alt={donation.name} className="w-full h-40 object-cover" />
                        <CardContent className="p-4">
                            <h2 className="text-lg font-semibold">{donation.name}</h2>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}