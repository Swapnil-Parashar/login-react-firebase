// src/LandingPage.js
import React from "react";

const LandingPage = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
  };

  return (
    <div style={containerStyle}>
      <h1>Welcome to Our Website</h1>
      <p>Sign up or log in to get started!</p>
    </div>
  );
};

export default LandingPage;
