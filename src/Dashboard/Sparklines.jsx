import React from "react";
import SparklineCard from "../components/SparklineCard";

const randomizeArray = (array) => {
  const result = array.slice();
  let currentIndex = result.length;
  let temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = result[currentIndex];
    result[currentIndex] = result[randomIndex];
    result[randomIndex] = temporaryValue;
  }

  return result;
};

const generateData = () =>
  randomizeArray([
    47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61,
    27, 54, 43, 19, 46,
  ]);

const sparklineData = [
  {
    id: "sparkline1",
    label: "Sales Last Month",
    color: "#34D399",
    data: generateData(),
    title: "$874",
    bottom: "border-green-400"
  },
  {
    id: "sparkline2",
    label: "Sales Income",
    color: "#3B82F6",
    data: generateData(),
    title: "$1283",
    bottom: "border-blue-400"
  },
  {
    id: "sparkline3",
    label: "Last Month Sales",
    color: "#FBBF24",
    data: generateData(),
    title: "$1286",
    bottom: "border-yellow-400"
  },
  {
    id: "sparkline4",
    label: "Total Revenue",
    color: "#EF4444",
    data: generateData(),
    title: "$564",
    bottom: "border-red-400"
  },
];

const Sparklines = () => (
  <div className="flex flex-wrap justify-center gap-6 py-6 bg-gray-100">
    {sparklineData.map(({ id, label, color, data, title, bottom }) => (
      <SparklineCard
        key={id}
        id={id}
        label={label}
        color={color}
        data={data}
        title={title}
        bottom={bottom}
      />
    ))}
  </div>
);

export default Sparklines;
