// var lat = 52.52;
// var long = 13.41;
var URL = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=28.7895&longitude=83.9585&hourly=carbon_monoxide,nitrogen_dioxide,sulphur_dioxide&forecast_days=1`;

fetch(URL)
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		render(data);
	})

    function render(data) {
        var dateObject = new Date();
        var hour = dateObject.getHours();
    
        let coValue = data.hourly.carbon_monoxide[hour];
        let adjustedValue = (coValue - 129) * 0.568;
        let finalResult = 100 - adjustedValue;
        let finalResultPercentage = finalResult + "%";

        document.querySelectorAll('.data').forEach((element) => {
            element.setAttribute('offset', finalResultPercentage);
            
        });

        document.getElementById('detail').innerHTML = `
		<p id="detail" > This microsite Hosts live Air Quality Data in a base camp of the himalaya's, 
        these include Carbon Monoxide, Sulfur dioxide, Nitrogen dioxide, all are gases produced due to coal mining. 
        his affects the amount of blue on the snow cover mountains, showcasing the rise in green house gases that cause the tempretures to rise in the ozone. 
        Thereby affecting countless glaciers by casuing more and more snow to melt due to high tempretures. 
        <br>
        <br>
        Current CO1: ${ coValue} μg/m^3</p> `
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
    if (window.scrollY > 120) {
        var opacity = 1 - ((window.scrollY - 120) / 120);
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

window.addEventListener('scroll', function() {
    var header = document.querySelector('.Open');
    if (window.scrollY > 7000) {
        var opacity = 1 - ((window.scrollY - 7000) / 7000);
        header.style.opacity = opacity;
    } else {
        header.style.opacity = 1;
    }
});

window.addEventListener('scroll', function() {
    var header = document.querySelector('#demo');
    if (window.scrollY > 7000) {
        var opacity = 1 - ((window.scrollY - 7000) / 7000);
        header.style.opacity = opacity;
    } else {
        header.style.opacity = 1;
    }
});

window.addEventListener('scroll', function() {
    var header = document.querySelector('video');
    if (window.scrollY > 70000) {
        var opacity = 1 - ((window.scrollY - 7000) / 7000);
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
document.getElementById("demo").innerHTML = days + " <span> days &nbsp  </span> " + hours + " <span> hrs &nbsp   </span>   "
+ minutes + " <span> mins &nbsp   </span>  " + seconds + "<span>  secs  &nbsp  </span> ";

// If the count down is over, write some text 
if (distance < 0) {
clearInterval(x);
document.getElementById("demo").innerHTML = "EXPIRED";
}
}, 1000);

