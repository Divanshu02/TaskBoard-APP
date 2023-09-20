import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignupForm = ({ setisloggedIn }) => {
  const navigate = useNavigate();
  const [error, setError] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const [showpassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  function changeHandler(e) {
    setFormData((obj) => {
      return { ...obj, [e.target.name]: e.target.value };
    });
  }

  function submitHandler(e) {
    e.preventDefault();

    // FirstName----------
    if (formData.firstname === "") {
      setError((obj) => {
        return { ...obj, firstname: "field can't be empty" };
      });
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }

    // Lastname----------

    if (formData.lastname === "") {
      setError((obj) => {
        return { ...obj, lastname: "field can't be empty" };
      });
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }

    // Email----------

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

    // password----------

    if (formData.password === "") {
      setError((obj) => {
        return { ...obj, password: "Password can't be empty" };
      });
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }

    if (formData.cpassword === "") {
      setError((obj) => {
        return { ...obj, cpassword: "Password can't be empty" };
      });
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }

    if (formData.password !== formData.cpassword) {
      setError((obj) => {
        return { ...obj, cpassword: "Entered passwords are not same" };
      });
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }

    toast.success("Account Created successfully");
    setisloggedIn(true);
    navigate("/dashboard");
    // console.log(formData);
  }

  return (
    <div className=" flex flex-col  h-[91vh]  justify-center items-center bg-black">
      <h1 className=" text-white text-5xl font-bold mb-10">Sign Up </h1>

      <form className=" flex flex-col gap-7" onSubmit={submitHandler}>
        <div className="flex justify-between gap-10">
          <div className="flex flex-col">
            <label className=" text-white  font-bold text-lg" htmlFor="fname">
              First Name<span className=" text-red-600">*</span>
            </label>
            <input
              type="text"
              id="fname"
              name="firstname"
              onChange={changeHandler}
              placeholder="Enter firstName"
              value={formData.firstname}
              className=" p-2 rounded-lg"
            ></input>
            <p className="text-red-600">{error.firstname}</p>
          </div>
          <div className="flex flex-col">
            <label className=" text-white  font-bold text-lg" htmlFor="lname">
              Last Name<span className=" text-red-600">*</span>
            </label>
            <input
              type="text"
              id="lname"
              name="lastname"
              onChange={changeHandler}
              placeholder="Enter LastName"
              value={formData.lastname}
              className=" p-2 rounded-lg"
            ></input>
            <p className="text-red-600">{error.lastname}</p>
          </div>
        </div>
        <div className="flex flex-col">
          <label className=" text-white  font-bold text-lg" htmlFor="email">
            Email Address<span className=" text-red-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={changeHandler}
            placeholder="Enter email address"
            value={formData.email}
            className=" p-2 rounded-lg"
          ></input>
          <p className="text-red-600">{error.email}</p>
        </div>
        <div className="flex justify-between">
          <div className=" relative flex flex-col">
            <label
              className=" text-white  font-bold text-lg"
              htmlFor="password"
            >
              Create Password<span className=" text-red-600">*</span>
            </label>
            <input
              type={showpassword ? "text" : "password"}
              id="password"
              name="password"
              onChange={changeHandler}
              placeholder="Enter Password"
              value={formData.password}
              className=" p-2 rounded-lg"
            ></input>
            <p className="text-red-600">{error.password}</p>
          </div>
          <div className="relative flex flex-col">
            <label
              className=" text-white  font-bold text-lg"
              htmlFor="cpassword"
            >
              Confirm Password<span className=" text-red-600">*</span>
            </label>
            <input
              type={showpassword ? "text" : "password"}
              id="cpassword"
              name="cpassword"
              onChange={changeHandler}
              placeholder="Confirm Password"
              value={formData.cpassword}
              className=" p-2 rounded-lg"
            ></input>
            <p className="text-red-600">{error.cpassword}</p>
            {showpassword ? (
              <AiOutlineEyeInvisible
                className=" text-black absolute top-10 right-4 text-xl cursor-pointer"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <div>
                {formData.cpassword.length > 1 ? (
                  <AiOutlineEye
                    className=" text-black absolute top-10 right-4 text-xl cursor-pointer"
                    onClick={() => setShowPassword(true)}
                  />
                ) : (
                  ""
                )}
              </div>
            )}
          </div>
        </div>
        <button className=" bg-yellow-400 p-3 text-lg rounded-lg hover:bg-yellow-600 active:text-gray-800 self-center">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
