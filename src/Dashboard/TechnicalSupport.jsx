import React from 'react'

const TechnicalSupport = () => {
  return (
    <div className="bg-white text-card-foreground p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <img
            src="https://openui.fly.dev/openui/24x24.svg?text=☁️"
            alt="cloud-icon"
            className="w-6 h-6"
          />
          <span className="text-lg font-semibold">Technical Support</span>
        </div>
        <button>
          <img
            src="https://openui.fly.dev/openui/24x24.svg?text=≡"
            alt="menu-icon"
            className="w-6 h-6"
          />
        </button>
      </div>
      <div className="mb-4">
        <p className="text-muted-foreground text-sm">NEW ACCOUNTS SINCE 2018</p>
        <div className="flex items-center space-x-2">
          <span className="text-green-500 text-3xl font-bold">78%</span>
          <span className="text-muted-foreground text-xl">%</span>
          <span className="text-green-500 text-lg">+14</span>
        </div>
      </div>
      <div className="mb-4 relative">
        <div className="overflow-hidden">
          <div className="flex transition-transform duration-300" id="carousel">
            <div id="chart1" className="w-full h-24"></div>
            <div id="chart2" className="w-full h-24"></div>
            <div id="chart3" className="w-full h-24"></div>
          </div>
        </div>
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-primary text-primary-foreground p-1 rounded-full"
          id="prev"
        >
          <img
            src="https://openui.fly.dev/openui/24x24.svg?text=←"
            alt="prev-arrow"
            className="w-6 h-6"
          />
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 text-neutral-400 shadow-lg p-1 rounded-full"
          id="next"
        >
          <img
            src="https://openui.fly.dev/openui/24x24.svg?text=→"
            alt="next-arrow"
            className="w-6 h-6"
          />
        </button>
        <div className="flex justify-center space-x-2 mt-2" id="dots">
          <span className="w-2 h-2 bg-primary rounded-full"></span>
          <span className="w-2 h-2 bg-muted rounded-full"></span>
          <span className="w-2 h-2 bg-muted rounded-full"></span>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-muted-foreground text-sm">SALES PROGRESS</p>
        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold">Total Orders</p>
            <p className="text-muted-foreground text-sm">Last year expenses</p>
          </div>
          <span className="text-green-500 text-2xl font-bold">$1896</span>
        </div>
        <div className="mt-2">
          <div className="w-full bg-muted rounded-full h-2">
            <div className="bg-primary h-2 rounded-ful w-full"></div>
          </div>
          <div className="flex justify-between text-muted-foreground text-xs mt-1">
            <span>YoY Growth</span>
            <span>100%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnicalSupport