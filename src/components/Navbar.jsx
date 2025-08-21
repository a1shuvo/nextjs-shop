"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <div className="sticky top-0 z-50 bg-base-100 shadow-md">
      <div className="navbar max-w-7xl mx-auto px-6">
        {/* Left: Logo */}
        <div className="navbar-start">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            MyShop
          </Link>
        </div>

        {/* Center: Nav Links (desktop) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">
            <li>
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-blue-600">
                Products
              </Link>
            </li>
            {session && (
              <li>
                <Link
                  href="/dashboard/add-product"
                  className="hover:text-blue-600"
                >
                  Add Product
                </Link>
              </li>
            )}
          </ul>
        </div>

        {/* Right: Auth / User Avatar */}
        <div className="navbar-end flex items-center gap-2">
          <ThemeToggle />
          {session ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={session.user.image} alt={session.user.name} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content mt-3 p-2 shadow menu menu-compact bg-base-100 rounded-box w-52"
              >
                <li>
                  <button
                    onClick={() => signOut()}
                    className="text-red-500 hover:bg-gray-100 rounded-lg w-full text-left"
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

          {/* Mobile Menu */}
          <div className="lg:hidden dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle ml-2">
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
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/products">Products</Link>
              </li>
              {session && (
                <li>
                  <Link href="/dashboard/add-product">Add Product</Link>
                </li>
              )}
              {session ? (
                <li>
                  <button
                    onClick={() => signOut()}
                    className="text-red-500 hover:bg-gray-100 rounded-lg w-full text-left"
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <li>
                  <button
                    onClick={() => signIn()}
                    className="btn btn-primary btn-sm rounded-full w-full text-left"
                  >
                    Login
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
