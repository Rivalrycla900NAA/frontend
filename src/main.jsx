import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserProfile from './user-profile-page.jsx';
import UserProfileForm from './UserProfileForm.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserProfile />} />
        <Route path="/profile-form" element={<UserProfileForm />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
