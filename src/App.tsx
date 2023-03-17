import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

// Page
import Home from "./pages/Home";
import Info from "./pages/Info";

// Component
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <div className="container-fluid">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<Info />} />
          </Routes>
        </Router>
      </div>

      <Footer />
    </div>
  );
}

export default App;
