import React from 'react';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://m-sci.net/assets/logo_png-DSmZ2Y8K.png" alt="X-Force Logo" />
      </div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#contact">Contact</a>
        <a href="#more">More</a>
      </div>
      <button className="cta-button">Play Now</button>
    </nav>
  );
};

export default Navbar;