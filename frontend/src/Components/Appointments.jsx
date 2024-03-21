import React, { useEffect, useState } from "react";
import EndPage from "./ReSchedule";
import { Link } from "react-router-dom";
import data from "./data.json";
import { OrderState } from "../Context";
import axios from "axios";

const Appointments = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedButton, setSelectedButton] = useState("first");
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [appointments, setAppointments] = useState([]);
  // const [selectedPatient, setselectedPatient] = useState(null);

  const { setselectedPatient } = OrderState();

  // const county =1;

  const closeModal = () => setShowModal(false);

  const getAllAppointments = async () => {
    try {
      const data = await axios.get(
        "/api/appointment/65f01c5c79fb2220f974cf88",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setAppointments(data.data.appointments);
      console.log(data.data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleViewDetails = (rowId) => {
    setSelectedRow(selectedRow === rowId ? null : rowId);
  };
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  };

  const downloadPdf = (pdf) => {
    const link = document.createElement("a");
    link.href = pdf;
    link.download = pdf.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePatient = (appointment) => {
    setselectedPatient(appointment);
  };

  const Profile = () => {
    setSelectedButton("first");
  };

  const FileDetails = () => {
    setSelectedButton("filedetails");
  };

  const ReferalDoc = () => {
    setSelectedButton("referal");
  };

  const handleReschedule = () => {
    setShowCalendar(true);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  // const renderContent = () => {
  //   if (selectedButton === "first") {
  //     return <></>;
  //   } else if (selectedButton === "filedetails") {
  //     return (
  //       <>
  //         <div className="flex flex-col gap-2">
  //           <div className="flex items-center">
  //             <p className="mr-2">1. PDF Name 1</p>
  //             <button
  //               className="pdfgen"
  //               onClick={() => downloadPdf(pdf1)}
  //             >
  //               Download
  //             </button>
  //           </div>
  //           <div className="flex items-center">
  //             <p className="mr-2">2. PDF Name 2</p>
  //             <button
  //               className="pdfgen"
  //               onClick={() => downloadPdf(pdf1)}
  //             >
  //               Download
  //             </button>
  //           </div>
  //           <div className="flex items-center">
  //             <p className="mr-2">3. PDF Name 3</p>
  //             <button
  //               className="pdfgen"
  //               onClick={() => downloadPdf(pdf1)}
  //             >
  //               Download
  //             </button>
  //           </div>
  //         </div>
  //       </>
  //     );
  //   } else if (selectedButton === "referal") {
  //     return (
  //       <>
  //         <input
  //           type="text"
  //           className="referdoc"
  //           placeholder="Enter the Reference Doctor Name"
  //         />
  //         <button className="searchgen">Search</button>
  //       </>
  //     );
  //   }
  // };

  const handleRescheduleConfirm = () => {
    console.log("Selected Date:", selectedDate);
    console.log("Selected Time:", selectedTime);
    setShowCalendar(false);
  };

  useEffect(() => {
    getAllAppointments();
  }, []);

  return (
    <>
      <div className="bg-white overflow-auto shadow-lg border border-slate-300  text-black  flex justify-between  rounded-md m-2 p-4 ">
        <div className=" sm:w-full  w-44 overflow-auto rounded-lg shadow mx-auto  md:block hidden">
          <div className="ml-4 mt-4 mb-0 text-2xl font-bold">Schedule List</div>
          <table className="w-full text-center  border border-gray-200">
            <thead>
              <tr className="text-gray-600">
                {/* <th className="bg-gray-50 py-2 border-b-2 px-4">Id</th> */}
                <th className="bg-gray-50 py-2 border-b-2 px-4">Name</th>
                <th className="bg-gray-50 py-2 border-b-2 px-4">
                  Schedule Date
                </th>
                <th className="bg-gray-50 py-2 border-b-2 px-4">Action</th>
                <th className="bg-gray-50 py-2 border-b-2 px-4">
                  Want Rescheduling?
                </th>
                <th className="bg-gray-50 py-2 border-b-2 px-4">Info</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment.id}>
                  {/* <td className=" py-2 px-4 border-b-2"></td> */}
                  <td className=" py-2 px-4 border-b-2">
                    {appointment.patient.name}
                  </td>
                  <td className=" py-2 px-4 border-b-2">
                    {new Date(appointment.date).toLocaleDateString("en-US")}
                    <br />{" "}
                    {new Date(appointment.date).toLocaleTimeString("en-US")}
                  </td>
                  <td className=" py-2 px-4 border-b-2">
                    <button className="text-green-600 hover:bg-gray-100">
                      Join
                    </button>
                  </td>
                  <td className=" py-2 px-4 border-b-2">
                    <button
                      className="text-red-600 hover:bg-gray-100"
                      onClick={() => setShowModal(true)}>
                      Reschedule
                    </button>
                    {/* {showModal && <EndPage closeModal={closeModal} />} */}
                  </td>
                  <td className="border-b-2 py-2 px-4 ">
                    <Link to="/doctor/appointment">
                      <button
                        className="toggle-btn hover:bg-gray-100"
                        onClick={() => setselectedPatient(appointment)}>
                        View Details
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
              {showModal && <EndPage closeModal={closeModal} />}
            </tbody>
          </table>
        </div>

        {/* Mobile View */}
        <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2  justify-center mx-auto  md:hidden">
          {appointments.map((appointment, index) => (
            <div
              key={appointment.id}
              className="bg-white my-2 mx-1 border-2 text-sm  space-y-2 p-7 rounded-lg shadow">
              <div className="flex  ">
                <div>
                  <div className="text-blue-500 font-bold hover:underline py-2 px-4 border-b-2">
                    {index + 1}
                  </div>
                </div>
                <br />
                <div className=" py-2 px-4 ">{appointment.patient.name}</div>
              </div>
              <div className="py-2 px-0">
                <span className="p-2 text-sm  font-medium text-green-700   rounded-lg ">
                  {new Date(appointment.date).toLocaleDateString("en-US")}{" "}
                  {new Date(appointment.date).toLocaleTimeString("en-US")}
                </span>
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap  sm:grid-col-1 gap-2">
                  <div className="text-sm text-green-500">
                    <button className="rounded-lg bg-gray-800  text-white pl-10 pr-10 p-2 sm:pl-10 sm:p-2.5 mb-2 sm:pr-10">
                      Join
                    </button>
                  </div>
                  <div className=" ">
                    <button
                      className="rounded-lg border-2 pl-5 pr-5 p-2 sm:pl-5 sm:p-2.5  sm:pr-5 text-red-600"
                      onClick={() => setShowModal(true)}>
                      Reschedule
                    </button>
                    {/* {showModal && <EndPage closeModal={closeModal} />} */}
                  </div>
                </div>
                <div className=" ">
                  <Link
                    className="text-indigo-600 ml-1  hover:text-indigo-900"
                    to="/doctor/appointment">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
          {showModal && <EndPage closeModal={closeModal} />}
        </div>
      </div>
    </>
  );
};

export default Appointments;
