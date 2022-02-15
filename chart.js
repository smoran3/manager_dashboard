//import percent_fy from "./percent_fy.js";
//let fy = percent_fy;

const labels = ["0%", "25%", "50%", "75%", "100%"];

const data = {
  labels: [
    "Fiscal Year",
    "MAD Program",
    "Pottstown",
    "Bike-Friendly Resurfacing",
    "Cecil B Moore",
    "Evaluating Ferry Service",
    "SEPTA Rail Equity",
  ],
  datasets: [
    {
      //label: "Fiscal Year",
      data: [56, 47, 60, 52, 63, 46, 73],
      backgroundColor: [
        "rgb(245, 176, 65)",
        "rgb(52, 152, 219)",
        "rgb(52, 152, 219)",
        "rgb(52, 152, 219)",
        "rgb(52, 152, 219)",
        "rgb(52, 152, 219)",
        "rgb(52, 152, 219)",
      ],
    },
  ],
};
const config = {
  type: "bar",
  data: data,

  options: {
    indexAxis: "y",
    plugins: { legend: { display: false } },
    title: { display: true, text: "Project Spending" },
    scales: {
      x: {
        min: 0,
        max: 100,
      },
    },
  },
};
