import React from "react";

const CardItem = ({ bgColor, icon, title, amount, change, changeType }) => {
  const changeColor =
    changeType === "increase" ? "text-sky-400" : "text-rose-500";
  return (
    <div className="flex items-center p-4 rounded-lg">
      <div className={`bg-${bgColor} p-4 rounded-full`}>{icon}</div>
      <div className="px-4">
        <h3 className="text-neutral-400">{title}</h3>
        <p
          className={`text-3xl font-bold ${
            title === "Capital Gains" ? "text-green-500" : ""
          }`}
        >
          {amount}
        </p>
        <p className={`text-sm ${changeColor}`}>{change}</p>
      </div>
    </div>
  );
};

export default React.memo(CardItem);
