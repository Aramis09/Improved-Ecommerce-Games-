import "./App.css";
import Navbar from "./components/navbar/navbar";
import ShoopingCart from "./components/shoopingCart/shoopingCart";
import Catalogue from "./pages/catalogue/catalogue";
import GameDetail from "./pages/gameDetail/gameDetail";
import Home from "./pages/home/home";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <ShoopingCart />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/moregames" element={<Catalogue />} />
        <Route path="/games/:id" element={<GameDetail />} />
      </Routes>
    </div>
  );
}

export default App;
