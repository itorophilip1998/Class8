const moment = require('moment');

const date = moment().format('MMMM Do YYYY, h:mm:ss a'); // "September 30th 2023, 5:00:00 pm"
console.log(date)
const date2 = moment().format('dddd'); // "Saturday"
console.log(date2) // "Saturday"

moment.fromNow(); 