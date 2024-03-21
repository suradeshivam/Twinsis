import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Profile from "./Components/Profile";
import Appointments from "./Components/Appointments";
import Appointment from "./Components/Appointment";
import Book from "./Components/Book";
import DoctorDashboarad from "./DoctorDashboarad";
import DocHistory from "./Components/DocHistory";
import Analytics from "./Components/Analytics";
import Calender from "./Components/Calender";
import PatientDetailsPage from "./Components/PatientDetailsPage";
import Feedback from "./Components/Feedback";

function App() {
  return (
    <div className="m-0 p-0 bg-neutral-100">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="book" element={<Book />} />
        <Route path="doctor" element={<DoctorDashboarad />}>
          <Route path="" element={<Profile />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="history" element={<DocHistory />} />
          <Route
            path="history/patient-details/:id"
            element={<PatientDetailsPage />}
          />
          <Route path="calender" element={<Calender />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="feedback" element={<Feedback />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
