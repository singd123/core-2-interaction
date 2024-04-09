// Get Element 
// ------------------------------

var hoursElement = document.querySelector('.Hours'); 
var minutesElement = document.querySelector('.Minutes'); 
var secondsElement = document.querySelector('.Seconds'); 
console.log(hoursElement, minutesElement, secondsElement);

// Get Time 
// ------------------------------

var dateObject = new Date(); 
var hours = dateObject.getHours();
var minutes = dateObject.getMinutes();
var seconds = dateObject.getSeconds();
console.log(hours,minutes,seconds);

// Update Elements 
// ------------------------------

hoursElement.innerHTML = hours; 
minutesElement.innerHTML = minutes; 
secondsElement.innerHTML = seconds; 

//  Every Second...
// ------------------------------
setInterval(() => {
    
// Get Time 
// ------------------------------

var dateObject = new Date(); 
var hours = dateObject.getHours();
var minutes = dateObject.getMinutes();
var seconds = dateObject.getSeconds();
console.log(hours,minutes,seconds);

// Update Elements 
// ------------------------------

hoursElement.innerHTML = hours; 
minutesElement.innerHTML = minutes; 
secondsElement.innerHTML = seconds; 

}, 1000);



