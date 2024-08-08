import HomePage from './pages/Home/HomePage';
import ContactPage from './pages/ContactPage';
import About from './pages/About/About';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './Header/NavBar';







function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
