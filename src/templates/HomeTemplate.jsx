import React, { Component } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default class HomeTemplate extends Component {
  render() {
    return (
      <div>
        <header className="bg-dark text-white p-2 nav">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link bg-white text-dark" : "nav-link"
            }
            to="/home"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link bg-white text-dark" : "nav-link"
            }
            to="/register"
          >
            Register
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link bg-white text-dark" : "nav-link"
            }
            to="/login"
          >
            Login
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link bg-white text-dark" : "nav-link"
            }
            to="/btgiohang"
          >
            <i className="fa fa-cart-plus"></i> BT cart
          </NavLink>
          <NavLink className={({ isActive }) =>
            isActive ? "nav-link bg-white text-dark" : "nav-link"
          } to="/form" >
            Form
          </NavLink>
          <NavLink className={({ isActive }) =>
            isActive ? "nav-link bg-white text-dark" : "nav-link"
          } to="/reactlifecycle" >
            Lifecycle
          </NavLink>
          <NavLink className={({ isActive }) =>
            isActive ? "nav-link bg-white text-dark" : "nav-link"
          } to="/demoredux" >
            demoredux
          </NavLink>
          <NavLink className={({ isActive }) => isActive ? "nav-link bg-white text-dark" : "nav-link"} to="/demogame" >
            demogame
          </NavLink>
          
        </header>
        <div className="content" style={{ minHeight: "75vh" }}>
          <Outlet></Outlet>
        </div>
        <footer className="bg-dark text-white p-5">Footer</footer>
      </div>
    );
  }
}
