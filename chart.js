//import percent_fy from "./percent_fy.js";
//let fy = percent_fy;

const labels = ["0%", "25%", "50%", "75%", "100%"];

//let array = ["23-52-030", "23-52-150", "23-52-120", "23-52-140"];
//let wp_url = "https://dvrpc-linuxdev.dvrpc.org/wp/2023/pm-projects/23-52-030";
/*
async function populate() {
  const wp_url =
    "https://dvrpc-linuxdev.dvrpc.org/wp/2023/pm-projects/23-52-030";
  const request = new Request(wp_url);
  const response = await fetch(request);
  const results = await response.json();

  populateNames(results);
  //populateSpent(results);
}

function populateNames(obj) {
  const nameList = document.querySelector("ul");
  for (const project of obj.projects) {
    const listItem = document.createElement("li");
    listItem.appendChild(project.pro_name);
    nameList.appendChild(listItem);
  }
  return nameList;
}

populate();
*/
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
        "#91BFDC",
        "#0078AE",
        "#0078AE",
        "#0078AE",
        "#0078AE",
        "#0078AE",
        "#0078AE",
      ],
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
