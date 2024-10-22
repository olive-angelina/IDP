import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useSelector } from "react-redux";
import axios from "axios";
import ErrorPage from "./ErrorPage";

const Signup = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();
  const [Values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setValues({ ...Values, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "http://localhost:1000/api/v1/sign-up",
        Values
      );
      navigate("/login");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <ErrorPage />
      ) : (
        <div className="h-screen bg-gradient-to-r from-yellow-300 via-blue-300 to-pink-300 flex items-center justify-center">
          <ToastContainer position="top-center" draggable />
          <div className="w-4/6 md:w-3/6 lg:w-2/6 flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
            <Link to="/" className="text-2xl font-bold text-center text-gray-800 dark:text-white">
              PODCASTER
            </Link>
            <div className="mt-6 w-full">
              <div className="w-full flex flex-col">
                <label htmlFor="username" className="font-semibold text-gray-700 dark:text-gray-300">Username</label>
                <input
                  type="text"
                  className="mt-2 px-4 py-2 rounded border border-gray-300 dark:border-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                  placeholder="Username"
                  name="username"
                  value={Values.username}
                  onChange={change}
                />
              </div>
              <div className="w-full flex flex-col mt-2">
                <label htmlFor="email" className="font-semibold text-gray-700 dark:text-gray-300">Email</label>
                <input
                  type="email"
                  className="mt-2 px-4 py-2 rounded border border-gray-300 dark:border-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                  placeholder="Email"
                  name="email"
                  value={Values.email}
                  onChange={change}
                />
              </div>
              <div className="w-full flex flex-col mt-2">
                <label htmlFor="password" className="font-semibold text-gray-700 dark:text-gray-300">Password</label>
                <input
                  type="password"
                  className="mt-2 px-4 py-2 rounded border border-gray-300 dark:border-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                  placeholder="Password"
                  name="password"
                  value={Values.password}
                  onChange={change}
                />
              </div>
              <div className="w-full flex flex-col mt-4">
                <button
                  className="bg-gradient-to-r from-green-400 to-yellow-500 text-white font-semibold text-xl rounded py-2 hover:from-green-300 hover:to-yellow-400 transition-all duration-300"
                  onClick={handleSubmit}
                >
                  Signup
                </button>
              </div>
              <div className="w-full flex flex-col mt-4">
                <p className="text-center text-gray-700 dark:text-gray-300">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-semibold text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Signup;
