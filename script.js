console.log("what???")

const newDiv = document.createElement('div');
const newButton = document.createElement('button');
const newParagraph = document.createElement('p');



async function loadWorld() {
	const response = await fetch('https://tinkr.tech/sdb/poly/wander');
	const documents = await response.json();
	console.log(documents); // Array of all documents
}


// Set properties
newDiv.textContent = 'Hello!';
newDiv.classList.add('my-class');

// Add to page
document.body.appendChild(newDiv);


const parent = document.querySelector('.container');
const newDiv = document.createElement('div');
newDiv.textContent = 'I am new!';

parent.appendChild(newDiv);

const timer = setInterval(function() {
  console.log("Running...");
}, 1000);

// Later, stop it:
clearInterval(timer);






