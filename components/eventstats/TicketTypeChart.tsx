import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

interface TicketTypeChartProps {
  labels: string[];
  values: number[];
}

const TicketTypeChart: React.FC<TicketTypeChartProps> = ({
  labels,
  values,
}) => {
  const data = {
    labels,
    datasets: [
      {
        label: "Tickets Sold",
        data: values,
        backgroundColor: "#FF4D2A",
        borderRadius: { topLeft: 15, topRight: 15 },
        barThickness: 40,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#222",
        titleColor: "#fff",
        bodyColor: "#ccc",
      },
    },
    scales: {
      x: {
        grid: {
          drawOnChartArea: false, // hide vertical grid lines
          drawBorder: false, // hide vertical axis line
        },
        ticks: { color: "#aaa" },
      },
      y: {
        grid: {
          color: "#fff", // white horizontal grid lines
          drawBorder: false, // hide the y-axis border line
        },
        beginAtZero: true,
        max: 160,
        ticks: {
          stepSize: 40,
          color: "#fff",
        },
      },
    },
  };

  return (
    <div className="bg-[#111111] rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Ticket Type Analysis</h2>
      <div style={{ height: "250px" }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default TicketTypeChart;
