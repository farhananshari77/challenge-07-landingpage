import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [ "Innova", "Alphard", "Ferrari", "Avanza", "Xpander"],
  datasets: [
    {
      label: "# of Votes",
      data: [5, 20, 4, 7, 10],
      backgroundColor: [
        "rgba(75, 192, 192, 0.3)",
        "rgba(153, 102, 255, 0.3)",
        "rgba(255, 130, 0, 0.4)",
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.4)",
      ],
      borderColor: [
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 130, 0, 0.8)",
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export default function Chart() {
  return (
    <>
      <style jsx>{`
        div {
          max-width: 32rem;
          margin: 1rem auto;
          text-align: center;
        }
      `}</style>
      <div>
        <h1>Car Rental</h1>
        <Doughnut data={data} />
      </div>
    </>
  );
}