import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import logo from "../logo.svg";
import CounterView from "../views/CounterView";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React logo" />
          <ul>
            <li>
              <NavLink className={({ isActive }) => isActive ? "nav-active" : "" } to="/lazy1" >
                lazy1
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ? "nav-active" : "" } to="/lazy2" >
                lazy2
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ? "nav-active" : "" } to="/lazy3" >
                lazy3
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/lazy1" element={<LazyPage1 />}></Route>
          <Route path="/lazy2" element={<LazyPage2 />}></Route>
          <Route path="/lazy3" element={<LazyPage3 />}></Route>
          <Route path="/counter" element={<CounterView />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default Navigation;
