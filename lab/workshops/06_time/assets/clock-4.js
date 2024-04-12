// Get Element 
// ------------------------------

var millisecondsElement = document.querySelector('.zip'); 
console.log(millisecondsElement);
 

//  Every Second...
// ------------------------------
setInterval(() => {
    
    // Get Time 
    // ------------------------------
    var dateObject = new Date(); 

    var milliseconds = dateObject.getMilliseconds();
    

    // Update Elements 
    // ------------------------------

    millisecondsElement.innerHTML = milliseconds; 

}, 1
);