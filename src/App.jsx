import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import AuthLayout from "./layout/AuthLayout";
import Signup from "./pages/Signup";
import Login from "./pages/Login.jsx";
import Categories from "./pages/Categories.jsx";
import Profile from "./pages/Profile.jsx";
import { useDispatch } from "react-redux";
import { authActions } from "./store/auth.js";
import AddPodcast from "./pages/AddPodcast.jsx";
import AllPodcasts from "./pages/AllPodcasts.jsx";
import CategoriesPage from "./pages/CategoriesPage.jsx";
import DescriptionPage from "./pages/DescriptionPage.jsx";
import axios from "axios";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch authentication status
    const fetchAuthStatus = async () => {
      try {
        const res = await axios.get(
          "http://localhost:1000/api/v1/check-cookie",
          { withCredentials: true }
        );
        if (res.data.message === true) {
          dispatch(authActions.login());
        }
      } catch (error) {
        // Handle error here if needed
      }
    };
    fetchAuthStatus();

    // Apply saved theme from localStorage on mount
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <Router>
        <Routes>
          {/* Main layout and routes */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="categories" element={<Categories />} />
            <Route path="profile" element={<Profile />} />
            <Route path="add-podcast" element={<AddPodcast />} />
            <Route path="all-podcasts" element={<AllPodcasts />} />
            <Route path="categories/:cat" element={<CategoriesPage />} />
            <Route path="description/:id" element={<DescriptionPage />} />
          </Route>

          {/* Auth layout and routes */}
          <Route path="/" element={<AuthLayout />}>
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
