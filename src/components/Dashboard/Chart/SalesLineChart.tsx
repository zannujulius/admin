import { Chart } from "chart.js/auto";
import { registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
Chart.register(...registerables);

const SalesLineChart = ({}) => {
  return (
    <div className="h-[350px]">
      <Bar
        data={{
          labels: Array.from(Array(10)).map(
            () => Math.floor(Math.random() * 100) + 1
          ),
          datasets: [
            {
              type: "bar",
              label: "Inflow",
              backgroundColor: "#0ba75c",
              data: Array.from(Array(10)).map(
                () => Math.floor(Math.random() * 100) + 1
              ),
              borderColor: "#0ba75c",
              borderWidth: 1.5,
            },
          ],
        }}
        options={{
          elements: {
            point: {
              radius: 0,
            },
          },
          maintainAspectRatio: false,
          responsive: true,
          plugins: {
            legend: {
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
              display: true,
              grid: {
                display: false,
              },
            },
            y: {
              display: true,
              grid: {
                display: true,
                color: "#f0f0f0",
                // borderDash: [10, 3],
              },
            },
          },
        }}
      />
    </div>
  );
};

export default SalesLineChart;
