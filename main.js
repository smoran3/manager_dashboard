//let array = [19033, 20121, 20037, 18041];
//let start_url = "https://www2.dvrpc.org/api/pubs/id/";
let array = ["23-52-030", "23-52-150", "23-52-120", "23-52-140"];
let wp_url = "https://dvrpc-linuxdev.dvrpc.org/wp/2023/pm-projects/";
let update_url = "https://dvrpc-linuxdev.dvrpc.org/wp/2023/pm-projectupdates/";

async function getInfo(url) {
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function getUpdate(url) {
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
    //let i_url = wp_url.concat(array[i]);
    let u_url = update_url.concat(array[i]);
    //let i = await getInfo(i_url);
    let u = await getUpdate(u_url);
    let htmlSegment = `<div class = "test"> 
    <p>Project Code: ${u.proid} </br> Month: ${u.month1}</br> Monthly Report: ${u.notes}</p> 
    </div>`;

    html += htmlSegment;

    let container = document.querySelector(".container");
    container.innerHTML = html;
  }
}
render();
/*
async function render(Resp1, Resp2) {
  let html = "";
  let htmlSegment = `<p>Project Code: ${Resp2.proid}:  Project Name: ${Resp1.proname}</p> `;
  html += htmlSegment;
  let container = document.querySelector(".container");
  container.innerHTML = html;
}

async function getData() {
  let wpCall = fetch(
    "https://dvrpc-linuxdev.dvrpc.org/wp/2023/pm-projects/23-52-030"
  );
  let updateCall = fetch(
    "https://dvrpc-linuxdev.dvrpc.org/wp/2023/pm-projectupdates/23-52-030"
  );

  Promise.all([wpCall, updateCall])
    .then((values) => Promise.all(values.map((value) => value.json())))
    .then((finalVals) => {
      let wpResp = finalVals[0];
      let updateResp = finalVals[1];
    });
  render(wpResp, updateResp);
}
*/
//render();
/*
async function getPublication(url) {
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderPublications() {
  let html = "";
  for (var i in array) {
    let url = start_url.concat(array[i]);
    let pub = await getPublication(url);
    let htmlSegment = `<div class = "test"> 
                <p>Publication ID: ${pub.PubId} </br> Title: ${pub.Title}</br> Staff Contact: ${pub.StaffContactName}</p> 
                <p> Abstract: ${pub.Abstract}</p>
                </div>`;

    html += htmlSegment;
  }
  let container = document.querySelector(".container");
  container.innerHTML = html;
}

renderPublications();
*/
