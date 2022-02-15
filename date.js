var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;
//document.write(today);

const months = (month) => {
  if (month == "01") {
    return "January";
  } else if (month == "02") {
    return "February";
  } else if (month == "03") {
    return "March";
  } else if (month == "04") {
    return "April";
  } else if (month == "05") {
    return "May";
  } else if (month == "06") {
    return "June";
  } else if (month == "07") {
    return "July";
  } else if (month == "08") {
    return "August";
  } else if (month == "09") {
    return "September";
  } else if (month == "10") {
    return "October";
  } else if (month == "11") {
    return "November";
  } else if (month == "12") {
    return "December";
  }
};

document.write(months(mm - 1));

const percent_fy = (month) => {
  if (month == "01") {
    return 58;
  } else if (month == "02") {
    return 67;
  } else if (month == "03") {
    return 75;
  } else if (month == "04") {
    return 83;
  } else if (month == "05") {
    return 92;
  } else if (month == "06") {
    return 100;
  } else if (month == "07") {
    return 8;
  } else if (month == "08") {
    return 17;
  } else if (month == "09") {
    return 25;
  } else if (month == "10") {
    return 33;
  } else if (month == "11") {
    return 42;
  } else if (month == "12") {
    return 50;
  }
};

export default percent_fy(mm - 1);
