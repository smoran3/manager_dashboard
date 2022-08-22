const ids = ["23-52-030", "23-52-150", "23-52-120", "23-52-140"];
const WP_URL = "https://dvrpc-linuxdev.dvrpc.org/wp/2023/pm-projects/";

function renderProgramList(programs) {
  let html = "";
  for (program of programs) {
    if (!program.error) {
      let htmlSegment = `<div class = "test"> 
        <p>${program.proid}: <b>${program.proname}</b></br> 
        </div>`;

      html += htmlSegment;
    }
  }
  let container = document.querySelector("#list");
  container.innerHTML = html;
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
