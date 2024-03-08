import React from "react";
import Sidebar from "./Components/Sidebar";
import { Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { OrderState } from "./Context";
import vector from "./vector.webp";

const DoctorDashboarad = () => {
  const { sideOpen, setSideOpen } = OrderState();

  return (
    <div className="flex">
      <Sidebar />
      <div
        className={`w-full sm:relative ${sideOpen ? "absolute" : ""} h-screen`}>
        <div className="bg-orange-300  flex justify-between  rounded-md m-2 p-4 ">
          <div>
            <span className=" text-3xl font-bold">Doctor Name</span>
            <span className="block">user_id</span>
          </div>
          <div className="pt-2 ">
            <img src={vector} className="size-16 rounded-full" alt="ff" />
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default DoctorDashboarad;
