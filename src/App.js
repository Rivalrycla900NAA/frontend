import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage"; // ✅ Import your homepage
import BackgroundCheckForm from "./pages/BackgroundCheckForm";

function App() {
  return (
    <Router>
      <NavBar>
        <Brand to="/">Charity Pulse</Brand> {/* ✅ Moved to left */}
        <NavLinks>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/verify">Verify</NavLink>

        </NavLinks>
      </NavBar>

      <Routes>
        <Route path="/" element={<HomePage />} /> {/* ✅ Default route */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/verify" element={<BackgroundCheckForm />} />
      </Routes>
    </Router>
  );
}

export default App;

// ✅ Styled Components
const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #222;
  padding: 1rem;
`;

const Brand = styled(Link)`
  color: white;
  font-size: 22px;
  font-weight: bold;
  text-decoration: none;
  margin-left: 20px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }
`;
