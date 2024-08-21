import React, { useEffect } from "react";
import ApexCharts from "apexcharts";

const SparklineCard = ({ id, label, color, data, title, bottom }) => {
  useEffect(() => {
    const chartOptions = {
      chart: {
        type: "line",
        height: "100%",
        width: "100%",
        sparkline: {
          enabled: true,
        },
      },
      series: [{ data }],
      colors: [color],
      stroke: {
        curve: "smooth",
        width: 2,
      },
      tooltip: {
        enabled: false,
      },
      title: {
        text: title,
        align: "left",
        offsetX: 20,
        offsetY: 10,
        style: {
          fontSize: "1.125rem",
          fontWeight: "bold",
          color: "#666",
        },
      },
      subtitle: {
        text: label,
        align: "left",
        offsetX: 20,
        offsetY: 40,
        style: {
          fontSize: "0.875rem",
          color: "#9699a2",
        },
      },
    };

    const chart = new ApexCharts(
      document.querySelector(`#${id}`),
      chartOptions
    );
    chart.render();

    return () => {
      chart.destroy();
    };
  }, [id, color, data]);

  return (
    <div className={`bg-white text-black min-w-full xl:min-w-[20%] xl:max-w-[25%] flex-1 h-64 p-6 rounded-md shadow-lg border-b-4 ${bottom}`}>
      <div id={id} className="mt-3"></div>
    </div>
  );
};

export default SparklineCard;
