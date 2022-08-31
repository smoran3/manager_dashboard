import { pro_ids, pro_names, test_vals } from "./sample_list.js";
import { percent_spent } from "./get_values.js";
let names = pro_names;
let values = await percent_spent();
//[5, 20, 16, 8];

const data = {
  labels: names,
  datasets: [
    {
      data: values,
      backgroundColor: "#0078AE",
      barThickness: 25,
    },
  ],
};

const annotation1 = {
  type: "line",
  borderColor: "black",
  borderWidth: 3,
  label: {
    backgroundColor: "red",
    content: "Fiscal Year Progress",
    display: true,
  },
  scaleID: "xAxis",
  value: 56,
};

const config = {
  type: "bar",
  data: data,
  options: {
    indexAxis: "y",
    plugins: {
      legend: { display: false },
      annotation: {
        annotations: {
          annotation1,
        },
      },
    },
    title: { display: true, text: "Project Spending" },
    scales: {
      xAxis: {
        min: 0,
        max: 100,
        title: {
          display: true,
          text: "Percent Spent",
          color: "#0078ae",
          font: {
            family: "Arial",
            size: 14,
            style: "normal",
            lineHeight: 1.2,
          },
          padding: { top: 10, left: 0, right: 0, bottom: 0 },
        },
      },
    },
  },
};

const myChart = new Chart(document.getElementById("chart"), config);
