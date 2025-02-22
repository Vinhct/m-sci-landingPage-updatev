import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1><strong>Bản Cập Nhật 1.1</strong></h1>
        <p>Hệ Thống Hòm Tiếp Tế X-Force</p>
        <button className="cta-button" onClick={handleScrollDown}>Khám Phá Ngay</button>
      </div>
    </header>
  );
};

const handleScrollDown = () => {
  window.scrollBy({
    top: window.innerHeight, // Cuộn xuống 1 màn hình (100vh)
    behavior: "smooth", // Cuộn mượt
  });
};

export default Header;