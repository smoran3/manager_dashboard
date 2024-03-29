import { pro_ids, pro_names } from "../helpers/sample_list.js";
let array = pro_ids;
let names = pro_names;
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
    let n = names[i];
    let u_url = update_url.concat(array[i]);
    let u = await getData(u_url);
    let htmlSegment = `<div class = "test"> 
    <p><b>${u.proid}: ${n}</b></p>  
    <p>${u.notes}</p> 
    </div>`;

    html += htmlSegment;

    let container = document.querySelector("#progress");
    container.innerHTML = html;
  }
}
render();
