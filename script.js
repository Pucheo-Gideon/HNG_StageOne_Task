// let slackUserName = document.getElementById("slackUserName")
let slackUserName = document.querySelector('[data-testid="slackUserName"]')
let currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]')
let currentTimeInUTCMilliseconds = document.querySelector('[data-testid="currentUTCTIime"]');

console.log(slackUserName, currentDayOfTheWeek)


let timerId

// console.log(getDayOfTheWeek)


function getTime(){
    let date = new Date()
    let getDayOfTheWeek = date.getDay()
    let getDateOfTheMonth = date.getDate()
    let getMonth = date.getMonth()
    let getFullYear = date.getFullYear()
    // let getUTCMilliseconds = date.getTime()


    //Conditional statement to convert month from number to string
    let month
    getMonth === 0? month = "January": getMonth ===1? month = "February": getMonth ===2? month = "March":
    getMonth ===3? month = "April": getMonth === 4? month = "May" : getMonth===5? month = "June": getMonth===6? month = "July":
    getMonth ===7? month = "August": getMonth ===8? month = "September": getMonth ===9? month = "October": getMonth ===10? month = "November": "December"

    let allDate = `${getDateOfTheMonth}th ${month}, ${getFullYear}`

    //Conditional to convert day of the week to string
    let dayOfTheWeek
    getDayOfTheWeek === 0? dayOfTheWeek = "Sunday": getDayOfTheWeek===1?  dayOfTheWeek ="Monday":
    getDayOfTheWeek ===2? dayOfTheWeek = "Tuesday":getDayOfTheWeek ===3? dayOfTheWeek = "Wednesday":
    getDayOfTheWeek ===4? dayOfTheWeek = "Thursday": getDayOfTheWeek ===5? dayOfTheWeek = "Friday": dayOfTheWeek = "Saturday"
   
   displayDate(dayOfTheWeek, allDate)
}

function displayDate(dayValue, fullDate){
    currentDayOfTheWeek.textContent = `Current Date: ${dayValue}, ${fullDate}`
}

getTime()

function currentTimeInMilliSecondFunc(value){
    // Get Date
    let date = new Date()

    // Extract Hour, minutes and currentSeconds
    let currentHour = date.getUTCHours();
    let currentMinutes = date.getUTCMinutes();
    let currentSeconds = date.getUTCSeconds();

    let currentTime = (currentHour * 3600 + currentMinutes * 600 + currentSeconds ) * 1000;
    displayCurrentTInMillUTC(currentTime)
}

function displayCurrentTInMillUTC(value){
    currentTimeInUTCMilliseconds.textContent = `Current time in seconds: ${value}`
}

// currentTimeInMilliSecondFunc()
setInterval(currentTimeInMilliSecondFunc, 1000)