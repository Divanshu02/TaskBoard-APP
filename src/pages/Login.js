import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginForm = ({ setisloggedIn }) => {
  const navigate = useNavigate();
  const [error, setError] = useState({
    email: "",
    password: "",
  });

  // FormData
  const [showpassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // console.log(error);

  function changeHandler(e) {
    setFormData((obj) => {
      return { ...obj, [e.target.name]: e.target.value };
    });
  }

  function submitHandler(e) {
    e.preventDefault();

    // Form validation------------------------------

    if (formData.email === "") {
      setError((obj) => {
        return { ...obj, email: "Email can't be empty" };
      });
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }

    var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (!regex.test(formData.email)) {
      setError((obj) => {
        return { ...obj, email: "Email not valid" };
      });

      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }

    if (formData.password === "") {
      setError((obj) => {
        return { ...obj, password: "Password can't be empty" };
      });
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }

    toast.success("Logged in successfully");
    setisloggedIn(true);
    navigate("/dashboard");
    // console.log(formData);
  }

  return (
    <div className=" flex flex-col bg-black justify-center items-center gap-10  h-screen ">
      <h1 className=" text-white text-5xl font-bold">Log In !</h1>
      <form
        className="  flex flex-col justify-center items-center gap-8"
        onSubmit={submitHandler}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-white">
            Email Address<span className=" text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email address"
            className="p-2 text-lg rounded-sm w-96"
            onChange={changeHandler}
          ></input>
          <p className="text-red-600">{error.email}</p>
        </div>
        <div className="relative flex flex-col gap-2">
          <label htmlFor="password" className="text-white">
            {" "}
            Password<span className=" text-red-500">*</span>
          </label>
          <input
            type={showpassword ? "text" : "password"}
            id="password"
            name="password"
            placeholder="Enter password"
            className="p-2 text-lg rounded-sm w-96"
            onChange={changeHandler}
          ></input>
          {showpassword ? (
            <AiOutlineEyeInvisible
              className=" text-black absolute top-11 right-4 text-xl cursor-pointer"
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <div>
              {formData.password.length > 1 ? (
                <AiOutlineEye
                  className=" text-black absolute top-11 right-4 text-xl cursor-pointer"
                  onClick={() => setShowPassword(true)}
                />
              ) : (
                ""
              )}
            </div>
          )}
          <p className="text-red-600">{error.password}</p>
        </div>
        <button className=" bg-yellow-400 p-3 text-lg rounded-lg hover:bg-yellow-600 active:text-gray-800 w-36">
          Log in
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
