import React, { useContext } from "react";
import { DonationContext } from "../context/DonationContext";
import "../HomePage.css"; // Update path if you place CSS elsewhere

const HomePage = () => {
  const { donations } = useContext(DonationContext);

  return (
    <div className="homepage-container">
      <h1>Welcome to Charity Pulse</h1>
      <p>Find or donate essential items to those in need.</p>

      <div className="listing-grid">
        {donations.map((item) => (
          <div key={item.id} className="listing-card">
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

