import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../Components/imgs/meat.png";
const NavBar = () => {
  return (
    <div>
      <div className="nav">
        <Link to={"/"}>
          <img  src={logo} alt="" />
        </Link>

        <div class="dropdown">
          <button
            class="btn dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Bengaluru
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a class="dropdown-item" href="#">
                Kerala
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Karnataka
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Kozhikode
              </a>
            </li>
          </ul>
        </div>

        <div>
          <span>
            <input
              placeholder="Search For Any Delicious Product  "
              type="text"
            />
          </span>
        </div>
        <div className="nav1">
          <Link className="lInk" to={"/"}>
            <span>Categories</span>
          </Link>
          <Link className="lInk" to={"/Login"}>
            <span> login</span>
          </Link>
          <Link className="lInk" to={"/Cart"}>
            <span> Cart</span>
          </Link>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default NavBar;
