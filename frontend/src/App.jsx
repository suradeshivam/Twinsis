import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Profile from "./Components/Profile";
import Appointments from "./Components/Appointments";
import Book from "./Components/Book";
import DoctorDashboarad from "./DoctorDashboarad";
import DocHistory from "./Components/DocHistory";
import Setting from "./Components/Setting";
import Analytics from "./Components/Analytics";
import Calender from "./Components/Calender";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="book" element={<Book />} />
        <Route path="doctor" element={<DoctorDashboarad />}>
          <Route path="" element={<Profile />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="history" element={<DocHistory />} />
          <Route path="calender" element={<Calender />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="setting" element={<Setting />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
