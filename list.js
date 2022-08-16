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
  for (const project of obj) {
    const listItem = document.createElement("li");
    listItem.appendChild(project.pro_name);
    nameList.appendChild(listItem);
  }
  return nameList;
}

document.getElementById("foo").appendChild(populate());
*/

let nameList = ["test", "test2"];

fetch("https://dvrpc-linuxdev.dvrpc.org/wp/2023/pm-projects/23-52-030")
  .then(function (response) {
    return response.json();
  })
  .then((data) => {
    var list = document.getElementById("names");
    data.results.forEach((item) => {
      nameList.push(item.proname);
      let li = document.createElement("li");
      li.innerText = item.proname;
      list.appendChild(li);
    });
    console.log(nameList);
  })
  .catch((err) => {
    console.log("Error fetching: ${err}");
  });
document.write(nameList);
