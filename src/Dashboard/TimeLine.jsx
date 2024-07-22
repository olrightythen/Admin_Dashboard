import React from "react";
import Lighter from "linearicons/dist/svg/lighter.svg";
import Menu from "linearicons/dist/svg/menu.svg";

const TimeLine = () => {
  const timelineItems = [
    {
      color: "bg-red-500",
      title: "All Hands Meeting",
      description: "Yet another one, at",
      time: "15:00 PM",
      isNew: false,
    },
    {
      color: "bg-yellow-500",
      title: "Build the production release",
      isNew: true,
    },
    {
      color: "bg-green-500",
      title: "Something not important",
      description: "Participants",
      participants: Array(7).fill("https://placehold.co/24x24"),
      addUser: "https://placehold.co/24x24?text=+",
    },
    {
      color: "bg-blue-500",
      title: "This dot has an info state",
    },
    {
      color: "bg-black",
      title: "This dot has a dark state",
    },
    {
      color: "bg-red-500",
      title: "All Hands Meeting",
      description: "Yet another one, at",
      time: "15:00 PM",
      isNew: false,
    },
    {
      color: "bg-yellow-500",
      title: "Build the production release",
      isNew: true,
    },
    {
      color: "bg-green-500",
      title: "Something not important",
    },
  ];

  return (
    <div className="bg-white py-6 rounded-lg shadow-md w-full">
      <div className="flex items-center justify-between mb-4 px-6">
        <h2 className="flex items-center space-x-2">
          <Lighter className="h-7 w-7" />
          <span className="text-lg">Timeline Example</span>
        </h2>
        <button className="text-gray-600">
          <Menu />
        </button>
      </div>
      <hr />
      <div className="relative mt-8 px-6 h-80 overflow-auto">
        <ul className="space-y-6">
          {timelineItems.map((item, index) => (
            <li key={index} className="flex items-start space-x-4">
              <div
                className={`flex-shrink-0 w-3 h-3 rounded-full ${item.color} mt-1.5`}
              ></div>
              <div>
                <p className="font-semibold">
                  {item.title}
                  {item.isNew && (
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full ml-2">
                      NEW
                    </span>
                  )}
                </p>
                {item.description && (
                  <p className="text-gray-600">
                    {item.description}
                    {item.time && (
                      <span className="text-green-500"> {item.time}</span>
                    )}
                  </p>
                )}
                {item.participants && (
                  <div className="flex space-x-1 mt-2">
                    {item.participants.map((participant, idx) => (
                      <img
                        key={idx}
                        className="w-6 h-6 rounded-full"
                        src={participant}
                        alt={`User ${idx + 1}`}
                      />
                    ))}
                    <img
                      className="w-6 h-6 rounded-full border border-dashed border-gray-400"
                      src={item.addUser}
                      alt="Add User"
                    />
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <div className="flex justify-center mt-8 px-6">
        <button className="bg-gray-700 text-white font-semibold hover:bg-gray-800 py-2 px-6 rounded-full">
          View All Messages
        </button>
        <span class="relative flex h-3 w-3 -translate-x-3">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
        </span>
      </div>
    </div>
  );
};

export default TimeLine;
