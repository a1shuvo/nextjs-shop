"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const { data: session } = useSession();

  const navLinks = (
    <>
      <li>
        <Link href="/" className="hover:text-primary">
          Home
        </Link>
      </li>
      <li>
        <Link href="/products" className="hover:text-primary">
          Products
        </Link>
      </li>
      {session && (
        <li>
          <Link href="/dashboard/add-product" className="hover:text-primary">
            Add Product
          </Link>
        </li>
      )}
    </>
  );

  return (
    <div className="sticky top-0 z-50 bg-base-100 shadow-md">
      <div className="navbar max-w-7xl mx-auto px-4 md:px-6">
        {/* Left: Logo */}
        <div className="navbar-start">
          <Link href="/" className="text-2xl font-bold text-primary">
            MyShop
          </Link>
        </div>

        {/* Center: Desktop Nav */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-6 px-1 font-medium">
            {navLinks}
          </ul>
        </div>

        {/* Right: Auth / Theme */}
        <div className="navbar-end flex items-center gap-2">
          <ThemeToggle />

          {session ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={session.user.image} alt={session.user.name} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-fit"
              >
                <li>
                  <button
                    onClick={() => signOut()}
                    className="text-red-500 hover:bg-red-100 rounded-lg"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <button
              onClick={() => signIn()}
              className="btn btn-primary btn-sm rounded-full"
            >
              Login
            </button>
          )}

          {/* Mobile Hamburger */}
          <div className="lg:hidden dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <div
              tabIndex={0}
              className="menu dropdown-content mt-3 p-4 shadow bg-base-100 rounded-box w-fit right-0"
            >
              {navLinks}
              <div className="mt-2 border-t pt-2">
                {session ? (
                  <button
                    onClick={() => signOut()}
                    className="text-red-500 hover:bg-red-100 rounded-lg"
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    onClick={() => signIn()}
                    className="btn btn-sm btn-primary rounded-full"
                  >
                    Login
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
