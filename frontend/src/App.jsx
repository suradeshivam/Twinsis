import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Profile1 from "./Components/Profile1";
import Appointments from "./Components/Appointments";
import Appointment from "./Components/Appointment";
import Book from "./Components/Book";
import DoctorDashboarad from "./DoctorDashboarad";
import DocHistory from "./Components/DocHistory";
import Setting from "./Components/Setting";
import Analytics from "./Components/Analytics";
import Calender from "./Components/Calender";

function App() {
  return (
    <div className="m-0 p-0 bg-neutral-100">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="book" element={<Book />} />
        <Route path="doctor" element={<DoctorDashboarad />}>
          <Route path="" element={<Profile1 />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="history" element={<DocHistory />} />
          <Route path="calender" element={<Calender />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="setting" element={<Setting />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
