import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Nav/NavBar";
import Categories from "./Nav/Categories";
import Login from "./Nav/Login";
import Cart from "./Nav/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Categories />} />
          <Route path="Login" element={<Login />} />
          <Route path="Cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
