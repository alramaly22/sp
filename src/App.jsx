import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router components
import SignUp from './pages/SignUp';
import HomePage from './pages/HomePage';
import WelcomePage from './pages/WelcomePage';
import CustomNavbar from './components/CustomNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <div>
        {/* Navbar displayed on all pages */}
        <CustomNavbar />

        {/* Define the routes */}
        <Routes>
          <Route path="/" element={<WelcomePage />} /> {/* Welcome Page route */}
          <Route path="/homepage" element={<HomePage />} /> {/* Home Page route */}
          <Route path="/signup" element={<SignUp />} /> {/* Sign-Up Page route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
