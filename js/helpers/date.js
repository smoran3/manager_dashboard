var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;

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

//write name of previous month, which is where data will be from
// may need to depend on date of update in database because it will be looking for
// misisng info in the beginning of the month until budgets and monthly reports are updated
export { months };
