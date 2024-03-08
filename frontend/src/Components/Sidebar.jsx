import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaUserDoctor } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { FaHistory } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { FaSignOutAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { OrderState } from "../Context";

const Sidebar = () => {
  const location = useLocation();
  const { sideOpen, setSideOpen } = OrderState();
  var sm = false;
  if (window.innerWidth < 640) {
    sm = true;
  }

  const isActivePath = (path) => {
    console.log(path);
    console.log(location.pathname);
    return location.pathname === path;
  };

  return (
    <div
      className={`z-10 ${
        sideOpen ? "w-72" : "w-14"
      } bg-teal-800 h-screen relative duration-300 `}>
      <AiOutlineMenu
        onClick={() => setSideOpen(!sideOpen)}
        className="mx-3 mt-3 bg-white rounded-full text-3xl p-1 absolute -right-0"
      />
      <sapn className={`text-3xl font-semibold ${sideOpen ? "" : "hidden"}`}>
        Dashboard
      </sapn>
      <ul className={`${sideOpen ? "pt-4" : "pt-14"}`}>
        <Link
          to={"/doctor/"}
          onClick={() => {
            sm ? setSideOpen(!open) : "";
          }}>
          <li className="flex bg-teal-500 m-2 rounded-md p-2">
            <span>
              <CgProfile className="my-1 bg-white rounded-full text-2xl p-1  " />
            </span>
            <span
              className={`text-xl  ml-2 font-semibold ${
                sideOpen ? "" : "hidden"
              }`}>
              Profile
            </span>
          </li>
        </Link>
        <Link
          to={"/doctor/appointments"}
          style={{
            backgroundColor: isActivePath("/doctor/appointments")
              ? "red"
              : "transparent",
          }}
          onClick={() => {
            sm ? setSideOpen(!open) : "";
          }}>
          <li className="flex bg-teal-500 m-2 rounded-md p-2">
            <span>
              <FaUserDoctor className="my-1 bg-white rounded-full text-2xl p-1  " />
            </span>
            <span
              className={`text-xl  ml-2 font-semibold ${
                sideOpen ? "" : "hidden"
              }`}>
              Appointments
            </span>
          </li>
        </Link>
        <Link
          to={"/doctor/history"}
          onClick={() => {
            sm ? setSideOpen(!open) : "";
          }}>
          <li className="flex bg-teal-500 m-2 rounded-md p-2">
            <span>
              <FaHistory className="my-1 bg-white rounded-full text-2xl p-1  " />
            </span>
            <span
              className={`text-xl  ml-2 font-semibold ${
                sideOpen ? "" : "hidden"
              }`}>
              History
            </span>
          </li>
        </Link>
        <Link
          to={"/doctor/calender"}
          onClick={() => {
            sm ? setSideOpen(!open) : "";
          }}>
          <li className="flex bg-teal-500 m-2 rounded-md p-2">
            <span>
              <FaCalendarAlt className="my-1 bg-white rounded-full text-2xl p-1  " />
            </span>
            <span
              className={`text-xl  ml-2 font-semibold ${
                sideOpen ? "" : "hidden"
              }`}>
              Calender
            </span>
          </li>
        </Link>
        <Link
          to={"/doctor/analytics"}
          onClick={() => {
            sm ? setSideOpen(!open) : "";
          }}>
          <li className="flex bg-teal-500 m-2 rounded-md p-2">
            <span>
              <FaChartPie className="my-1 bg-white rounded-full text-2xl p-1  " />
            </span>
            <span
              className={`text-xl  ml-2 font-semibold ${
                sideOpen ? "" : "hidden"
              }`}>
              Analytics
            </span>
          </li>
        </Link>

        <Link
          to={"/doctor/setting"}
          onClick={() => {
            sm ? setSideOpen(!open) : "";
          }}>
          <li className="flex bg-teal-500 m-2 rounded-md p-2">
            <span>
              <IoSettings className="my-1 bg-white rounded-full text-2xl p-1  " />
            </span>
            <span
              className={`text-xl  ml-2 font-semibold ${
                sideOpen ? "" : "hidden"
              }`}>
              Setting
            </span>
          </li>
        </Link>
        <Link
          onClick={() => {
            sm ? setSideOpen(!open) : "";
          }}>
          <li className="flex bg-teal-500 m-2 rounded-md p-2">
            <span>
              <FaSignOutAlt className="my-1 bg-white rounded-full text-2xl p-1  " />
            </span>
            <span
              className={`text-xl  ml-2 font-semibold ${
                sideOpen ? "" : "hidden"
              }`}>
              Sign out
            </span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
