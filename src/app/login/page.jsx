"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-4">
      <div className="w-full max-w-md bg-base-200 rounded-2xl shadow-2xl p-10">
        <h1 className="text-3xl font-bold text-blue-900 text-center mb-8">
          Welcome Back
        </h1>

        <button
          onClick={() => signIn("google")}
          className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-primary border border-gray-300 font-semibold rounded-full shadow hover:shadow-md transition duration-300 mb-6 cursor-pointer"
        >
          {/* Correct Google G Logo */}
          <svg
            className="w-5 h-5"
            viewBox="0 0 533.5 544.3"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M533.5 278.4c0-18.7-1.5-37.5-4.7-55.8H272v105.5h146.9c-6.3 33.8-25.1 62.5-53.5 81.7v67h86.5c50.7-46.7 80.6-115.7 80.6-198.4z"
              fill="#4285F4"
            />
            <path
              d="M272 544.3c72.6 0 133.6-24.1 178.2-65.4l-86.5-67c-24 16.1-54.8 25.7-91.7 25.7-70.5 0-130-47.5-151.4-111.3H34.1v69.9C78.5 482.5 168.3 544.3 272 544.3z"
              fill="#34A853"
            />
            <path
              d="M120.6 326.3c-10.3-30.1-10.3-62.8 0-92.9V163.5H34.1c-39.6 77-39.6 169.2 0 246.2l86.5-67.4z"
              fill="#FBBC05"
            />
            <path
              d="M272 107.2c38.9 0 73.8 13.4 101.3 39.8l76-76C405.4 24.3 344.4 0 272 0 168.3 0 78.5 61.8 34.1 163.5l86.5 69.9c21.4-63.8 80.9-111.3 151.4-111.3z"
              fill="#EA4335"
            />
          </svg>

          <span className="text-base-100 text-sm">Sign in with Google</span>
        </button>

        {/* <div className="flex items-center gap-3 my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="text-gray-400 text-sm">or</span>
          <hr className="flex-grow border-gray-300" />
        </div> */}

        {/* Optional Credentials Login Form */}
        {/* <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full rounded-lg"
          />
          <button
            type="submit"
            className="btn btn-primary w-full rounded-full"
          >
            Sign in
          </button>
        </form> */}
      </div>
    </div>
  );
}
