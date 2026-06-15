import React from "react";
import {
  Heart,
  Users,
  UserCheck,
  Calendar,
  CreditCard,
  Bell,
  Settings,
  LogOut,
  Search,
  Activity,
  FileText,
  ShieldCheck,
  ClipboardList,
  FlaskConical,
  Bed,
  Stethoscope,
  AlertTriangle,
  BarChart3,
  UserPlus,
} from "lucide-react";

export default function AdminDashboard({
  setShowLogin,
  setIsLoggedIn,
}) {
  return (
    <div className="min-h-screen bg-[#f4f7fb] flex">

      {/* SIDEBAR */}
      <aside className="w-[280px] bg-white border-r flex flex-col justify-between">

        <div>
          {/* LOGO */}
          <div className="px-6 py-8 border-b">
            <div className="flex items-center gap-4">

              <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">
                <Heart className="text-white fill-white" />
              </div>

              <div>
                <h1 className="text-3xl font-bold text-slate-900">
                  MediCare+
                </h1>

                <p className="text-slate-500">
                  Admin Panel
                </p>
              </div>
            </div>
          </div>

          {/* MENU */}
          <div className="p-4 space-y-3">

            <button className="w-full flex items-center gap-4 bg-indigo-600 text-white px-5 py-4 rounded-2xl font-semibold">
              <BarChart3 className="w-5 h-5" />
              Dashboard
            </button>

            <button className="w-full flex items-center gap-4 text-slate-700 hover:bg-slate-100 px-5 py-4 rounded-2xl transition">
              <Users className="w-5 h-5" />
              Patients
            </button>

            <button className="w-full flex items-center gap-4 text-slate-700 hover:bg-slate-100 px-5 py-4 rounded-2xl transition">
              <Stethoscope className="w-5 h-5" />
              Doctors
            </button>

            <button className="w-full flex items-center gap-4 text-slate-700 hover:bg-slate-100 px-5 py-4 rounded-2xl transition">
              <Calendar className="w-5 h-5" />
              Appointments
            </button>

            <button className="w-full flex items-center gap-4 text-slate-700 hover:bg-slate-100 px-5 py-4 rounded-2xl transition">
              <CreditCard className="w-5 h-5" />
              Billing
            </button>

            <button className="w-full flex items-center gap-4 text-slate-700 hover:bg-slate-100 px-5 py-4 rounded-2xl transition">
              <FlaskConical className="w-5 h-5" />
              Lab Reports
            </button>

            <button className="w-full flex items-center justify-between text-slate-700 hover:bg-slate-100 px-5 py-4 rounded-2xl transition">

              <div className="flex items-center gap-4">
                <Bell className="w-5 h-5" />
                Notifications
              </div>

              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                12
              </span>
            </button>

            <button className="w-full flex items-center gap-4 text-slate-700 hover:bg-slate-100 px-5 py-4 rounded-2xl transition">
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
              placeholder="Search patients, doctors, reports..."
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

              <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                AD
              </div>

              <h3 className="font-semibold text-slate-700">
                Admin
              </h3>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-8">

          {/* HEADER */}
          <div className="flex items-center justify-between">

            <div>
              <h1 className="text-5xl font-black text-slate-900">
                Admin Dashboard
              </h1>

              <p className="text-slate-500 text-xl mt-3">
                Hospital overview and management system
              </p>
            </div>

            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 transition">
              <UserPlus className="w-5 h-5" />
              Add Staff
            </button>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-4 gap-6 mt-10">

            {[
              {
                title: "Total Patients",
                value: "2,548",
                icon: Users,
              },
              {
                title: "Doctors",
                value: "128",
                icon: Stethoscope,
              },
              {
                title: "Appointments",
                value: "540",
                icon: Calendar,
              },
              {
                title: "Revenue",
                value: "$82K",
                icon: CreditCard,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl border p-8"
              >
                <div className="flex items-center gap-5">

                  <div className="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center">
                    <item.icon className="text-indigo-600 w-8 h-8" />
                  </div>

                  <div>
                    <p className="text-slate-500">
                      {item.title}
                    </p>

                    <h2 className="text-5xl font-black text-slate-900 mt-2">
                      {item.value}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* MANAGEMENT */}
          <div className="grid grid-cols-3 gap-8 mt-10">

            {/* RECENT ACTIVITY */}
            <div className="col-span-2 bg-white rounded-3xl border p-8">

              <h2 className="text-3xl font-bold text-slate-900">
                Recent Activity
              </h2>

              <p className="text-slate-500 mt-2">
                Latest hospital system updates
              </p>

              <div className="space-y-6 mt-8">

                {[
                  {
                    title: "New patient registered",
                    user: "Emma Johnson",
                    time: "10 mins ago",
                    icon: Users,
                  },
                  {
                    title: "Lab report uploaded",
                    user: "Dr. Wilson",
                    time: "25 mins ago",
                    icon: FlaskConical,
                  },
                  {
                    title: "Appointment approved",
                    user: "Dr. Brown",
                    time: "1 hour ago",
                    icon: Calendar,
                  },
                  {
                    title: "Billing completed",
                    user: "Finance Department",
                    time: "2 hours ago",
                    icon: CreditCard,
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="border rounded-3xl p-6 flex items-center justify-between"
                  >

                    <div className="flex gap-5 items-center">

                      <div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center">
                        <item.icon className="text-indigo-600 w-7 h-7" />
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-slate-900">
                          {item.title}
                        </h3>

                        <p className="text-slate-500 mt-1">
                          {item.user}
                        </p>
                      </div>
                    </div>

                    <span className="text-slate-500">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ALERTS */}
            <div className="bg-white rounded-3xl border p-8">

              <h2 className="text-3xl font-bold text-slate-900">
                Alerts
              </h2>

              <p className="text-slate-500 mt-2">
                Important notifications
              </p>

              <div className="space-y-5 mt-8">

                {[
                  "Emergency room nearing capacity",
                  "3 pending lab approvals",
                  "New doctor registration pending",
                  "System backup scheduled tonight",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="border rounded-2xl p-5 flex gap-4"
                  >

                    <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center">
                      <AlertTriangle className="text-red-600" />
                    </div>

                    <div>
                      <h3 className="font-bold text-lg">
                        {item}
                      </h3>

                      <p className="text-slate-500 mt-1">
                        High Priority
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* QUICK ACTIONS */}
          <div className="bg-white rounded-3xl border p-8 mt-10">

            <h2 className="text-3xl font-bold text-slate-900">
              Quick Actions
            </h2>

            <div className="grid grid-cols-4 gap-6 mt-8">

              {[
                {
                  title: "Manage Doctors",
                  icon: Stethoscope,
                },
                {
                  title: "Patient Records",
                  icon: ClipboardList,
                },
                {
                  title: "Staff Access",
                  icon: ShieldCheck,
                },
                {
                  title: "Bed Management",
                  icon: Bed,
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

          {/* STAFF TABLE */}
          <div className="bg-white rounded-3xl border p-8 mt-10">

            <div className="flex items-center justify-between">

              <div>
                <h2 className="text-3xl font-bold text-slate-900">
                  Staff Overview
                </h2>

                <p className="text-slate-500 mt-2">
                  Doctors and hospital staff status
                </p>
              </div>

              <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold">
                View All
              </button>
            </div>

            <div className="overflow-x-auto mt-8">

              <table className="w-full">

                <thead>
                  <tr className="text-left border-b">
                    <th className="pb-4">Name</th>
                    <th className="pb-4">Department</th>
                    <th className="pb-4">Status</th>
                    <th className="pb-4">Shift</th>
                  </tr>
                </thead>

                <tbody>

                  {[
                    {
                      name: "Dr. Sarah Wilson",
                      dept: "Cardiology",
                      status: "Active",
                      shift: "Morning",
                    },
                    {
                      name: "Dr. Michael Brown",
                      dept: "Neurology",
                      status: "Active",
                      shift: "Evening",
                    },
                    {
                      name: "Nurse Emma",
                      dept: "Emergency",
                      status: "On Leave",
                      shift: "Night",
                    },
                  ].map((staff, index) => (
                    <tr
                      key={index}
                      className="border-b last:border-none"
                    >
                      <td className="py-5 font-semibold">
                        {staff.name}
                      </td>

                      <td className="py-5 text-slate-600">
                        {staff.dept}
                      </td>

                      <td className="py-5">
                        <span
                          className={`px-4 py-2 rounded-full text-sm font-semibold ${
                            staff.status === "Active"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {staff.status}
                        </span>
                      </td>

                      <td className="py-5 text-slate-600">
                        {staff.shift}
                      </td>
                    </tr>
                  ))}

                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}