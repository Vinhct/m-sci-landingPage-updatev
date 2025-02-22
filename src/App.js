import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Content from './Components/Content';

function App() {
  return (
    <div>
      <div className="app">
        <Navbar />
        <Header />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
