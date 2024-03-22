// SELECTING our container element
// --------------------------------------------

var containerElement = document.querySelector('.Container');


// INSERT ALL COSTUMES
// --------------------------------------------
// insert  color swatches function definition 
function insertColorSwatches(costume) {
// select the kirby element 
	var kirbyElement = document.querySelector(`.Kirby[data-costume="${ costume.title }"]`);
//  for each color in the array costume...
	costume['colors'].forEach((color) => {

		// add the swatch to html w bg color
		kirbyElement.innerHTML += `
			<div class="Swatch" style="background: ${ color }"></div>
		`;
	});
}
// insert single costume function 
function insertCostume(costume) {
// put costume into html
	containerElement.innerHTML += `
		<article class="Kirby" data-costume="${ costume['title'] }">
			<h2>${ costume['title'] }</h2>
			<img src="media/${ costume['image'] }"/>
			<p>${ costume['powers'] }</p>
		</article>
	`;
// insert color swatches
	insertColorSwatches(costume);

}
// interest costumes function definition - cleans it out and makes sure it is empty
function insertCostumes(costumes) {
// empty the container element
	containerElement.innerHTML = '';
// for each costume - insert costume 
	costumes.forEach((costume) => {
		insertCostume(costume);
	});

}
// interest all costumes into the DOM
 insertCostumes(costumes);

// filter costumes by color 
// ----------------------------------------

//  get all the costumes with a single color

// var redCostumes = costumes.filter( (costume) => {
// 	// test of the color red
// return costume['colors'].includes('red')


// });

function getCostumesWithColor(color) {

	// define the variable
	var costumesWithColor = costumes.filter((costume) => {
		return costume['colors'].includes(color); 
	})
// return variable 

	return costumesWithColor;
}

 var redCostumes = getCostumesWithColor ('red'); 
 
 // event listeners 
//  --------------------

// get all the buttons element 

var colorButtonElements = document.querySelectorAll('.ColorControls input');

colorButtonElements.forEach((button) => {

button.addEventListener('click', () => {
     var color = button.value; 
	 var costumesWithColor = getCostumesWithColor(color);
	//  console.log(costumesWithColor);
	 insertCostumes(costumesWithColor);
     });
});