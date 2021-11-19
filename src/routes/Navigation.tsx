import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import logo from "../logo.svg";
import CounterView from "../views/CounterView";
import { routes } from "./routes";
import {LazyPage1} from '../01-lazyload/pages';
import { Suspense } from "react";

const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>} >

    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React logo" />
          <ul>
            {routes.map((route)=> {
              return(<li key={route.path}>
                <NavLink className={({ isActive }) => isActive ? "nav-active" : "" } to={route.path} >
                  {route.name}
                </NavLink>
              </li>)
            })}
          </ul>
        </nav>

        <Routes>
          {routes.map((route)=> {
            return(<Route key={route.path} path={route.path} element={<route.component />}></Route>)
          })}
          <Route path="/counter" element={<CounterView />}></Route>
          <Route path="*" element={<LazyPage1 />} />
        </Routes>
      </div>
    </Router>
    </Suspense>
  );
};

export default Navigation;
