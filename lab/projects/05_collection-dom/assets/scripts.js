// Select your container element.
var containerElement = document.querySelector('.Container');

// Define the insert function with a parameter.
function insertDataItem(dataItem) {

	// Update this to your match your collection's metadata.
	containerElement.innerHTML += `
		<div class="spices" style="background: ${ dataItem['color'] }">
			<p class="name" > ${ dataItem['spiceName'] }</p>
			<p>Flavour Profile: ${ dataItem['flavourProfile'] }</p>
			<p>Time of origin: ${ dataItem['timeofOrigin'] }</p>
			<p>Region of origin: ${ dataItem['subRegion'] }</p>
		</div>
	`
}

// Run the insert function for every element in the collection array
data.forEach((dataItem) => {
	insertDataItem(dataItem)
});