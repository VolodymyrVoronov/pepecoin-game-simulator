import { FC } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import { PriceChartContainer, PriceChartTitle } from "./PriceChart.styled";

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};

const PriceChart: FC<{}> = (): JSX.Element => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: [1, 2, 23, 34, 5, 36, 47, 58],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <PriceChartContainer>
      <PriceChartTitle>Pepecoin price index</PriceChartTitle>
      <Line options={options} data={data} />
    </PriceChartContainer>
  );
};

export default PriceChart;
