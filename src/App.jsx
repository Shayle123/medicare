import React, { useState } from "react";

import MediCareLandingPage from "./MediCareLandingPage";
import MediCareLogin from "./MediCareLogin";

import PatientDashboard from "./PatientDashboard";
import DoctorDashboard from "./DoctorDashboard";
import AdminDashboard from "./AdminDashboard";
import ReceptionistDashboard from "./ReceptionistDashboard";

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // NEW
  const [userRole, setUserRole] = useState("");

  return (
    <>
      {/* LANDING PAGE */}
      {!showLogin && !isLoggedIn && (
        <MediCareLandingPage setShowLogin={setShowLogin} />
      )}

      {/* LOGIN PAGE */}
      {showLogin && !isLoggedIn && (
        <MediCareLogin
          setShowLogin={setShowLogin}
          setIsLoggedIn={setIsLoggedIn}
          setUserRole={setUserRole}
        />
      )}

      {/* PATIENT DASHBOARD */}
      {isLoggedIn && userRole === "Patient" && (
        <PatientDashboard
          setShowLogin={setShowLogin}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}

      {/* DOCTOR DASHBOARD */}
      {isLoggedIn && userRole === "Doctor" && (
        <DoctorDashboard
          setShowLogin={setShowLogin}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}

      {/* ADMIN DASHBOARD */}
      {isLoggedIn && userRole === "Administrator" && (
        <AdminDashboard
          setShowLogin={setShowLogin}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}

      {/* RECEPTIONIST DASHBOARD */}
      {isLoggedIn && userRole === "Receptionist" && (
        <ReceptionistDashboard
          setShowLogin={setShowLogin}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
    </>
  );
}