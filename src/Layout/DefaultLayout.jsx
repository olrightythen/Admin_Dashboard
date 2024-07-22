import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { FaGear } from "react-icons/fa6";

const DefaultLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="h-screen flex flex-col text-zinc-600 dark:bg-boxdark-2 dark:text-bodydark">
      <div className="p-3 bottom-20 right-10 flex justify-center items-center fixed z-50 bg-amber-400 rounded-full">
        <FaGear className="text-2xl text-black animate-spin-slow" />
      </div>
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <main className="flex-1 overflow-auto bg-gray-100 p-4 md:p-6 2xl:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DefaultLayout;
