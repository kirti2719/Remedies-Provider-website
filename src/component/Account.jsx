import React, { useState, useEffect } from 'react';
import './Account.css';

const Account = ({ onLogout }) => {
  const username = localStorage.getItem('username');
  const [profileDetails, setProfileDetails] = useState({
    name: '',
    email: username,
    address: ''
  });

  useEffect(() => {
    // Load profile details from localStorage if available
    const savedProfile = JSON.parse(localStorage.getItem('profileDetails'));
    if (savedProfile) {
      setProfileDetails(savedProfile);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save profile details to localStorage
    localStorage.setItem('profileDetails', JSON.stringify(profileDetails));
    alert('Profile updated successfully');
  };

  return (
    <div className="account-container">
      <div className="account-details">
        <h2>Profile Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={profileDetails.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={profileDetails.email}
              readOnly
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={profileDetails.address}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="save-button">Save</button>
        </form>
        <button onClick={onLogout} className="logout-button">Logout</button>
      </div>
    </div>
  );
};

export default Account;