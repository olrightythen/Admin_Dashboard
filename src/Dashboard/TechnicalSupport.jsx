import { useEffect, useState } from "react";
import ApexCharts from "apexcharts";
import CloudDownload from "linearicons/dist/svg/cloud-download.svg";
import Menu from "linearicons/dist/svg/menu.svg";

const TechnicalSupport = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sparklineData = [
    47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61,
    27, 54, 43, 19, 46,
  ];

  const randomizeArray = (arg) => {
    const array = arg.slice();
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  const chartOptions = {
    0: {
      chart: {
        type: "area",
        height: "100%",
        width: "100%",
        sparkline: {
          enabled: true,
        },
      },
      series: [
        {
          name: "Series 1",
          data: randomizeArray(sparklineData),
        },
      ],
      stroke: {
        curve: "smooth",
      },
      tooltip: {
        x: {
          show: false,
        },

        y: {
          title: {
            formatter: function () {
              return "";
            },
          },
        },
        marker: {
          show: false,
        },
      },
      title: {
        text: "NEW ACCOUNTS SINCE 2018",
        align: "left",
        margin: 10,
        offsetX: 10,
        offsetY: 10,
        style: {
          fontSize: "0.875rem",
          fontWeight: "regular",
          color: "#666666",
        },
      },
      subtitle: {
        text: "78%",
        align: "left",
        offsetX: 10,
        offsetY: 50,
        style: {
          fontSize: "1.875rem",
          fontWeight: "bold",
          color: "#3ac47d",
        },
      },
      colors: ["#3ac47d"],
    },
    1: {
      chart: {
        type: "area",
        height: "100%",
        width: "100%",
        sparkline: {
          enabled: true,
        },
      },
      series: [
        {
          name: "Series 2",
          data: randomizeArray(sparklineData),
        },
      ],
      xaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      grid: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },

      tooltip: {
        x: {
          show: false,
        },

        y: {
          title: {
            formatter: function () {
              return "";
            },
          },
        },
        marker: {
          show: false,
        },
      },
      title: {
        text: "LAST YEAR TOTAL SALES",
        align: "left",
        margin: 10,
        offsetX: 10,
        offsetY: 10,
        style: {
          fontSize: "0.875rem",
          fontWeight: "regular",
          color: "#666666",
        },
      },
      subtitle: {
        text: "$629",
        align: "left",
        offsetX: 10,
        offsetY: 50,
        style: {
          fontSize: "1.875rem",
          fontWeight: "bold",
          color: "#3f6ad8",
        },
      },
      colors: ["#3f6ad8"],
    },
    2: {
      chart: {
        type: "area",
        height: "100%",
        width: "100%",
        sparkline: {
          enabled: true,
        },
      },
      series: [
        {
          name: "Series 3",
          data: randomizeArray(sparklineData),
        },
      ],
      xaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      grid: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      tooltip: {
        x: {
          show: false,
        },

        y: {
          title: {
            formatter: function () {
              return "";
            },
          },
        },
        marker: {
          show: false,
        },
      },
      title: {
        text: "HELP DESK TICKETS",
        align: "left",
        margin: 10,
        offsetX: 10,
        offsetY: 10,
        style: {
          fontSize: "0.875rem",
          fontWeight: "regular",
          color: "#666666",
        },
      },
      subtitle: {
        text: "34%",
        align: "left",
        offsetX: 10,
        offsetY: 50,
        style: {
          fontSize: "1.875rem",
          fontWeight: "bold",
          color: "#f7b924",
        },
      },
      colors: ["#f7b924"],
    },
  };

  useEffect(() => {
    const chart = new ApexCharts(
      document.getElementById("charts"),
      chartOptions[currentIndex]
    );
    chart.render();

    const dots = document.getElementById("dots").children;
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.toggle("bg-blue-500", i === currentIndex);
      dots[i].classList.toggle("bg-gray-300", i !== currentIndex);
    }
    return () => {
      chart.destroy();
    };
  }, [currentIndex]);

  const prevChart = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(2);
    }
  };

  const nextChart = () => {
    if (currentIndex < 2) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  return (
    <div className="bg-white py-6 rounded-lg shadow-md w-full">
      <div className="flex justify-between items-center mb-4 px-6">
        <h2 className="flex items-center space-x-2">
          <CloudDownload className="h-7 w-7" />
          <span className="text-lg">Technical Support</span>
        </h2>
        <button className="text-gray-500">
          <Menu />
        </button>
      </div>
      <hr />
      <div className="mt-8 px-6 relative">
        <div className="overflow-hidden">
          <div className="flex transition-transform duration-300" id="carousel">
            <div id="charts" className="w-full h-60"></div>
          </div>
        </div>
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 bg-gray-100 text-white p-1 rounded-full"
          onClick={prevChart}
        >
          <img
            src="https://openui.fly.dev/openui/24x24.svg?text=←"
            alt="prev-arrow"
            className="w-6 h-6"
          />
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 bg-gray-100 text-white p-1 rounded-full"
          onClick={nextChart}
        >
          <img
            src="https://openui.fly.dev/openui/24x24.svg?text=→"
            alt="next-arrow"
            className="w-6 h-6"
          />
        </button>
        <div className="flex justify-center space-x-2 mt-2" id="dots">
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
          <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
        </div>
      </div>
      <p className="text-gray-500 text-md px-6 my-2">SALES PROGRESS</p>
      <hr />
      <div className="my-4 px-6">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold">Total Orders</p>
            <p className="text-gray-500 text-sm">Last year expenses</p>
          </div>
          <span className="text-green-500 text-2xl font-bold">$1896</span>
        </div>
        <div className="mt-2">
          <div className="w-full bg-gray-300 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full"
              style={{ width: "50%" }}
            ></div>
          </div>
          <div className="flex justify-between text-gray-500 text-xs mt-1">
            <span>YoY Growth</span>
            <span>100%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSupport;
