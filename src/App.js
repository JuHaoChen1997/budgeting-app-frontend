import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";

//import Restful Routes
import Home from "./Pages/Home";
import Index from "./Pages/Index";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transactions" element={<Index />} />
      </Routes>
    </div>
  );
}

export default App;
