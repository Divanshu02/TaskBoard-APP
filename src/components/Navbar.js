import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import { toast } from "react-toastify";

const Navbar = ({ isloggedIn, setisloggedIn }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-900">
      <div className="w-8/12 m-auto flex justify-between items-center flex-wrap   p-4   text-white">
        <div>
          <NavLink to={isloggedIn ? "/dashboard" : "/login"}>
            <img src={Logo} alt="logo" width={100} />
          </NavLink>
        </div>
        <div className="flex gap-4 flex-wrap">
          {/* <NavLink to="/">Home</NavLink> */}
          <NavLink to={isloggedIn ? "/dashboard" : "/login"}>TaskBoard</NavLink>
          <NavLink to={isloggedIn ? "/weather" : "/login"}>Weather</NavLink>
          <NavLink to={isloggedIn ? "/calculator" : "/login"}>
            Calculator
          </NavLink>
        </div>
        {isloggedIn ? (
          <div className="flex gap-4 flex-wrap">
            <button
              className="border-2  bg-gray-500 px-2 py-1 rounded-lg font-mono"
              onClick={() => {
                setisloggedIn(false);
                toast.success("Log Out successfully");
                navigate("/");
              }}
            >
              Log Out
            </button>
          </div>
        ) : (
          <div className="flex gap-4 flex-wrap">
            <button
              className="border-2  bg-gray-500 px-2 py-1 rounded-lg font-mono"
              onClick={() => navigate("/login")}
            >
              Log In
            </button>
            <button
              className="border-2  bg-gray-500 px-2 py-1 rounded-lg font-mono"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
