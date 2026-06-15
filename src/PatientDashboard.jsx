import React, { useState } from "react";

import {
  Heart,
  LayoutDashboard,
  FlaskConical,
  CreditCard,
  Calendar,
  Bell,
  Settings,
  LogOut,
  Search,
  Activity,
  FileText,
  MapPin,
  Phone,
  Pill,
  Clock3,
  ClipboardList,
  HeartPulse,
  Eye,
  Download,
  CheckCircle2,
} from "lucide-react";

export default function PatientDashboard({
  setShowLogin,
  setIsLoggedIn,
}) {
  const [activePage, setActivePage] = useState("dashboard");

  const reports = [
    {
      title: "Complete Blood Count (CBC)",
      patient: "John Smith",
      doctor: "Dr. Wilson",
      status: "Completed",
      date: "Jun 10, 2026",
      download: true,
      urgent: false,
    },
    {
      title: "Lipid Panel",
      patient: "Emma Johnson",
      doctor: "Dr. Brown",
      status: "Processing",
      date: "Jun 10, 2026",
      download: false,
      urgent: false,
    },
    {
      title: "Thyroid Function Test",
      patient: "Robert Davis",
      doctor: "Dr. Wilson",
      status: "Completed",
      date: "Jun 9, 2026",
      download: true,
      urgent: false,
    },
    {
      title: "Blood Glucose",
      patient: "Maria Garcia",
      doctor: "Dr. Davis",
      status: "Completed",
      date: "Jun 9, 2026",
      download: true,
      urgent: true,
    },
    {
      title: "Liver Function Test",
      patient: "David Wilson",
      doctor: "Dr. Miller",
      status: "Completed",
      date: "Jun 8, 2026",
      download: true,
      urgent: false,
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
                  Patient Portal
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

            {/* LAB REPORT */}
            <button
              onClick={() => setActivePage("lab")}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl font-semibold transition ${
                activePage === "lab"
                  ? "bg-teal-600 text-white"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <FlaskConical className="w-5 h-5" />
              Lab Reports
            </button>

            {/* BILLING */}
            <button
              onClick={() => setActivePage("billing")}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl font-semibold transition ${
                activePage === "billing"
                  ? "bg-teal-600 text-white"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <CreditCard className="w-5 h-5" />
              Billing
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
                5
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
              placeholder="Search patients, doctors, appointments..."
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
                FA
              </div>

              <h3 className="font-semibold text-slate-700">
                Faihasshayle
              </h3>
            </div>
          </div>
        </div>

        {/* ================= DASHBOARD ================= */}
        {activePage === "dashboard" && (
          <div className="p-8">

            <div className="flex items-center justify-between">

              <div>
                <h1 className="text-5xl font-black text-slate-900">
                  Patient Dashboard
                </h1>

                <p className="text-slate-500 text-xl mt-3">
                  Welcome back! Here's your health overview.
                </p>
              </div>

              <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 transition">
                <Calendar className="w-5 h-5" />
                Book Appointment
              </button>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-4 gap-6 mt-10">

              {[
                {
                  title: "Blood Pressure",
                  value: "120/80",
                  unit: "mmHg",
                },
                {
                  title: "Heart Rate",
                  value: "72",
                  unit: "bpm",
                },
                {
                  title: "Blood Sugar",
                  value: "95",
                  unit: "mg/dL",
                },
                {
                  title: "Temperature",
                  value: "98.6",
                  unit: "°F",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl border p-8"
                >
                  <div className="flex items-center gap-5">

                    <div className="w-16 h-16 rounded-2xl bg-teal-100 flex items-center justify-center">
                      <Activity className="text-teal-600 w-8 h-8" />
                    </div>

                    <div>
                      <p className="text-slate-500">
                        {item.title}
                      </p>

                      <h2 className="text-5xl font-black text-slate-900 mt-2">
                        {item.value}
                      </h2>

                      <p className="text-slate-500 mt-1">
                        {item.unit}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* QUICK ACTIONS */}
            <div className="bg-white rounded-3xl border p-8 mt-10">

              <h2 className="text-3xl font-bold text-slate-900">
                Quick Actions
              </h2>

              <div className="grid grid-cols-4 gap-6 mt-8">

                {[
                  {
                    title: "Book Appointment",
                    icon: Calendar,
                  },
                  {
                    title: "View Records",
                    icon: ClipboardList,
                  },
                  {
                    title: "Prescriptions",
                    icon: Pill,
                  },
                  {
                    title: "Health Tracker",
                    icon: HeartPulse,
                  },
                ].map((item, index) => (
                  <button
                    key={index}
                    className="border rounded-2xl p-8 flex flex-col items-center justify-center gap-4 hover:bg-slate-50 transition"
                  >
                    <item.icon className="w-8 h-8 text-slate-700" />

                    <span className="font-semibold text-lg">
                      {item.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ================= LAB REPORT ================= */}
        {activePage === "lab" && (
          <div className="p-8">

            <div className="flex items-center justify-between">

              <div>
                <h1 className="text-5xl font-black text-slate-900">
                  Laboratory Reports
                </h1>

                <p className="text-slate-500 text-xl mt-3">
                  View and manage lab test results
                </p>
              </div>

              <button className="bg-teal-600 text-white px-8 py-4 rounded-2xl font-semibold">
                New Test Request
              </button>
            </div>

            <div className="space-y-6 mt-10">

              {reports.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl border p-6"
                >
                  <div className="flex justify-between">

                    <div className="flex gap-5">

                      <div className="w-16 h-16 rounded-2xl bg-cyan-100 flex items-center justify-center">
                        <FlaskConical className="text-cyan-600 w-8 h-8" />
                      </div>

                      <div>
                        <h3 className="text-3xl font-bold text-slate-900">
                          {item.title}
                        </h3>

                        <p className="text-slate-500 mt-2">
                          Patient: {item.patient}
                        </p>

                        <p className="text-slate-500">
                          Requested by: {item.doctor}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">

                      <div className="flex gap-3 justify-end">

                        {item.status === "Completed" && (
                          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4" />
                            Completed
                          </span>
                        )}

                        {item.status === "Processing" && (
                          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                            <Clock3 className="w-4 h-4" />
                            Processing
                          </span>
                        )}
                      </div>

                      <p className="text-slate-500 mt-4">
                        {item.date}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-8 border-t pt-6">

                    <div className="flex gap-4">

                      <button className="border px-5 py-3 rounded-xl flex items-center gap-2 hover:bg-slate-50">
                        <Eye className="w-5 h-5" />
                        View Results
                      </button>

                      {item.download && (
                        <button className="border px-5 py-3 rounded-xl flex items-center gap-2 hover:bg-slate-50">
                          <Download className="w-5 h-5" />
                          Download
                        </button>
                      )}
                    </div>

                    <button className="border px-5 py-3 rounded-xl hover:bg-slate-50 font-semibold">
                      Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= BILLING ================= */}
        {activePage === "billing" && (
          <div className="p-8">

            <h1 className="text-5xl font-black text-slate-900">
              Billing
            </h1>

            <p className="text-slate-500 text-xl mt-3">
              Manage your payments and invoices
            </p>

            <div className="grid grid-cols-3 gap-6 mt-10">

              {[
                {
                  title: "Total Due",
                  value: "$450",
                },
                {
                  title: "Paid",
                  value: "$1240",
                },
                {
                  title: "Pending",
                  value: "$120",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl border p-8"
                >
                  <h3 className="text-slate-500">
                    {item.title}
                  </h3>

                  <h2 className="text-5xl font-black mt-4">
                    {item.value}
                  </h2>
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
              Manage your doctor appointments
            </p>

            <div className="space-y-6 mt-10">

              {[
                {
                  doctor: "Dr. Sarah Wilson",
                  type: "Dental Checkup",
                  date: "Jun 12, 2026",
                },
                {
                  doctor: "Dr. Michael Brown",
                  type: "Heart Specialist",
                  date: "Jun 18, 2026",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl border p-8"
                >
                  <div className="flex items-center justify-between">

                    <div>
                      <h2 className="text-3xl font-bold">
                        {item.doctor}
                      </h2>

                      <p className="text-slate-500 mt-2">
                        {item.type}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="font-semibold">
                        {item.date}
                      </p>
                    </div>
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
                "Your blood test report is ready.",
                "Appointment confirmed for Jun 12.",
                "Medicine reminder for tonight.",
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
                      2 hours ago
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
              Manage your account settings
            </p>

            <div className="bg-white rounded-3xl border p-8 mt-10 space-y-6">

              <div>
                <label className="font-semibold block mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter name"
                  className="w-full border rounded-2xl px-5 py-4 outline-none"
                />
              </div>

              <div>
                <label className="font-semibold block mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter email"
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