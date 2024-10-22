import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [MobileNav, setMobileNav] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Categories",
      path: "/categories",
    },
    {
      name: "All Podcasts",
      path: "/all-podcasts",
    },
  ];

  const closeMobileNav = () => setMobileNav(false);
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className="px-4 md:px-8 lg:px-12 py-2 relative z-[1]">
      <div className="flex items-center justify-between">
        <div className="logo brand-name w-2/6 flex items-center gap-4">
          <img
            src="https://cdn-icons-png.flaticon.com/128/9043/9043096.png"
            alt="podcaster"
            className="h-12"
          />
          <Link to="/" className="text-2xl font-bold">
            Podcaster
          </Link>
        </div>

        {/* Nav Links for Desktop */}
        <div className="hidden w-2/6 lg:flex items-center justify-center">
          {navLinks.map((items, i) => (
            <Link
              key={i}
              to={items.path}
              className="ms-4 hover:font-semibold transition-all duration-300"
            >
              {items.name}
            </Link>
          ))}
        </div>

        {/* Login/Signup/Profile Links */}
        <div className="hidden w-2/6 lg:flex items-center justify-end">
          {!isLoggedIn && (
            <>
              <Link
                to="/login"
                className="px-6 py-3 border border-black dark:border-white rounded-full"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="ms-4 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full"
              >
                Signup
              </Link>
            </>
          )}
          {isLoggedIn && (
            <Link
              to="/profile"
              className="ms-4 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full"
            >
              Profile
            </Link>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className="w-4/6 flex items-center justify-end lg:hidden z-[2]">
          <button
            className={`text-4xl ${
              MobileNav ? "rotate-360" : " rotate-180"
            } transition-all duration-300`}
            onClick={() => setMobileNav(!MobileNav)}
          >
            {MobileNav ? <RxCross2 /> : <IoReorderThreeOutline />}
          </button>
        </div>

        {/* Theme Toggle Button */}
        <div className="ml-4">
          <button
            onClick={toggleTheme}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full"
          >
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-blue-100 dark:bg-gray-900 lg:hidden ${
          MobileNav ? "translate-y-0" : "translate-y-[-100%] hidden"
        } transition-transform duration-500 ease-in-out `}
      >
        <div className="h-full flex flex-col items-center justify-center">
          {navLinks.map((items, i) => (
            <Link
              key={i}
              to={items.path}
              className="mb-12 text-3xl hover:font-semibold transition-all duration-300"
              onClick={closeMobileNav}
            >
              {items.name}
            </Link>
          ))}
          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                className="mb-12 text-3xl hover:font-semibold transition-all duration-300"
                onClick={closeMobileNav}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="mb-12 text-3xl hover:font-semibold transition-all duration-300"
                onClick={closeMobileNav}
              >
                Signup
              </Link>
            </>
          ) : (
            <Link
              to="/profile"
              className="mb-12 text-3xl hover:font-semibold transition-all duration-300"
              onClick={closeMobileNav}
            >
              Profile
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
