import React from "react";
import {
  Heart,
  LayoutDashboard,
  Calendar,
  Bell,
  Settings,
  LogOut,
  Search,
  Users,
  Phone,
  ClipboardList,
  CreditCard,
  UserPlus,
  Clock3,
  CheckCircle2,
  AlertCircle,
  Stethoscope,
  Bed,
  FileText,
} from "lucide-react";

export default function ReceptionistDashboard({
  setShowLogin,
  setIsLoggedIn,
}) {

  const appointments = [
    {
      patient: "Emma Johnson",
      doctor: "Dr. Sarah Wilson",
      time: "10:00 AM",
      status: "Confirmed",
    },
    {
      patient: "John Smith",
      doctor: "Dr. Michael Brown",
      time: "11:30 AM",
      status: "Waiting",
    },
    {
      patient: "Sophia Davis",
      doctor: "Dr. Wilson",
      time: "1:00 PM",
      status: "Completed",
    },
  ];

  const patients = [
    {
      name: "Emma Johnson",
      age: 28,
      issue: "Fever & Headache",
    },
    {
      name: "John Smith",
      age: 42,
      issue: "Chest Pain",
    },
    {
      name: "Sophia Davis",
      age: 35,
      issue: "Blood Test",
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

              <div className="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center">
                <Heart className="text-white fill-white" />
              </div>

              <div>
                <h1 className="text-3xl font-bold text-slate-900">
                  MediCare+
                </h1>

                <p className="text-slate-500">
                  Reception Desk
                </p>
              </div>
            </div>
          </div>

          {/* MENU */}
          <div className="p-4 space-y-3">

            <button className="w-full flex items-center gap-4 bg-cyan-600 text-white px-5 py-4 rounded-2xl font-semibold">
              <LayoutDashboard className="w-5 h-5" />
              Dashboard
            </button>

            <button className="w-full flex items-center gap-4 text-slate-700 hover:bg-slate-100 px-5 py-4 rounded-2xl transition">
              <Calendar className="w-5 h-5" />
              Appointments
            </button>

            <button className="w-full flex items-center gap-4 text-slate-700 hover:bg-slate-100 px-5 py-4 rounded-2xl transition">
              <Users className="w-5 h-5" />
              Patients
            </button>

            <button className="w-full flex items-center gap-4 text-slate-700 hover:bg-slate-100 px-5 py-4 rounded-2xl transition">
              <ClipboardList className="w-5 h-5" />
              Registration
            </button>

            <button className="w-full flex items-center gap-4 text-slate-700 hover:bg-slate-100 px-5 py-4 rounded-2xl transition">
              <CreditCard className="w-5 h-5" />
              Billing
            </button>

            <button className="w-full flex items-center justify-between text-slate-700 hover:bg-slate-100 px-5 py-4 rounded-2xl transition">

              <div className="flex items-center gap-4">
                <Bell className="w-5 h-5" />
                Notifications
              </div>

              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                4
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

              <div className="w-12 h-12 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold">
                RC
              </div>

              <h3 className="font-semibold text-slate-700">
                Receptionist
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
                Receptionist Dashboard
              </h1>

              <p className="text-slate-500 text-xl mt-3">
                Manage appointments, patients and front desk activities
              </p>
            </div>

            <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 transition">

              <UserPlus className="w-5 h-5" />
              Register Patient
            </button>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-4 gap-6 mt-10">

            {[
              {
                title: "Today's Patients",
                value: "128",
                icon: Users,
              },
              {
                title: "Appointments",
                value: "45",
                icon: Calendar,
              },
              {
                title: "Available Beds",
                value: "32",
                icon: Bed,
              },
              {
                title: "Pending Bills",
                value: "14",
                icon: CreditCard,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl border p-8"
              >

                <div className="flex items-center gap-5">

                  <div className="w-16 h-16 rounded-2xl bg-cyan-100 flex items-center justify-center">
                    <item.icon className="text-cyan-600 w-8 h-8" />
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

          {/* LOWER SECTION */}
          <div className="grid grid-cols-3 gap-8 mt-10">

            {/* APPOINTMENTS */}
            <div className="col-span-2 bg-white rounded-3xl border p-8">

              <div className="flex items-center justify-between">

                <div>

                  <h2 className="text-3xl font-bold text-slate-900">
                    Today's Appointments
                  </h2>

                  <p className="text-slate-500 mt-2">
                    Appointment schedule overview
                  </p>
                </div>

                <button className="bg-cyan-600 text-white px-5 py-3 rounded-xl font-semibold">
                  View All
                </button>
              </div>

              <div className="space-y-6 mt-8">

                {appointments.map((item, index) => (
                  <div
                    key={index}
                    className="border rounded-3xl p-6"
                  >

                    <div className="flex justify-between">

                      <div className="flex gap-5">

                        <div className="w-16 h-16 rounded-2xl bg-cyan-100 flex items-center justify-center">
                          <Stethoscope className="text-cyan-600 w-8 h-8" />
                        </div>

                        <div>

                          <h3 className="text-2xl font-bold">
                            {item.patient}
                          </h3>

                          <p className="text-slate-500 mt-1">
                            {item.doctor}
                          </p>

                          <div className="flex items-center gap-2 text-slate-500 mt-3">

                            <Clock3 className="w-4 h-4" />
                            {item.time}
                          </div>
                        </div>
                      </div>

                      <div>

                        {item.status === "Confirmed" && (
                          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">

                            <CheckCircle2 className="w-4 h-4" />
                            Confirmed
                          </span>
                        )}

                        {item.status === "Waiting" && (
                          <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">

                            <AlertCircle className="w-4 h-4" />
                            Waiting
                          </span>
                        )}

                        {item.status === "Completed" && (
                          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                            Completed
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-4 mt-6">

                      <button className="border px-5 py-3 rounded-xl hover:bg-slate-50 transition">
                        Reschedule
                      </button>

                      <button className="border px-5 py-3 rounded-xl hover:bg-slate-50 transition">
                        Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* PATIENT QUEUE */}
            <div className="bg-white rounded-3xl border p-8">

              <h2 className="text-3xl font-bold text-slate-900">
                Waiting Queue
              </h2>

              <p className="text-slate-500 mt-2">
                Current patient waiting list
              </p>

              <div className="space-y-5 mt-8">

                {patients.map((item, index) => (
                  <div
                    key={index}
                    className="border rounded-2xl p-5"
                  >

                    <div className="flex items-center justify-between">

                      <div>

                        <h3 className="font-bold text-lg">
                          {item.name}
                        </h3>

                        <p className="text-slate-500">
                          Age: {item.age}
                        </p>
                      </div>

                      <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-semibold">
                        #{index + 1}
                      </span>
                    </div>

                    <p className="text-slate-600 mt-4">
                      {item.issue}
                    </p>

                    <div className="flex gap-3 mt-5">

                      <button className="flex-1 border py-3 rounded-xl hover:bg-slate-50 transition">
                        Call
                      </button>

                      <button className="flex-1 border py-3 rounded-xl hover:bg-slate-50 transition">
                        Details
                      </button>
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
                  title: "New Appointment",
                  icon: Calendar,
                },
                {
                  title: "Patient Check-In",
                  icon: Users,
                },
                {
                  title: "Billing",
                  icon: CreditCard,
                },
                {
                  title: "Medical Records",
                  icon: FileText,
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

          {/* CONTACT SECTION */}
          <div className="bg-white rounded-3xl border p-8 mt-10">

            <div className="flex items-center justify-between">

              <div>

                <h2 className="text-3xl font-bold text-slate-900">
                  Emergency Contacts
                </h2>

                <p className="text-slate-500 mt-2">
                  Important hospital contacts
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-8">

              {[
                {
                  dept: "Emergency",
                  phone: "+880 1234 567890",
                },
                {
                  dept: "ICU",
                  phone: "+880 1234 567891",
                },
                {
                  dept: "Ambulance",
                  phone: "+880 1234 567892",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="border rounded-2xl p-6"
                >

                  <div className="w-14 h-14 rounded-2xl bg-cyan-100 flex items-center justify-center mb-5">
                    <Phone className="text-cyan-600" />
                  </div>

                  <h3 className="text-2xl font-bold">
                    {item.dept}
                  </h3>

                  <p className="text-slate-500 mt-3">
                    {item.phone}
                  </p>

                  <button className="mt-5 w-full border py-3 rounded-xl hover:bg-slate-50 transition">
                    Call Now
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}