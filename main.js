let array = [19033, 20121, 20037, 18041];
let start_url = "https://www2.dvrpc.org/api/pubs/id/";

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
