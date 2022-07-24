import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Checkout from "./Checkout";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<p> login</p>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
