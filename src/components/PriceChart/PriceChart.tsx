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
import { gameStore } from "store/game";

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
  const { prices, currentPrice, timeInterval } = gameStore();

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const labels = timeInterval;

  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: prices,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <PriceChartContainer>
      <PriceChartTitle>Pepecoin price: {currentPrice}</PriceChartTitle>
      <Line options={options} data={data} />
    </PriceChartContainer>
  );
};

export default PriceChart;
