// Select your container element.
var containerElement = document.querySelector('.Container');

// Define the insert function with a parameter.
function insertDataItem(dataItem) {

	// Update this to your match your collection's metadata.
	containerElement.innerHTML += `
		<div class="spices" style="background: ${ dataItem['color'] }">
		<img src="assests/${ dataItem['image'] }"/>
		<br>
			<p class="name" > ${ dataItem['spiceName'] }</p>
		</div>
	`;
}
			// <p>Flavour Profile: ${ dataItem['flavourProfile'] }</p>
			// <p>Time of origin: ${ dataItem['timeofOrigin'] }</p>
			// <p>Region of origin: ${ dataItem['subRegion'] }</p>


			

				

// Run the insert function for every element in the collection array
data.forEach((dataItem) => {
	insertDataItem(dataItem)
});

			


// Function to filter data based on flavour
function filterByFlavour(flavour) {
    // Filter the data array based on the selected flavour profile
    const filteredData = data.filter(item => item.flavourProfile.includes(flavour));
    // Clear previous content in the container
    containerElement.innerHTML = '';
    // Insert filtered data into the container
    filteredData.forEach(insertDataItem);
}

// Function to filter data based on time of origin
function filterByTime(time) {
    // Filter the data array based on the selected time of origin
    const filteredData = data.filter(item => item.timeofOrigin === time);
    // Clear previous content in the container
    containerElement.innerHTML = '';
    // Insert filtered data into the container
    filteredData.forEach(insertDataItem);
}

// Function to reset filters and display all data
function resetFilters() {
    // Clear previous content in the container
    containerElement.innerHTML = '';
    // Insert all data into the container
    data.forEach(insertDataItem);
}

// Add event listeners to flavour filter buttons
document.querySelectorAll('.filter').forEach(filterButton => {
    filterButton.addEventListener('click', () => {
        const selectedFlavour = filterButton.getAttribute('data-flavour');
        filterByFlavour(selectedFlavour);
    });
});

// Add event listeners to time filter buttons
document.querySelectorAll('.time-filter').forEach(filterButton => {
    filterButton.addEventListener('click', () => {
        const selectedTime = filterButton.getAttribute('data-time');
        filterByTime(selectedTime);
    });
});

// Add event listener to reset button
document.querySelector('.reset').addEventListener('click', resetFilters);


});


// Define a function to filter data based on subRegion
function filterBySubRegion(subRegion) {
    // Filter the data array based on the selected subRegion
    const filteredData = data.filter(item => item.subRegion === subRegion);

    // Clear previous content in the container
    containerElement.innerHTML = '';

    // Insert filtered data into the container
    filteredData.forEach(insertDataItem);
}

// Add event listeners to subRegion filter buttons
document.querySelectorAll('.subregion-filter').forEach(filterButton => {
    filterButton.addEventListener('click', () => {
        const selectedSubRegion = filterButton.getAttribute('data-subregion');
        filterBySubRegion(selectedSubRegion);
    });
});













// 			console.log(data[0]['flavourProfile'].includes('Warm'));
// 			var warmData = data.filter((dataItem) => {
// 				return dataItem['flavourProfile'].includes('Warm');
// 			});

// function getDataItemWithFlavour(flavour) {

// 	// define the variable
// 	var dataItemWithFlavour = dataItem.filter((dataItem) => {
// 		return dataItem['flavourProfile'].includes(flavour); 
// 	})
// // return variable 

// 	return dataItemWithFlavour;
// }


 
//  // event listeners 
// //  --------------------

// // get all the buttons element 

// var flavourButtonElements = document.querySelectorAll('.content a');

// flavourButtonElements.forEach((button) => {

// button.addEventListener('click', () => {
//      var flavour = button.value; 
// 	 var dataItemWithFlavour = getDataItemWithFlavour(color);
// 	//  console.log(dataItemWithFlavour);
// 	 insertCostumes(dataItemWithFlavour);
//      });
// });