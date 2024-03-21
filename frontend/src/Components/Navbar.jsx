import React, { useState } from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import logo from "../assets/vector.webp";
import { IoIosNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [shownotification, setShowNotification] = useState(false);

  const handleSignIn = () => {
    console.log("Sign In");
    setIsLoggedIn(true);
  };

  const handleSignOut = () => {
    console.log("Sign Out");
    setShowDropdown(false);
    setIsLoggedIn(false);
  };

  const handleProfileClick = () => {
    // Toggle the dropdown or navigate to profile page
    console.log("Profile Clicked");
    setShowDropdown(true);
    setShowNotification(false);
  };

  const handleNotification = () => {
    // Toggle the dropdown or navigate to profile page
    console.log("Notification  Clicked");
    setShowNotification(true);
    setShowDropdown(false);
  };

  const handleHide = () => {
    // Click on any Side then
    console.log("All  Clicked");
    // setShowNotification(false)
    // setShowDropdown(false)
  };

  return (
    <>
      <nav
        className="main-nav border border-slate-300 rounded-lg text-gray-500 shadow  h-16 flex m-2 justify-between items-center px-4 py-2 bg-white "
        onClick={handleHide}>
        {/* Logo */}
        <div className="logo text-2xl text-emerald-400 font-bold flex gap-4">
          <img src={logo} className="rounded-2xl" width={40} height={30} />
          <h2>
            <span>M</span>di
            <span>D</span>oc
          </h2>
        </div>

        {/* Menu */}
        <div
          className={`menu-link ${
            showMediaIcons ? "block" : "hidden"
          } md:block`}>
          <ul className=" hidden md:flex gap-4">
            <li>
              <NavLink to="/" className={"hover:text-emerald-400"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={"hover:text-emerald-400"}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/service" className={"hover:text-emerald-400"}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={"hover:text-emerald-400"}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Signin and Hamburger Menu */}
        <div className=" flex items-center gap-4">
          <div className="hidden md:flex">
            {!isLoggedIn ? (
              <button
                className="pl-11 pt-3 bg-emerald-100  text-grey-500 hover:bg-emerald-200  flex  rounded-md "
                onClick={handleSignIn}>
                <FaUser className="mr-2 mt-1" />
                Sign In
              </button>
            ) : (
              // {isLoggedIn && (
              <div className="flex  gap-6">
                <button>
                  <IoIosNotificationsOutline
                    className=" text-2xl"
                    onClick={handleNotification}
                  />
                </button>
                {shownotification && (
                  <div className="absolute  right-24 mt-12 w-48 bg-gray-900 shadow-lg rounded-md py-2">
                    <NavLink
                      to="/doctor"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      Profile
                    </NavLink>
                    <button
                      onClick={handleSignOut}
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">
                      Sign Out
                    </button>
                  </div>
                )}
                <div className="relative">
                  <button
                    className="w-10 h-10 rounded-full bg-gray-500 overflow-hidden"
                    onClick={handleProfileClick}>
                    <img
                      src={logo}
                      alt="Profile"
                      onClick={handleProfileClick}
                    />
                  </button>
                  {/* Profile Dropdown */}
                  {showDropdown && (
                    <div className="absolute  z-20 right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2">
                      <NavLink
                        to="/doctor"
                        onClick={() => setShowDropdown(!showDropdown)}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                        Profile
                      </NavLink>
                      <button
                        onClick={handleSignOut}
                        className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
            {/* // )} */}
          </div>

          {/* Hamburger Menu */}
          {!isLoggedIn ? (
            <div className="hamburger-menu md:hidden">
              <button onClick={() => setShowMediaIcons(!showMediaIcons)}>
                <GiHamburgerMenu className="text-3xl" />
              </button>
            </div>
          ) : (
            <div className="flex gap-6 md:hidden ">
              <button className="pl-11 pt-3 bg-emerald-100  text-grey-500 hover:bg-emerald-200  flex  rounded-md ">
                <IoIosNotificationsOutline
                  className=" text-2xl"
                  onClick={handleNotification}
                />
              </button>
              {shownotification && (
                <div className="absolute right-0 z-20 mt-12 w-48 bg-white shadow-lg rounded-md py-2">
                  <NavLink
                    to="/profile"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Profile
                  </NavLink>
                  <button
                    onClick={handleSignOut}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Sign Out
                  </button>
                </div>
              )}
              <div className="relative">
                <button
                  className="w-10 h-10 rounded-full bg-gray-500 overflow-hidden"
                  onClick={handleProfileClick}>
                  <img src={logo} alt="Profile" onClick={handleProfileClick} />
                </button>
                {/* Profile Dropdown */}
                {showDropdown && (
                  <div className="absolute z-50 right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2">
                    <NavLink
                      to="/profile"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      Profile
                    </NavLink>
                    <button
                      onClick={handleSignOut}
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {!isLoggedIn && (
        <div
          className={`${
            showMediaIcons ? "block" : "hidden"
          } md:hidden bg-gray-800 text-white`}>
          <ul className="flex flex-col gap-4 p-4">
            <li>
              <NavLink to="/" className="text-white hover:text-gray-300">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="text-white hover:text-gray-300">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/service" className="text-white hover:text-gray-300">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/doctor" className="text-white hover:text-gray-300">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="text-white hover:text-gray-300">
                Notification
              </NavLink>
            </li>

            <button
              className=" w-28 p-0 flex text-white rounded-md mr-4"
              onClick={handleSignIn}>
              <FaUser className="mr-2 mt-1" />
              Sign In
            </button>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;

// <div className="h-16 rounded-md m-2  text-6xl bg-white  flex justify-center">
//   Navbar
// </div>
