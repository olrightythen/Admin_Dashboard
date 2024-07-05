import React from "react";
import { FaHome, FaRegQuestionCircle } from "react-icons/fa";
import { FaGear, FaRegChartBar } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside
      className={`fixed min-h-full inset-y-0 left-0 z-10 transform bg-background border-r transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } sm:relative sm:translate-x-0 w-screen sm:w-60`}
    >
      <div className="px-4 pt-4 text-blue-600 font-medium">Menu</div>
      <nav className="flex flex-1 flex-col gap-2 overflow-y-auto px-4 py-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-2 rounded-md px-3 py-2 transition-colors hover:bg-blue-100 ${
              isActive ? "text-blue-600 bg-blue-100" : ""
            }`
          }
          aria-label="Dashboard"
        >
          <FaHome className="h-5 w-5" />
          <span className="text-sm font-medium sm:block">Dashboard</span>
        </NavLink>
        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            `flex items-center gap-2 rounded-md px-3 py-2 transition-colors hover:bg-blue-100 ${
              isActive ? "text-blue-600 bg-blue-100" : ""
            }`
          }
          aria-label="Analytics"
        >
          <FaRegChartBar className="h-5 w-5" />
          <span className="text-sm font-medium sm:block">Analytics</span>
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-2 rounded-md px-3 py-2 transition-colors hover:bg-blue-100 ${
              isActive ? "text-blue-600 bg-blue-100" : ""
            }`
          }
          aria-label="Settings"
        >
          <FaGear className="h-5 w-5" />
          <span className="text-sm font-medium sm:block">Settings</span>
        </NavLink>
        <NavLink
          to="/support"
          className={({ isActive }) =>
            `flex items-center gap-2 rounded-md px-3 py-2 transition-colors hover:bg-blue-100 ${
              isActive ? "text-blue-600 bg-blue-100" : ""
            }`
          }
          aria-label="Support"
        >
          <FaRegQuestionCircle className="h-5 w-5" />
          <span className="text-sm font-medium sm:block">Support</span>
        </NavLink>
      </nav>
      <button
        className="absolute top-4 right-4 sm:hidden text-xl"
        onClick={toggleSidebar}
        aria-label="Close sidebar"
      >
        &times;
      </button>
    </aside>
  );
};

export default Sidebar;
