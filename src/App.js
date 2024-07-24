// src/App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import LandingPage from "./pages/LandingPage";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser)
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      alert("Signed out successfully");
    } catch (error) {
      console.error("Error signing out: ", error);
      alert("Error signing out");
    }
  };

  const navStyle = {
    display: "flex",
    justifyContent: "center",
    listStyleType: "none",
    padding: "10px",
  };

  const linkStyle = {
    margin: "0 10px",
    textDecoration: "none",
    color: "blue",
    fontSize: "18px",
  };

  return (
    <Router>
      <nav>
        <ul style={navStyle}>
          <li>
            <Link to="/" style={linkStyle}>
              Home
            </Link>
          </li>
          {user ? (
            <>
            <li>{user.email}</li>
            <li>
              <button onClick={handleSignOut} style={linkStyle}>
                Sign Out
              </button>
            </li></>
          ) : (
            <>
              <li>
                <Link to="/login" style={linkStyle}>
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" style={linkStyle}>
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
