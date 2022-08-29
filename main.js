import { id, pro_ids, pro_names } from "./sample_list";
let array = pro_ids;
//let array = ["23-52-030", "23-52-150", "23-52-120", "23-52-140"];
let wp_url = "https://dvrpc-linuxdev.dvrpc.org/wp/2023/pm-projects/";
let update_url = "https://dvrpc-linuxdev.dvrpc.org/wp/2023/pm-projectupdates/";

async function getData(url) {
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function render() {
  let html = "";
  for (var i in array) {
    let u_url = update_url.concat(array[i]);
    let u = await getData(u_url);
    let htmlSegment = `<div class = "test"> 
    <p>Project Code: ${u.proid} </br> Month: ${u.month1}</br> Monthly Report: ${u.notes}</p> 
    </div>`;

    html += htmlSegment;

    let container = document.querySelector("#progress");
    container.innerHTML = html;
  }
}
render();
