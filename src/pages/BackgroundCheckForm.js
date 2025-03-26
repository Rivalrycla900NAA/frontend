import React, { useState } from 'react';
import axios from 'axios';

const BackgroundCheckForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    address: '',
    contact: '',
    employment_status: 'unemployed',
    income_range: '',
    housing_type: 'rent',
    stocks: '',
    crypto: '',
    gross_income_last_year: '',
    reference: ''
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const payload = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      address: formData.address,
      contact: formData.contact,
      employment_status: formData.employment_status,
      income_range: formData.income_range, // e.g. "60k-80k"
      housing_type: formData.housing_type,
      investment_accounts: {
        stocks: Number(formData.stocks || 0),
        crypto: Number(formData.crypto || 0),
      },
      gross_income_last_year: Number(formData.gross_income_last_year),
      reference: formData.reference,
    };
  
    try {
        const response = await axios.post(
            "/BackgroundCheckFunction",  // 👈 relative path, no domain
            payload,
            { headers: { "Content-Type": "application/json" } }
          ); //updated
          
      setResult(response.data.eligible);
    } catch (error) {
        if (error.response) {
          console.error("API Response Error:", error.response.data);
          alert("Server responded with an error: " + JSON.stringify(error.response.data));
        } else if (error.request) {
          console.error("No response from server:", error.request);
          alert("No response from server. Please check your network.");
        } else {
          console.error("Unexpected error:", error.message);
          alert("Unexpected error: " + error.message);
        }
        setResult("error");
      }
      
  };
  

  return (
    <div className="form-container">
      <h2>Background Check Form</h2>
      <form onSubmit={handleSubmit}>
        <input name="firstname" placeholder="First Name" onChange={handleChange} required />
        <input name="lastname" placeholder="Last Name" onChange={handleChange} required />
        <input name="address" placeholder="Address" onChange={handleChange} required />
        <input name="contact" placeholder="Contact" onChange={handleChange} required />

        <select name="employment_status" onChange={handleChange}>
          <option value="unemployed">Unemployed</option>
          <option value="employed">Employed</option>
        </select>

        <input name="income_range" placeholder="Income Range (e.g. 60k-80k)" onChange={handleChange} required />

        <select name="housing_type" onChange={handleChange}>
          <option value="rent">Rent</option>
          <option value="own">Own</option>
        </select>

        <input name="stocks" placeholder="Stock Investment Amount" onChange={handleChange} />
        <input name="crypto" placeholder="Crypto Investment Amount" onChange={handleChange} />
        <input name="gross_income_last_year" placeholder="Gross Income Last Year" onChange={handleChange} required />
        <input name="reference" placeholder="Reference Name" onChange={handleChange} required />

        <button type="submit">Submit</button>
      </form>

      {result === true && <p className="verified">✅ User is Verified</p>}
      {result === false && <p className="not-verified">❌ User is Not Verified</p>}
      {result === "error" && <p className="error">⚠️ Something went wrong. Try again.</p>}
    </div>
  );
};

export default BackgroundCheckForm;
