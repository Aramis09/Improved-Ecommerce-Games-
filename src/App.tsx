import "./App.css";
import Navbar from "./components/navbar/navbar";
import ShoopingCart from "./components/shoopingCart/shoopingCart";
import useLoaderManage from "./customHooks/useLoader";
import Catalogue from "./pages/catalogue/catalogue";
import GameDetail from "./pages/gameDetail/gameDetail";
import Home from "./pages/home/home";
import { Routes, Route } from "react-router-dom";
import Wish from "./pages/wish/wish";
import Friends from "./pages/friends/friends";
import Checkout from "./pages/checkout/checkout";
function App() {
  const { LoaderAllViewport } = useLoaderManage({
    turnOnAllPage: true,
  });

  return (
    <div className="App">
      <Navbar />
      {LoaderAllViewport}
      <ShoopingCart />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/moregames" element={<Catalogue />} />
        <Route path="/games/:id" element={<GameDetail />} />
        <Route path="/wish" element={<Wish />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
