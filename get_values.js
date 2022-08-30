let wp_url = "https://dvrpc-linuxdev.dvrpc.org/wp/2023/pm-projects/";
import { pro_ids, pro_names } from "./sample_list.js";
let array = pro_ids;
let names = pro_names;
//let array = ["23-52-030", "23-52-150", "23-52-120", "23-52-140"];
//let update_url = "https://dvrpc-linuxdev.dvrpc.org/wp/2023/pm-projectupdates/";

let spent_list = [];

async function getData(url) {
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function percent_spent() {
  var spent_list = [];
  for (var i in array) {
    let w_url = wp_url.concat(array[i]);
    let w = await getData(w_url);
    spent_list.push(w.complete * 20);
    return spent_list;
    //let container = document.querySelector("#spent");
    //container.innerHTML = spent_list;
  }
}
//percent_spent();

async function spending_date() {
  var spent_date = [];
  for (var i in array) {
    let w_url = wp_url.concat(array[i]);
    let w = await getData(w_url);
    spent_date.push(
      w.completedate[5] +
        w.completedate[6] +
        "/" +
        w.completedate[8] +
        w.completedate[9]
    );
    return spent_date;
    //let container = document.querySelector("#spent_date");
    //container.innerHTML = spent_date;
  }
}
//spending_date();

export { percent_spent, spending_date };
