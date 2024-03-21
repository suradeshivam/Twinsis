import React from "react";
import profile from "../assets/vector.webp";
import { CiPhone } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
import { TbReportMedical } from "react-icons/tb";
import data from "./data.json";
import { OrderState } from "../Context";

const Appointment = () => {
  const { selectedPatient } = OrderState();

  return (
    <>
      <div className="bg-white overflow-auto shadow  text-black  flex justify-between  rounded-md m-2 p-4 ">
        <div className="w-full">
          <div className="w-full">
            <div className="flex md:flex-row md:space-x-6 space-y-6 md:space-y-0 flex-col ">
              <div className=" md:w-2/6">
                <div className="bg-gray-100 space-y-2 p-10 w-full h-auto rounded-lg shadow-lg">
                  <div className="flex gap-3">
                    <img
                      src={profile}
                      className="rounded-3xl"
                      width={50}
                      height={50}
                      alt="Profile"
                    />
                    <span className="mt-3 text-gray-600 font-bold text-lg">
                      {selectedPatient.patient.name}
                    </span>
                  </div>
                  <div className="text-sm font-bold">Contact Information</div>
                  <div className="mt-2 text-gray-500 space-y-2">
                    <span className="flex gap-2">
                      <CiPhone className="mt-1" />
                      {selectedPatient.patient.mobile}
                    </span>
                    <span className="flex gap-2">
                      <MdAlternateEmail className="mt-1" />
                      {selectedPatient.patient.email}
                    </span>
                    <span className="flex gap-2">
                      <FaRegAddressCard className="mt-1" />{" "}
                      {selectedPatient.patient.address.line1}
                      <br /> City - {selectedPatient.patient.address.city}
                      <br /> State - {selectedPatient.patient.address.state}
                      <br />
                      Zip Code - {selectedPatient.patient.address.zipcode}
                    </span>
                  </div>
                  <br />
                  <div className="bg-red-100 w-50 sm:w-60 md:w-52 ml-0  rounded-lg shadow">
                    <div className="  p-4 rounded-lg shadow-lg">
                      <h1 className=" text-red-700 sm:text-lg text-sm">
                        AI Predicted disease
                      </h1>
                      <h1 className="font-bold  text-red-500">
                        AI Predicted Results
                      </h1>
                    </div>
                  </div>
                </div>
                <br />
              </div>
              {/* <div className="w-full  md:w-2/3"> */}
              <div className="">
                <div className="">
                  <div className="bg-gray-200 h-12 w-full rounded">
                    <h1 className="text-center font-bold text-lg text-gray-500 pt-2">
                      Vital Sign's
                    </h1>
                  </div>
                  <br />
                  <div className=" flex-wrap flex gap-2">
                    <div className="bg-white  md:grid-cols-2 space-y-2 p-6 text-gray-500 font-bold  rounded-lg shadow-lg text-center text-sm">
                      Fever
                    </div>
                    <div className="bg-white  md:grid-cols-2 space-y-2 p-6 text-gray-500 font-bold  rounded-lg shadow-lg text-center text-sm">
                      Cold
                    </div>
                    <div className="bg-white  md:grid-cols-2 space-y-2 p-6 text-gray-500 font-bold  rounded-lg shadow-lg text-center text-sm">
                      Headache
                    </div>
                    <div className="bg-white  md:grid-cols-2 space-y-2 p-6 text-gray-500 font-bold  rounded-lg shadow-lg text-center text-sm">
                      Vomiting
                    </div>
                  </div>
                  <br />
                </div>

                <div className="">
                  <div className="bg-gray-200 h-12 w-full rounded">
                    <h1 className="text-center font-bold text-lg text-gray-500 pt-2">
                      Reports
                    </h1>
                  </div>
                  <br />
                  <div className="flex flex-wrap gap-2">
                    {selectedPatient.prescriptions.map(
                      (prescription, index) => (
                        <button
                          key={index}
                          className="flex gap-5 p-5 shadow-lg">
                          <span className="bg-pink-100 h-14 w-14 p-1">
                            <span>
                              <TbReportMedical className="text-center text-3xl mt-2 ml-2" />
                            </span>
                          </span>
                          <span className="">
                            <span>{prescription}</span>
                            <br />
                            <span>21-December 2024</span>
                          </span>
                        </button>
                      )
                    )}
                  </div>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointment;
