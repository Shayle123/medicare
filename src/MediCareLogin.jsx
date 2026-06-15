import React, { useState } from "react";
import {
  Heart,
  Mail,
  Lock,
  Eye,
  ArrowLeft,
} from "lucide-react";

export default function MediCareLogin({
  setShowLogin,
  setIsLoggedIn,
  setUserRole,
}) {

  // ROLE STATE
  const [role, setRole] = useState("Patient");

  // LOGIN FUNCTION
  const handleLogin = () => {
    setIsLoggedIn(true);
    setUserRole(role);
  };

  return (
    <div className="min-h-screen bg-[#eef7f5] flex items-center justify-center px-6 py-10">

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

        {/* LEFT SIDE */}
        <div className="relative overflow-hidden rounded-[32px] h-[650px]">

          {/* BACK BUTTON */}
          <button
            onClick={() => setShowLogin(false)}
            className="absolute top-6 left-6 z-20 bg-white/20 backdrop-blur-md hover:bg-white/30 transition text-white px-5 py-3 rounded-xl flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>

          {/* IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=1400&auto=format&fit=crop"
            alt="hospital"
            className="w-full h-full object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-b from-teal-200/40 to-teal-900/70"></div>

          {/* CONTENT */}
          <div className="absolute inset-0 flex flex-col justify-between p-10 text-white">

            {/* LOGO */}
            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                <Heart className="w-6 h-6 fill-white text-white" />
              </div>

              <h1 className="text-3xl font-bold">
                MediCare+
              </h1>
            </div>

            {/* TEXT */}
            <div>

              <h2 className="text-5xl font-bold leading-tight mb-6">
                Advanced Healthcare <br />
                Management
              </h2>

              <p className="text-xl text-white/90 max-w-xl mb-10">
                Empowering medical professionals with seamless tools for better
                patient outcomes.
              </p>

              {/* FEATURES */}
              <div className="space-y-5">

                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-cyan-300"></div>

                  <p className="text-lg">
                    <span className="font-semibold">
                      Patient Care
                    </span>{" "}
                    — Comprehensive patient management
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-cyan-300"></div>

                  <p className="text-lg">
                    <span className="font-semibold">
                      Medical Records
                    </span>{" "}
                    — Secure and accessible records
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-cyan-300"></div>

                  <p className="text-lg">
                    <span className="font-semibold">
                      Appointments
                    </span>{" "}
                    — Easy scheduling and management
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white rounded-[28px] shadow-xl p-10 lg:p-14">

          <h2 className="text-5xl font-bold text-slate-900 mb-4">
            Welcome Back
          </h2>

          <p className="text-slate-500 text-lg mb-10">
            Sign in to your account to continue
          </p>

          {/* LOGIN AS */}
          <div className="mb-6">

            <label className="block text-sm font-semibold text-slate-700 mb-3">
              Login As
            </label>

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full bg-slate-100 border border-slate-200 rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option>Patient</option>
              <option>Doctor</option>
              <option>Receptionist</option>
              <option>Administrator</option>
            </select>
          </div>

          {/* EMAIL */}
          <div className="mb-6">

            <label className="block text-sm font-semibold text-slate-700 mb-3">
              Email
            </label>

            <div className="flex items-center bg-slate-100 border border-slate-200 rounded-xl px-4">

              <Mail className="w-5 h-5 text-slate-400" />

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent px-3 py-4 outline-none"
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div className="mb-4">

            <label className="block text-sm font-semibold text-slate-700 mb-3">
              Password
            </label>

            <div className="flex items-center bg-slate-100 border border-slate-200 rounded-xl px-4">

              <Lock className="w-5 h-5 text-slate-400" />

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full bg-transparent px-3 py-4 outline-none"
              />

              <Eye className="w-5 h-5 text-slate-400 cursor-pointer" />
            </div>
          </div>

          {/* REMEMBER */}
          <div className="flex items-center justify-between mb-8">

            <label className="flex items-center gap-3 text-slate-700">
              <input type="checkbox" className="w-4 h-4" />
              Remember me
            </label>

            <button className="text-teal-600 font-medium hover:underline">
              Forgot password?
            </button>
          </div>

          {/* SIGN IN BUTTON */}
          <button
            onClick={handleLogin}
            className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition"
          >
            Sign In
          </button>

          {/* FOOTER */}
          <p className="text-center text-slate-500 mt-8">
            Don&apos;t have an account?{" "}

            <span className="text-teal-600 font-semibold cursor-pointer hover:underline">
              Sign up
            </span>
          </p>

        </div>
      </div>
    </div>
  );
}