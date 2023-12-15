import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Form from "./components/form/Form";
import Navbar from "./components/navbar/Navbar";
import GeneratedDesign from "./components/design/GeneratedDesign";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/response" element={<GeneratedDesign />} />
      </Routes>
    </Router>
  );
}

export default App;
