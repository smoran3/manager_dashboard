import { renderProgramList } from "./components/list";

const WP_URL = "https://dvrpc-linuxdev.dvrpc.org/wp/2023/pm-projects/";

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
