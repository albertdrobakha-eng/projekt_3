console.log("what???")

async function loadWorld() {
	const response = await fetch('https://tinkr.tech/sdb/poly/wander');
	const documents = await response.json();
	console.log(documents); // Array of all documents
}