import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import Profile1 from "./Components/Profile1.jsx";
import Appointments from "./Components/Appointments.jsx";
import Appointment from "./Components/Appointment.jsx";
import Book from "./Components/Book.jsx";
import DoctorDashboarad from "./DoctorDashboarad.jsx";
import DocHistory from "./Components/DocHistory.jsx";
import Analytics from "./Components/Analytics.jsx";
import Calender from "./Components/Calender.jsx";
import PatientDetailsPage from "./Components/PatientDetailsPage.jsx";
import Feedback from "./Components/Feedback.jsx";

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
