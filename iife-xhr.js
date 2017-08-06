console.log("iife-xhr.js");

function showCarnivores (carnivores) {

	carnivores.forEach(function (element) {
	document.getElementById("carnivores").innerHTML +=  `<div class="animalCard">
		  														<p>Animal: ${element.Name}</p>
		  														<p>Habitat: ${element.Habitat}</p>
		  														</div>`
	});
}

function showHerbivores (herbivores) {

	herbivores.forEach(function (element) {
	document.getElementById("herbivores").innerHTML +=  `<div class="animalCard">
		  													<p>Animal: ${element.Name}</p>
		  													<p>Habitat: ${element.Habitat}</p>
		  													</div>`
	});
}

Predator.loadCarnivores(showCarnivores);

Predator.loadHerbivores(showHerbivores);
