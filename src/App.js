import logo from './logo.svg';
import './App.css';
import HomePage from './pages/Home/HomePage';
import ContactPage from './pages/ContactPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './Header/NavBar';



function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
