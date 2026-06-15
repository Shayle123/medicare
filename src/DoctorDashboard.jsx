import React, { useState } from "react";

import {
  Heart,
  LayoutDashboard,
  Users,
  Calendar,
  Bell,
  Settings,
  LogOut,
  Search,
  Activity,
  FileText,
  ClipboardList,
  Stethoscope,
  Pill,
  Clock3,
  UserCheck,
  Phone,
  Video,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export default function DoctorDashboard({
  setShowLogin,
  setIsLoggedIn,
}) {
  const [activePage, setActivePage] = useState("dashboard");

  const patients = [
    {
      name: "John Smith",
      disease: "Heart Disease",
      age: 45,
      status: "Critical",
    },
    {
      name: "Emma Watson",
      disease: "Diabetes",
      age: 38,
      status: "Stable",
    },
    {
      name: "Robert Brown",
      disease: "Asthma",
      age: 29,
      status: "Recovering",
    },
  ];

  const appointments = [
    {
      patient: "Sarah Johnson",
      time: "10:00 AM",
      type: "Video Call",
    },
    {
      patient: "David Miller",
      time: "11:30 AM",
      type: "Checkup",
    },
    {
      patient: "Maria Garcia",
      time: "2:00 PM",
      type: "Follow Up",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f4f7fb] flex">

      {/* SIDEBAR */}
      <aside className="w-[280px] bg-white border-r flex flex-col justify-between">

        <div>

          {/* LOGO */}
          <div className="px-6 py-8 border-b">
            <div className="flex items-center gap-4">

              <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center">
                <Heart className="text-white fill-white" />
              </div>

              <div>
                <h1 className="text-3xl font-bold text-slate-900">
                  MediCare+
                </h1>

                <p className="text-slate-500">
                  Doctor Portal
                </p>
              </div>
            </div>
          </div>

          {/* MENU */}
          <div className="p-4 space-y-3">

            {/* DASHBOARD */}
            <button
              onClick={() => setActivePage("dashboard")}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl font-semibold transition ${
                activePage === "dashboard"
                  ? "bg-teal-600 text-white"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <LayoutDashboard className="w-5 h-5" />
              Dashboard
            </button>

            {/* PATIENTS */}
            <button
              onClick={() => setActivePage("patients")}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl font-semibold transition ${
                activePage === "patients"
                  ? "bg-teal-600 text-white"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <Users className="w-5 h-5" />
              Patients
            </button>

            {/* APPOINTMENTS */}
            <button
              onClick={() => setActivePage("appointments")}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl font-semibold transition ${
                activePage === "appointments"
                  ? "bg-teal-600 text-white"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <Calendar className="w-5 h-5" />
              Appointments
            </button>

            {/* PRESCRIPTIONS */}
            <button
              onClick={() => setActivePage("prescriptions")}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl font-semibold transition ${
                activePage === "prescriptions"
                  ? "bg-teal-600 text-white"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <Pill className="w-5 h-5" />
              Prescriptions
            </button>

            {/* REPORTS */}
            <button
              onClick={() => setActivePage("reports")}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl font-semibold transition ${
                activePage === "reports"
                  ? "bg-teal-600 text-white"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <FileText className="w-5 h-5" />
              Reports
            </button>

            {/* NOTIFICATIONS */}
            <button
              onClick={() => setActivePage("notifications")}
              className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl font-semibold transition ${
                activePage === "notifications"
                  ? "bg-teal-600 text-white"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <div className="flex items-center gap-4">
                <Bell className="w-5 h-5" />
                Notifications
              </div>

              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                8
              </span>
            </button>

            {/* SETTINGS */}
            <button
              onClick={() => setActivePage("settings")}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl font-semibold transition ${
                activePage === "settings"
                  ? "bg-teal-600 text-white"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <Settings className="w-5 h-5" />
              Settings
            </button>
          </div>
        </div>

        {/* LOGOUT */}
        <div className="p-4">
          <button
            onClick={() => {
              setIsLoggedIn(false);
              setShowLogin(false);
            }}
            className="w-full flex items-center gap-3 border border-red-200 text-red-500 hover:bg-red-50 px-5 py-4 rounded-2xl font-semibold transition"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* MAIN */}
      <main className="flex-1">

        {/* TOPBAR */}
        <div className="bg-white border-b px-8 py-5 flex items-center justify-between">

          {/* SEARCH */}
          <div className="relative w-[650px]">

            <Search className="absolute left-4 top-4 text-slate-400 w-5 h-5" />

            <input
              type="text"
              placeholder="Search patients, reports, appointments..."
              className="w-full bg-slate-100 rounded-2xl pl-12 pr-5 py-4 outline-none"
            />
          </div>

          {/* PROFILE */}
          <div className="flex items-center gap-6">

            <div className="relative">
              <Bell className="w-6 h-6 text-slate-600" />

              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </div>

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
                DR
              </div>

              <h3 className="font-semibold text-slate-700">
                Dr. Wilson
              </h3>
            </div>
          </div>
        </div>

        {/* ================= DASHBOARD ================= */}
        {activePage === "dashboard" && (
          <div className="p-8">

            {/* HEADER */}
            <div className="flex items-center justify-between">

              <div>
                <h1 className="text-5xl font-black text-slate-900">
                  Doctor Dashboard
                </h1>

                <p className="text-slate-500 text-xl mt-3">
                  Welcome back Doctor 👨‍⚕️
                </p>
              </div>

              <button className="bg-teal-600 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-3">
                <Stethoscope className="w-5 h-5" />
                Start Consultation
              </button>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-4 gap-6 mt-10">

              {[
                {
                  title: "Total Patients",
                  value: "248",
                  icon: Users,
                },
                {
                  title: "Appointments",
                  value: "32",
                  icon: Calendar,
                },
                {
                  title: "Critical Cases",
                  value: "8",
                  icon: AlertCircle,
                },
                {
                  title: "Reports",
                  value: "126",
                  icon: FileText,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl border p-8"
                >
                  <div className="flex items-center gap-5">

                    <div className="w-16 h-16 rounded-2xl bg-teal-100 flex items-center justify-center">
                      <item.icon className="text-teal-600 w-8 h-8" />
                    </div>

                    <div>
                      <p className="text-slate-500">
                        {item.title}
                      </p>

                      <h2 className="text-5xl font-black mt-2">
                        {item.value}
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* LOWER SECTION */}
            <div className="grid grid-cols-3 gap-8 mt-10">

              {/* PATIENT LIST */}
              <div className="col-span-2 bg-white rounded-3xl border p-8">

                <h2 className="text-3xl font-bold text-slate-900">
                  Recent Patients
                </h2>

                <div className="space-y-6 mt-8">

                  {patients.map((item, index) => (
                    <div
                      key={index}
                      className="border rounded-3xl p-6"
                    >
                      <div className="flex justify-between">

                        <div>
                          <h3 className="text-2xl font-bold">
                            {item.name}
                          </h3>

                          <p className="text-slate-500 mt-2">
                            {item.disease}
                          </p>

                          <p className="text-slate-500">
                            Age: {item.age}
                          </p>
                        </div>

                        <div>

                          {item.status === "Critical" && (
                            <span className="bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold">
                              Critical
                            </span>
                          )}

                          {item.status === "Stable" && (
                            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                              Stable
                            </span>
                          )}

                          {item.status === "Recovering" && (
                            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                              Recovering
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex gap-4 mt-6">

                        <button className="border px-5 py-3 rounded-xl hover:bg-slate-50 flex items-center gap-2">
                          <ClipboardList className="w-4 h-4" />
                          View Record
                        </button>

                        <button className="border px-5 py-3 rounded-xl hover:bg-slate-50 flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          Contact
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* APPOINTMENTS */}
              <div className="bg-white rounded-3xl border p-8">

                <h2 className="text-3xl font-bold text-slate-900">
                  Today's Appointments
                </h2>

                <div className="space-y-5 mt-8">

                  {appointments.map((item, index) => (
                    <div
                      key={index}
                      className="border rounded-2xl p-5"
                    >
                      <h3 className="font-bold text-xl">
                        {item.patient}
                      </h3>

                      <div className="flex items-center gap-2 text-slate-500 mt-3">
                        <Clock3 className="w-4 h-4" />
                        {item.time}
                      </div>

                      <div className="flex items-center gap-2 text-slate-500 mt-2">
                        <Video className="w-4 h-4" />
                        {item.type}
                      </div>

                      <button className="w-full mt-5 bg-teal-600 text-white py-3 rounded-xl font-semibold">
                        Join Session
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= PATIENTS ================= */}
        {activePage === "patients" && (
          <div className="p-8">

            <h1 className="text-5xl font-black text-slate-900">
              Patients
            </h1>

            <p className="text-slate-500 text-xl mt-3">
              Manage all patient records
            </p>

            <div className="space-y-6 mt-10">

              {patients.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl border p-8"
                >
                  <div className="flex items-center justify-between">

                    <div>
                      <h2 className="text-3xl font-bold">
                        {item.name}
                      </h2>

                      <p className="text-slate-500 mt-2">
                        {item.disease}
                      </p>
                    </div>

                    <button className="border px-6 py-3 rounded-xl hover:bg-slate-50">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= APPOINTMENTS ================= */}
        {activePage === "appointments" && (
          <div className="p-8">

            <h1 className="text-5xl font-black text-slate-900">
              Appointments
            </h1>

            <p className="text-slate-500 text-xl mt-3">
              Manage your appointments
            </p>

            <div className="space-y-6 mt-10">

              {appointments.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl border p-8"
                >
                  <div className="flex justify-between items-center">

                    <div>
                      <h2 className="text-3xl font-bold">
                        {item.patient}
                      </h2>

                      <p className="text-slate-500 mt-2">
                        {item.time}
                      </p>
                    </div>

                    <button className="bg-teal-600 text-white px-6 py-3 rounded-xl">
                      Open
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= PRESCRIPTIONS ================= */}
        {activePage === "prescriptions" && (
          <div className="p-8">

            <h1 className="text-5xl font-black text-slate-900">
              Prescriptions
            </h1>

            <p className="text-slate-500 text-xl mt-3">
              Manage prescriptions
            </p>

            <div className="grid grid-cols-3 gap-6 mt-10">

              {[
                "Diabetes Medicine",
                "Blood Pressure",
                "Heart Medication",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl border p-8"
                >
                  <Pill className="text-teal-600 w-10 h-10" />

                  <h2 className="text-2xl font-bold mt-6">
                    {item}
                  </h2>

                  <button className="mt-6 border px-5 py-3 rounded-xl hover:bg-slate-50">
                    View Prescription
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= REPORTS ================= */}
        {activePage === "reports" && (
          <div className="p-8">

            <h1 className="text-5xl font-black text-slate-900">
              Reports
            </h1>

            <p className="text-slate-500 text-xl mt-3">
              View medical reports
            </p>

            <div className="space-y-6 mt-10">

              {[
                "Blood Test Report",
                "ECG Report",
                "MRI Scan",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl border p-8 flex justify-between items-center"
                >
                  <div>
                    <h2 className="text-2xl font-bold">
                      {item}
                    </h2>

                    <p className="text-slate-500 mt-2">
                      Updated today
                    </p>
                  </div>

                  <div className="flex gap-4">

                    <button className="border px-5 py-3 rounded-xl hover:bg-slate-50 flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Open
                    </button>

                    <button className="border px-5 py-3 rounded-xl hover:bg-slate-50 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      Approve
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= NOTIFICATIONS ================= */}
        {activePage === "notifications" && (
          <div className="p-8">

            <h1 className="text-5xl font-black text-slate-900">
              Notifications
            </h1>

            <p className="text-slate-500 text-xl mt-3">
              Latest updates and alerts
            </p>

            <div className="space-y-5 mt-10">

              {[
                "New patient appointment scheduled.",
                "Lab report submitted.",
                "Emergency patient admitted.",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border p-6 flex items-center gap-4"
                >
                  <Bell className="text-teal-600" />

                  <div>
                    <h3 className="font-semibold text-lg">
                      {item}
                    </h3>

                    <p className="text-slate-500 text-sm mt-1">
                      1 hour ago
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= SETTINGS ================= */}
        {activePage === "settings" && (
          <div className="p-8">

            <h1 className="text-5xl font-black text-slate-900">
              Settings
            </h1>

            <p className="text-slate-500 text-xl mt-3">
              Manage your profile settings
            </p>

            <div className="bg-white rounded-3xl border p-8 mt-10 space-y-6">

              <div>
                <label className="font-semibold block mb-2">
                  Doctor Name
                </label>

                <input
                  type="text"
                  placeholder="Enter doctor name"
                  className="w-full border rounded-2xl px-5 py-4 outline-none"
                />
              </div>

              <div>
                <label className="font-semibold block mb-2">
                  Specialization
                </label>

                <input
                  type="text"
                  placeholder="Enter specialization"
                  className="w-full border rounded-2xl px-5 py-4 outline-none"
                />
              </div>

              <button className="bg-teal-600 text-white px-8 py-4 rounded-2xl font-semibold">
                Save Changes
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}