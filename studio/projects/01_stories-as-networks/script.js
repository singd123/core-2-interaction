
var currentRotation = 180; // Initialize to a specific angle (e.g., 180 degrees)

// Call myfunction when the page loads to set the initial rotation

function myfunction() {
    var minRotation = 1024; // Minimum rotation
    var maxRotation = 9999; // Maximum rotation
  
    // Randomly choose a rotation value within the specified range
    var randomRotation = Math.floor(Math.random() * (maxRotation - minRotation + 1)) + minRotation;
  
    // Adjust currentRotation with the new randomRotation ensuring it's always increasing
    currentRotation += randomRotation;
  
    // Normalize currentRotation to a value between 0 and 360 to determine its final position
    var normalizedRotation = currentRotation % 360;
  
    // Check if the normalized rotation falls within the restricted range (315 to 360 degrees)
    // If so, adjust the rotation to stop just before 315 degrees
    if (normalizedRotation > 315) {
      // Calculate how much to subtract to avoid landing within the restricted range
      var excess = normalizedRotation - 315;
      currentRotation -= excess;
    }
  
    // Proceed to rotate the box and handle the animation and result display
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
    var degreePerOption = 360 / numberOfOptions;
  
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