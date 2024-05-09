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
    
        let coValue = data.hourly.carbon_monoxide[12];
        let adjustedValue = (coValue - 129) * 0.568;
        let finalResult = 100 - adjustedValue;
        let finalResultPercentage = finalResult + "%";

        document.querySelectorAll('.data').forEach((element) => {
            element.setAttribute('offset', finalResultPercentage);
            
        });

        document.getElementById('detail').innerHTML = `
		<p id="detail"  style="width:100%; left:-22%;" > This microsite Hosts live Air Quality Data in a base camp of the himalaya's, 
        these include Carbon Monoxide, Sulfur dioxide, Nitrogen dioxide, all are gases produced due to coal mining. 
        his affects the amount of blue on the snow cover mountains, showcasing the rise in green house gases that cause the tempretures to rise in the ozone. 
        Thereby affecting countless glaciers by casuing more and more snow to melt due to high tempretures. 
        <br>
        <br>
        Current CO1: ${ coValue} μg/m^3</p> `
    }
