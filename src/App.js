import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import Weather from "./pages/Weather";
import Calculator from "./pages/Calculator";

function App() {
  const [isloggedIn, setisloggedIn] = useState(false);
  return (
    <div className="">
      <Navbar isloggedIn={isloggedIn} setisloggedIn={setisloggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/calculator" element={<Calculator />} />

        <Route
          path="/login"
          element={<Login setisloggedIn={setisloggedIn} />}
        />
        <Route
          path="/signup"
          element={<SignUp setisloggedIn={setisloggedIn} />}
        />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
