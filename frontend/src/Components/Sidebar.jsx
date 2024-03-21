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
    // console.log(path);
    // console.log(location.pathname);
    // will check later for optimization ^
    return location.pathname === path;
  };

  return (
    <div
      className={`z-10 m-2 rounded-md shadow ${
        sideOpen ? "w-72  " : "w-14"
      } bg-white border border-slate-300 text-gray-500 overflow-y-auto  relative duration-300 `}
      style={{ height: "calc(100vh - 2rem)" }}>
      <AiOutlineMenu
        onClick={() => setSideOpen(!sideOpen)}
        className="mx-3 mt-3 bg-white rounded-full text-3xl p-1 absolute -right-0"
      />
      <div
        className={`text-2xl text-gray-500 m-2 ml-4 font-semibold ${
          sideOpen ? "" : "hidden"
        }`}>
        Dashboard
      </div>
      <ul className={`${sideOpen ? "pt-4" : "pt-14"}  text-gray-500`}>
        <Link
          to={"/doctor/"}
          onClick={() => {
            sm && sideOpen ? setSideOpen(!sideOpen) : "";
          }}>
          <li
            className={` ${
              isActivePath("/doctor/") ? "bg-emerald-50 text-emerald-400" : ""
            } flex m-2  hover:text-emerald-400 hover:bg-emerald-50 rounded-md p-2`}>
            <span>
              <CgProfile className="my-1 bg-white rounded-full text-2xl p-1  " />
            </span>
            <span
              className={`text-base  ml-2 font-semibold py-1 ${
                sideOpen ? "" : "hidden"
              }`}>
              Profile
            </span>
          </li>
        </Link>
        <Link
          to={"/doctor/appointments"}
          onClick={() => {
            sm && sideOpen ? setSideOpen(!sideOpen) : "";
          }}>
          <li
            className={` ${
              isActivePath("/doctor/appointments")
                ? "bg-emerald-50 text-emerald-400"
                : ""
            } flex m-2 hover:text-emerald-400 hover:bg-emerald-50 rounded-md p-2`}>
            <span>
              <FaUserDoctor className="my-1 bg-white rounded-full text-2xl p-1  " />
            </span>
            <span
              className={`text-base  ml-2 font-semibold py-1 ${
                sideOpen ? "" : "hidden"
              }`}>
              Appointments
            </span>
          </li>
        </Link>
        <Link
          to={"/doctor/history"}
          onClick={() => {
            sm && sideOpen ? setSideOpen(!sideOpen) : "";
          }}>
          <li
            className={` ${
              isActivePath("/doctor/history")
                ? "bg-emerald-50 text-emerald-400"
                : ""
            } flex m-2 hover:text-emerald-400 hover:bg-emerald-50 rounded-md p-2`}>
            <span>
              <FaHistory className="my-1 bg-white rounded-full text-2xl p-1  " />
            </span>
            <span
              className={`text-base  ml-2 font-semibold py-1 ${
                sideOpen ? "" : "hidden"
              }`}>
              History
            </span>
          </li>
        </Link>
        <Link
          to={"/doctor/calender"}
          onClick={() => {
            sm && sideOpen ? setSideOpen(!sideOpen) : "";
          }}>
          <li
            className={` ${
              isActivePath("/doctor/calender")
                ? "bg-emerald-50 text-emerald-400"
                : ""
            } flex m-2 hover:text-emerald-400 hover:bg-emerald-50 rounded-md p-2`}>
            <span>
              <FaCalendarAlt className="my-1 bg-white rounded-full text-2xl p-1  " />
            </span>
            <span
              className={`text-base  ml-2 font-semibold py-1 ${
                sideOpen ? "" : "hidden"
              }`}>
              Calender
            </span>
          </li>
        </Link>
        <Link
          to={"/doctor/analytics"}
          onClick={() => {
            sm && sideOpen ? setSideOpen(!sideOpen) : "";
          }}>
          <li
            className={` ${
              isActivePath("/doctor/analytics")
                ? "bg-emerald-50 text-emerald-400"
                : ""
            } flex m-2 hover:text-emerald-400 hover:bg-emerald-50 rounded-md p-2`}>
            <span>
              <FaChartPie className="my-1 bg-white rounded-full text-2xl p-1  " />
            </span>
            <span
              className={`text-base  ml-2 font-semibold py-1 ${
                sideOpen ? "" : "hidden"
              }`}>
              Analytics
            </span>
          </li>
        </Link>

        <Link
          to={"/doctor/setting"}
          onClick={() => {
            sm && sideOpen ? setSideOpen(!sideOpen) : "";
          }}>
          <li
            className={` ${
              isActivePath("/doctor/setting")
                ? "bg-emerald-50 text-emerald-400"
                : ""
            } flex m-2 hover:text-emerald-400 hover:bg-emerald-50 rounded-md p-2`}>
            <span>
              <IoSettings className="my-1 bg-white rounded-full text-2xl p-1  " />
            </span>
            <span
              className={`text-base  ml-2 font-semibold py-1 ${
                sideOpen ? "" : "hidden"
              }`}>
              Setting
            </span>
          </li>
        </Link>
        <Link
          onClick={() => {
            sm && sideOpen ? setSideOpen(!sideOpen) : "";
          }}>
          <li
            className={` flex m-2 hover:text-emerald-400 hover:bg-emerald-50 rounded-md p-2`}>
            <span>
              <FaSignOutAlt className="my-1 bg-white rounded-full text-2xl p-1  " />
            </span>
            <span
              className={`text-base  ml-2 font-semibold py-1 ${
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
