var date = new Date();
var days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
console.log(date.getDate());
var daysName = days[date.getDay()];
var months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
var monthsNames = months[date.getMonth()];
var monthsNum = date.getMonth();
var dateNum = date.getDate();
console.log(monthsNames);
console.log(daysName);
console.log(monthsNum);
console.log(dateNum);
