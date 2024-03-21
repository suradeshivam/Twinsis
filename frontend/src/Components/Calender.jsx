import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./calender.css";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const generateTimeOptions = () => {
  const times = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const time = `${hour.toString().padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")}`;
      times.push(time);
    }
  }
  return times;
};

const timeOptions = generateTimeOptions();

const BusinessHours = () => {
  const [hours, setHours] = useState(
    days.reduce(
      (acc, day) => ({
        ...acc,
        [day]: { from: timeOptions[16], to: timeOptions[32] }, // Default to 08:00 to 16:00
      }),
      {}
    )
  );

  const handleDayHoursChange = (day, isFrom, value) => {
    setHours((prevHours) => ({
      ...prevHours,
      [day]: {
        ...prevHours[day],
        [isFrom ? "from" : "to"]: value,
      },
    }));
  };

  const handleDayCheckboxChange = (day, checked) => {
    setHours((prevHours) => ({
      ...prevHours,
      [day]: {
        from: checked ? timeOptions[16] : "",
        to: checked ? timeOptions[32] : "",
      },
    }));
  };

  const handleSelectAll = (checked) => {
    const defaultHours = checked
      ? { from: timeOptions[16], to: timeOptions[32] }
      : { from: "", to: "" };
    setHours((prevHours) =>
      days.reduce(
        (acc, day) => ({
          ...acc,
          [day]: { ...defaultHours },
        }),
        {}
      )
    );
  };

  const handleSelectAllTimeChange = (value, isFrom) => {
    setHours((prevHours) =>
      days.reduce(
        (acc, day) => ({
          ...acc,
          [day]: {
            ...prevHours[day],
            [isFrom ? "from" : "to"]: value,
          },
        }),
        {}
      )
    );
  };

  const handleSaveChanges = () => {
    // Check if any day's hours are not filled
    const incompleteDays = Object.keys(hours).filter(
      (day) => hours[day].from === "" || hours[day].to === ""
    );
    if (incompleteDays.length > 0) {
      // Show toaster notification for incomplete information
      toast.error(`Please fill in hours for ${incompleteDays.join(", ")}`);
    } else {
      // Implement logic to save changes here
      console.log("Changes saved:", hours);
      // Show toaster notification for successful save
      toast.success("Changes saved successfully!");
    }
  };

  return (
    <div className="business-hours bg-white  shadow-lg border border-slate-300  text-black     rounded-md  p-4   m-2">
      <h2>Business Hours</h2>
      <div className="time-slots">
        <div className="select-all">
          {/* Select All Checkbox Section */}
          <div className="select-all-checkbox">
            <input
              type="checkbox"
              onChange={(event) => handleSelectAll(event.target.checked)}
            />
            <span>Select All</span>
          </div>
          {/* Select All From and To Dropdowns */}
          <div className="select-all-time">
            <span>From</span>
            <select
              onChange={(event) =>
                handleSelectAllTimeChange(event.target.value, true)
              }>
              {timeOptions.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            <span>To</span>
            <select
              onChange={(event) =>
                handleSelectAllTimeChange(event.target.value, false)
              }>
              {timeOptions.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* Day rows */}
        {days.map((day) => (
          <div key={day} className="day-hours">
            {/* Individual Day Checkbox */}
            <input
              type="checkbox"
              checked={hours[day].from !== "" && hours[day].to !== ""}
              onChange={(event) =>
                handleDayCheckboxChange(day, event.target.checked)
              }
            />
            {/* Individual Day Name */}
            <span className="day-name">{day}</span>
            {/* From Dropdown */}
            <span>From</span>
            <select
              value={hours[day].from}
              onChange={(event) =>
                handleDayHoursChange(day, true, event.target.value)
              }
              disabled={hours[day].from === "" || hours[day].to === ""}>
              {timeOptions.map((time) => (
                <option key={`${day}-from-${time}`} value={time}>
                  {time}
                </option>
              ))}
            </select>
            {/* To Dropdown */}
            <span>To</span>
            <select
              value={hours[day].to}
              onChange={(event) =>
                handleDayHoursChange(day, false, event.target.value)
              }
              disabled={hours[day].from === "" || hours[day].to === ""}>
              {timeOptions.map((time) => (
                <option key={`${day}-to-${time}`} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
      <button onClick={handleSaveChanges}>Save Changes</button>
      <ToastContainer />
    </div>
  );
};

export default BusinessHours;
