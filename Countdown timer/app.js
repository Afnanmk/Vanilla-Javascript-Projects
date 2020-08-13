// arrays of months and weekdays
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
]

// DOM references
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

const tempDate = new Date();
const tempYear = tempDate.getFullYear();
const tempMonth = tempDate.getMonth();
const tempDay = tempDate.getDate();
// Setting deadline
const futureDate = new Date(tempYear, tempMonth,tempDay + 10, 9, 0, 0);

const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const day = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

// Display on UI
giveaway.textContent = `Giveaway ends on ${day}, ${date} ${month} ${year}, ${hours}:0${minutes}pm`;


// Countdown section

//get miliseconds of deadline time
const futureTime = futureDate.getTime();

function getRemaindingTime(){
    // get miliseconds of current time
    const currentTime = new Date().getTime();
    
    const time = futureTime - currentTime;
    
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60m
    // 1d = 24hr
    // values in miliseconds
    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;
    const oneSecond = 1000;

    // calculate all values
    let days = Math.floor(time / oneDay);
    let hours = Math.floor((time % oneDay) / oneHour);
    let minutes = Math.floor((time % oneHour) / oneMinute);
    let seconds = Math.floor((time % oneMinute) / oneSecond);
    
    const values = [days,hours,minutes,seconds];
    
    function format(item){
       if(item < 10){
           return (item = `0${item}`)
       }
       else{
           return item
       }
    }


    items.forEach(function(item,index){
        item.innerHTML = format(values[index]);
    })

    //closng countdown
    if(time < 0){
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">Sorry,This giveaway has expired</h4>`;
    }
}

// clear interval 
let countdown = setInterval(getRemaindingTime,1000);

getRemaindingTime();
