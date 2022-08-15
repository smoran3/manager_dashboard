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
