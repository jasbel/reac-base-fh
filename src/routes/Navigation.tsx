import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
} from "react-router-dom";
import logo from "../logo.svg";
import CounterView from "../views/CounterView";

const Navigation = () => {
    return (
        <Router>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React logo" />
                    <ul>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "nav-active" : ""
                                }
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "nav-active" : ""
                                }
                                to="/about"
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "nav-active" : ""
                                }
                                to="/users"
                            >
                                Users
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
                <Routes>
                    <Route path="/about" element={<h1>about</h1>}></Route>
                    <Route path="/users" element={<h1>probando</h1>}></Route>
                    <Route path="/" element={<CounterView />}></Route>
                </Routes>
            </div>
        </Router>
    );
};

export default Navigation;
