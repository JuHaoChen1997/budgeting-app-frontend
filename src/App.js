import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";

//import Restful Routes
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transactions" element={<Index />} />
        <Route path="/transactions/new" element={<New />} />
        <Route path="/transactions/:index/edit" element={<Edit />} />
        <Route path="/transactions/:index" element={<Show />} />
      </Routes>
    </div>
  );
}

export default App;
