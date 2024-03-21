import { useState, useEffect } from "react";
import { FaBusinessTime } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
// import "./ReSchedule.css";

const EndPage = ({ closeModal }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  const handleConfirm = () => {
    // Validate the date and time here if needed
    console.log("Selected Date:", selectedDate);
    console.log("Selected Time:", selectedTime);
    // Close the modal or trigger further actions
    closeModal();
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={closeModal}></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-lg z-50 max-w-md w-full">
        <div className="text-center">
          <FaBusinessTime className="text-green-500 text-4xl mb-4" />
          <h2 className="text-2xl font-bold mb-2">Appointment Reschedule</h2>
          <p className="text-gray-700 mb-4">
            Please select a new date and time for your appointment:
          </p>
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700 font-bold">
              Date:
            </label>
            <input
              id="date"
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="time" className="block text-gray-700 font-bold">
              Time:
            </label>
            <input
              id="time"
              type="time"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <button className="confirmbtn" onClick={handleConfirm}>
            Confirm
          </button>
          <button className="cancel-btn ml-2" onClick={closeModal}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default EndPage;
