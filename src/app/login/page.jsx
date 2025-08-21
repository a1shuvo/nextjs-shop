"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      
      {/* Google Login */}
      <button
        onClick={() => signIn("google")}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg mb-4"
      >
        Sign in with Google
      </button>

      {/* Optional: Add Credentials login form here */}
    </div>
  );
}
