import React, { useRef } from "react";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";

function App() {
  // Tạo một ref để tham chiếu đến phần Content
  const contentRef = useRef(null);

  // Hàm cuộn đến phần Content
  const scrollToContent = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Header Section */}
      <Header scrollToContent={scrollToContent} />

      {/* Content Section */}
      <div ref={contentRef}>
        <Content />
      </div>

      <Footer />
    </div>
  );
}

export default App;