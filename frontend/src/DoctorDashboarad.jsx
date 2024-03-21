import React from "react";
import Sidebar from "./Components/Sidebar";
import { Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { OrderState } from "./Context";
import vector from "./vector.webp";

const DoctorDashboarad = () => {
  const { sideOpen, setSideOpen } = OrderState();

  return (
    <div className="flex font-sans  rounded-md text-gray-500  ">
      <Sidebar />
      <div
        className={`  w-full sm:relative ${
          sideOpen ? "absolute" : ""
        } h-screen`}>
        <div className="bg-white border border-slate-300 flex justify-between shadow  rounded-md m-2 p-4 ">
          <div>
            <span className=" text-3xl ">Doctor Name</span>
            <span className="block">user_id</span>
          </div>
          <div className="pt-2 ">
            <img src={vector} className="size-16 rounded-full" alt="ff" />
          </div>
        </div>
        {/* <div className="bg-white overflow-auto shadow  text-black  flex justify-between  rounded-md m-2 p-4 ">
          <Outlet />
        </div> */}
        <Outlet />
      </div>
    </div>
  );
};

export default DoctorDashboarad;
