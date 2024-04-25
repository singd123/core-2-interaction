// var lat = 52.52;
// var long = 13.41;
var URL = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=28.7895&longitude=83.9585&hourly=carbon_monoxide,nitrogen_dioxide,sulphur_dioxide&forecast_days=1`;

fetch(URL)
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		console.log(data);
		render(data);
	})

    function render(data) {
        var dateObject = new Date();
        var hour = dateObject.getHours();
    
        let coValue = data.hourly.carbon_monoxide[hour];
        let adjustedValue = (coValue - 129) * 0.568;
        let finalResult = 100 - adjustedValue;

        let finalResultPercentage = finalResult.toFixed(2) + "%";
    
        document.getElementsByClassName("data").innerHTML += `<stop class="data" offset="${finalResultPercentage}%" stop-color="white" />`;
    }
    


// --------------------------
// -------------
// --------------------------
// -------------
// --------------------------
// -------------
// --------------------------
// -------------
// --------------------------
// -------------
// --------------------------
// -------------
// --------------------------
// -------------


window.addEventListener('scroll', function() {
    var header = document.querySelector('h1');
    if (window.scrollY > 90) {
        var opacity = 1 - ((window.scrollY - 90) / 90);
        header.style.opacity = opacity;
    } else {
        header.style.opacity = 1;
    }
});

window.addEventListener('scroll', function() {
    var header = document.querySelector('p');
    if (window.scrollY > 650) {
        var opacity = 1 - ((window.scrollY - 650) / 650);
        header.style.opacity = opacity;
    } else {
        header.style.opacity = 1;
    }
});

// Set the date we're counting down to
var countDownDate = new Date("Aug 11, 2024 18:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

// Get today's date and time
var now = new Date().getTime();

// Find the distance between now and the count down date
var distance = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Output the result in an element with id="demo"
document.getElementById("demo").innerHTML = days + " <span> days   </span> " + hours + " <span> hrs   </span>   "
+ minutes + " <span> mins   </span>  " + seconds + "<span>  secs    </span> ";

// If the count down is over, write some text 
if (distance < 0) {
clearInterval(x);
document.getElementById("demo").innerHTML = "EXPIRED";
}
}, 1000);

