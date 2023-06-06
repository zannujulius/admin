import { Chart } from "chart.js/auto";
import { registerables } from "chart.js";
import { Line } from "react-chartjs-2";
Chart.register(...registerables);

interface Props {
  type: string;
}

const LineChart = ({ type }: Props) => {
  const bgColor =
    type == "approved" ? "#dbffe5" : type == "pending" ? "#ffeece" : "#ffbfbf";
  const brColor =
    type == "approved" ? "green" : type == "pending" ? "orange" : "red";
  return (
    <Line
      data={{
        labels: Array.from(Array(10)).map(
          () => Math.floor(Math.random() * 100) + 1
        ),
        datasets: [
          {
            label: "Inflow",
            fill: true,
            backgroundColor: bgColor,
            data: Array.from(Array(10)).map(
              () => Math.floor(Math.random() * 100) + 1
            ),
            borderColor: brColor,
            borderWidth: 1,
            tension: 0.4,
          },
        ],
      }}
      options={{
        elements: {
          point: {
            radius: 1,
          },
        },
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            display: false,
            labels: {
              color: "",
            },
            textDirection: "left",
            position: "top",
          },
          title: {
            display: false,
            text: "Zonal Sales",
            color: "#001755",
            font: {
              size: 14,
              weight: "500",
            },
          },
        },
        scales: {
          x: {
            display: false,
            grid: {
              display: false,
            },
          },
          y: {
            display: false,
            grid: {
              display: false,
              color: "#f0f0f0",
              // borderDash: [10, 3],
            },
          },
        },
      }}
    />
  );
};

export default LineChart;
