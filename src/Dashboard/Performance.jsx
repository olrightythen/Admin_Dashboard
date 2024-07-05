import React from 'react'
import CardItem from '../components/CardItem';
import laptopPhone from '../assets/lnr-laptop-phone.svg';
import apartment from '../assets/lnr-apartment.svg';
import graduationHat from '../assets/lnr-graduation-hat.svg';

const data = [
  {
    bgColor: "yellow-500",
    icon: laptopPhone,
    title: "Cash Deposits",
    amount: "1.7M",
    change: "▼ 54.1% less earnings",
    changeType: "decrease",
  },
  {
    bgColor: "red-500",
    icon: graduationHat,
    title: "Invested Dividends",
    amount: "9M",
    change: "Grow Rate: ▲ 14.1%",
    changeType: "increase",
  },
  {
    bgColor: "green-500",
    icon: apartment,
    title: "Capital Gains",
    amount: "$563",
    change: "Increased by ▲ 7.35%",
    changeType: "increase",
  },
];

const Performance = () => {
  return (
    <div className="bg-white py-4 rounded-md shadow-lg">
      <div className="flex justify-between items-center px-3 mb-3">
        <h2 className="text-xl">Portfolio Performance</h2>
        <button
          aria-label="View all portfolio performance"
          className="border-2 border-zinc-600 px-3 py-1 rounded-md hover:bg-zinc-600 hover:text-white transition-colors"
        >
          View All
        </button>
      </div>
      <hr />
      <div className="grid py-4 grid-cols-1 md:grid-cols-3 gap-1">
        {data.map((item, index) => (
          <CardItem key={index} {...item} />
        ))}
      </div>
      <hr />
      <div className="flex justify-center mt-4">
        <button
          aria-label="View complete portfolio performance report"
          className="bg-blue-600 text-gray-100 px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
        >
          View Complete Report
        </button>
      </div>
    </div>
  );
}

export default Performance