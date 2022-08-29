import { pro_ids, pro_names } from "./sample_list.js";
let array = pro_ids;
let names = pro_names;
//let array = ["23-52-030", "23-52-150", "23-52-120", "23-52-140"];
let wp_url = "https://dvrpc-linuxdev.dvrpc.org/wp/2023/pm-projects/";
//let update_url = "https://dvrpc-linuxdev.dvrpc.org/wp/2023/pm-projectupdates/";

async function getData(url) {
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

let list = document.getElementById("spending");

async function spendingList(ids) {
  for (var i in ids) {
    let wp_url = wp_url.concat(ids[i]);
    let w = await getData(wp_url);
    list.push(w[i].complete);

    //let htmlSegment = `<div class = "test">
    //<p>${w.complete}: ${n}  </br> Month: ${w.completedate}</p>
    //</div>`;

    //let container = document.querySelector("#spending");
    //container.innerHTML = html;
  }
}
spendingList(pro_ids);

//not render, but export list
