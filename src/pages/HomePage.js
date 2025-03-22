import React, { useState } from "react";
import "../HomePage.css"; // ✅ Adjust path if needed

const HomePage = () => {
  const [donations] = useState([
    {
      id: 1,
      name: "Laptop Donation",
      image: "/laptop.jpg",
      description: "Used but working laptops for students."
    },
    {
      id: 2,
      name: "Winter Jackets",
      image: "/jackets.jpg",
      description: "Warm jackets for cold weather"
    }
  ]);

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
