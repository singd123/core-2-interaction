
var currentRotation = 180; // Initialize to a specific angle (e.g., 180 degrees)

// Call myfunction when the page loads to set the initial rotation


function myfunction() {
  var x = 1024; // min value
  var y = 9999; // max value

  // Set the direction to be always clockwise
  var direction = 1;

  // Update the rotation based on the direction
  currentRotation += direction * (Math.floor(Math.random() * (x - y)) + y);

  document.getElementById('box').style.transform = 'rotate(' + currentRotation + 'deg)';

  var element = document.getElementById('mainbox');
  element.classList.remove('animate');

  setTimeout(function () {
    element.classList.add('animate');
    displayResult(currentRotation);
  }, 5000); // 5000 = 5 seconds
}


  
  function displayResult(rotation) {
    var numberOfOptions = 4; // Adjust this if you change the number of options
    var degreePerOption = 90;
  
    // Ensure the rotation is a positive value between 0 and 360
    rotation = (rotation % 360 + 360) % 360;
  
    // Calculate the closest boundary angle for each option
    var boundaries = Array.from({ length: numberOfOptions }, (_, index) =>
      index * degreePerOption
    );
  
    // Find the closest boundary angle
    var closestBoundary = boundaries.reduce(function (prev, curr) {
      return Math.abs(curr - rotation) < Math.abs(prev - rotation) ? curr : prev;
    });
  
    // Find the selected option based on the closest boundary angle
    var selectedOption = boundaries.indexOf(closestBoundary);
  
    var resultElement = document.getElementById('result');
    var resultText = '';
  
    switch (selectedOption) {
      case 0:
        resultText = 'Peace';
        resultElement.className = ''; // Remove existing classes
        resultElement.innerHTML = createLink('./assets/peace.html', resultText); // Create a clickable link
      break;
        break;
      case 1:
        resultText = 'Anxiety';
        resultElement.className = 'anxiety'; // Add class for Anxiety
        resultElement.innerHTML = createLink('./assets/anxiety.html', resultText); // Create a clickable link
      
        break;
      case 2:
        resultText = 'Anger';
        resultElement.className = 'anger'; // Add class for Anger
        resultElement.innerHTML = createLink('./assets/anger.html', resultText); 
        
        break;
      case 3:
        resultText = 'Fear';
        resultElement.className = 'fear'; // Remove existing classes
        resultElement.innerHTML = createLink('./assets/fear.html', resultText);
      break;
      default:
        resultText = 'Error: Invalid option';
    }
  

  }
  
    function createLink(url, text) {
        // Create a clickable link
        return '<a href="' + url + '" >' + text + '</a>';
      }