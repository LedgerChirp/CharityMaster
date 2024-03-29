import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <header aria-label="Site Header" className="fixed z-[100] w-full bg-[#D9D9D9]">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <NavLink className="block text-teal-600" to="/">
                <span className="sr-only">Home</span>
              </NavLink>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Site Nav" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <NavLink
                      className="text-gray-500 transition hover:text-gray-500/75"
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="text-gray-500 transition hover:text-gray-500/75"
                      to="/contact"
                    >
                      Contact
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      className="text-gray-500 transition hover:text-gray-500/75"
                      to="/about"
                    >
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="text-gray-500 text-sm uppercase transition hover:text-gray-500/75"
                      to="/donate"
                    >
                      Donate
                    </NavLink>
                  </li>
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <NavLink
                    className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                    to="/login"
                  >
                    Login
                  </NavLink>

                  <div className="hidden sm:flex">
                    <NavLink
                      className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium"
                      to="/register"
                    >
                      Register
                    </NavLink>
                  </div>
                </div>

                <div className="block md:hidden">
                  <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
