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

fetch(WP_URL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    renderProgramList(data);
  })
  .catch((err) => {
    console.log(err);
  });

//put all this in a DB by user
