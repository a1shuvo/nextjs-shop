"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-blue-600">
        MyShop
      </Link>

      {/* Nav Links */}
      <div className="flex gap-6">
        <Link href="/products" className="hover:text-blue-500">
          Products
        </Link>
        {session && (
          <Link href="/dashboard/add-product" className="hover:text-blue-500">
            Dashboard
          </Link>
        )}
      </div>

      {/* Auth Button */}
      <div>
        {session ? (
          <button
            onClick={() => signOut()}
            className="px-4 py-2 bg-red-500 text-white rounded-lg cursor-pointer"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => signIn()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
