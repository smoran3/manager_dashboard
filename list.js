const ids = ["23-52-030", "23-52-150", "23-52-120", "23-52-140"];
const WP_URL = "https://dvrpc-linuxdev.dvrpc.org/wp/2023/pm-projects/";

function renderProgramList(programs) {
  for (var i in programs) {
    if (!programs[i].error) {
      const proj = programs[i].proid;
      const projname = programs[i].proname;
      var tbodyRef = document
        .getElementById("table")
        .getElementsByTagName("tbody")[0];
      var newRow = tbodyRef.insertRow();
      var boxCell = newRow.insertCell();
      var idCell = newRow.insertCell();
      var nameCell = newRow.insertCell();
      var box = document.createElement("input");
      box.setAttribute("type", "checkbox");
      var idText = document.createTextNode(proj);
      var nameText = document.createTextNode(projname);
      boxCell.appendChild(box);
      idCell.appendChild(idText);
      nameCell.appendChild(nameText);
    }
  }
}

const getWPs = (id) =>
  fetch(`${WP_URL}/${id}`).then((response) => response.json());

const promises = ids.map((id) => getWPs(id));

const allPromisesWithErrorHandler = promises.map((promise) =>
  promise.catch((error) => error)
);

Promise.all(allPromisesWithErrorHandler)
  .then((programs) => renderProgramList(programs))
  .catch((err) => console.log(err));

//put all this in a DB by user
