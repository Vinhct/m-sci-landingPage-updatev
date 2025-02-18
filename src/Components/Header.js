import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-black text-white">
      <h1 id="logo" >
           <img src="https://m-sci.net/assets/logo_png-DSmZ2Y8K.png"></img>
      </h1>

      <div className="space-x-6 text-lg font-orbitron">
        <a href="#" className="hover:text-gray-400 transition duration-300 ease-in-out">Home</a>
        <a href="#" className="hover:text-gray-400 transition duration-300 ease-in-out">News</a>
        <a href="#" className="hover:text-gray-400 transition duration-300 ease-in-out">Contact</a>
      </div>

      <button className="relative inline-block px-8 py-4 font-bold text-white uppercase rounded-lg group overflow-hidden">
       {/* Gradient background */}
      <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -skew-x-12 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600 group-hover:skew-x-0"></span>
  
       {/* Outer glow */}
      <span className="absolute inset-0 w-full h-full border-4 border-blue-500 rounded-lg opacity-70 group-hover:opacity-100"></span>
  
       {/* Inner shadow */}
       <span className="absolute inset-0 w-full h-full shadow-[inset_0_0_10px_#00ffff,inset_0_0_20px_#ff00ff] opacity-50 group-hover:opacity-100"></span>
  
       {/* Button text */}
       <span className="relative z-10 skew-x-12">PLAY NOW</span>
      </button>

    </nav>
  );
};

const HeroSection = () => {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center text-white">
      {/* Background image with blur effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-sm"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dwkfguuob/image/upload/v1737426218/Product-images/xcdi95vv3axgf9adnesg.png')",
        }}
      ></div>

      {/* Overlay to darken the background */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

       {/* Image on top of the background */}
       <img
        src="https://image.api.playstation.com/vulcan/ap/rnd/202111/3013/bxSj4jO0KBqUgAbH3zuNjCje.jpg" // Thay bằng URL của ảnh bạn muốn thêm
        alt="Logo"
        className="relative z-20 w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-lg shadow-lg object-cover"
      />

      {/* Content on top of the background */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to New version update of M-SCI </h1>
        <p className="text-lg mb-8">Join us for an unforgettable experience!</p>
        <Link to={"/content"}>
        <button className="bg-blue-600 px-6 py-3 rounded hover:bg-blue-500 text-white font-semibold">
          GET STARTED
        </button>
        </Link>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default App;
