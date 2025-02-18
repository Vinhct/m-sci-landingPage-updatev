import './App.css';
import Content from './Components/Content';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Header />} />
        <Route path="/content" element={<Content />} />
      </Routes>
    </Router>
  );
}

export default App;