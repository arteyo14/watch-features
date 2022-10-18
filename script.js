const getTime = () => {
  //select elements
  let date = document.querySelector(".date");
  let time = document.querySelector(".time");

  //setting date time from date object
  let dateArray = ["sun", "mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  let monthArr = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];
  let dateObj = new Date();
  let daysWeek = dateArray[dateObj.getDate()];
  let daysNumber = dateObj.getDate();
  let monthName = monthArr[dateObj.getMonth()];
  let year = dateObj.getFullYear();
  let hour = dateObj.getHours();
  let minute = dateObj.getMinutes();
  let second = dateObj.getSeconds();

  //setting time 1 to 01
  hour = hour < 10 ? `0${hour}` : hour;
  minute = minute < 10 ? `0${minute}` : minute;
  second = second < 10 ? `0${second}` : second;

  //setting format date time to watch's body
  let dateFormat = `${daysWeek} ${daysNumber} ${monthName} ${year}`;
  let timeFormat = `${hour}:${minute}:${second}`;

  //send format to watch's body
  date.textContent = dateFormat;
  time.textContent = timeFormat;
};

setInterval(function () {
  getTime();
}, 1000);
