console.log("iife-xhr.js");

var carnTest;

// var Predator = (function() {



	function showCarnivores (carnivores) {
			

			

			console.log("carnivores/iife", carnivores);

			// document.getElementById("carnivores").innerHTML = `${carnivores}`

			
			logCarnTest();
			// document.getElementById("carnivores").innerHTML = theMeat;


		  carnivores.forEach(function (element) {
		  	document.getElementById("carnivores").innerHTML +=  `<p>Animal: ${element.Name}</p>
		  														<p>Habitat: ${element.Habitat}</p>`
		  });
	}

	// function showHerbivores (herbivores) {

		

	// 	console.log("herbivores/iife", herbivores);
	//   // herbivores.forEach(function (element) {
	//   // 	document.getElementById("herbivores").innerHTML =  `<p>Animal: ${element.Name}</p>
	//   // 														<p>Habitat: ${element.Habitat}</p>`
	//   // });
	// }

// let tester = Predator.loadCarnivores();
// console.log("tester", tester);

// // // showCarnivores();
// Predator.loadCarnivores();
// Predator.loadHerbivores();


function functionThatDoesStuff (theInput) {
	console.log("theInput", theInput);
	var toPrint = theInput;
	document.getElementById("tester").innerHTML = `${toPrint}`;
}



var newtest = Predator.sendNotice(functionThatDoesStuff);
// document.getElementById("carnivores").innerHTML = `${newtest}`
console.log("newtest", newtest);


carnTest = Predator.loadCarnivores(showCarnivores);
console.log("carnTest1", carnTest);
// console.log("tester", tester);

// })();

function logCarnTest (){
	console.log("carnTest2", carnTest);
};