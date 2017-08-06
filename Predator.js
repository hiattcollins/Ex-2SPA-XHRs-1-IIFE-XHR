console.log("Predator.js");

var Predator = (function (getJSONdata) {

  var carnivores = [];
  var herbivores = [];

  return {
    loadCarnivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();

      loader.addEventListener("load", function (event) {

      	console.log("messages loaded successfully");
      	carnivores = JSON.parse(this.responseText);

				callbackToInvoke(carnivores);
      });

      loader.addEventListener("error", function (event) {
        	console.log("dataFailed", event);
      });

      loader.open("GET", "carnivores.json");
			loader.send();

			return callbackToInvoke;
    },

    loadHerbivores: function (callbackToInvoke) {
    	var loader = new XMLHttpRequest();

    	loader.addEventListener("load", function (event) {
        	
      	console.log("messages loaded successfully");
        herbivores = JSON.parse(this.responseText);

        callbackToInvoke(herbivores);
    	});

    	loader.addEventListener("error", function (event) {
        	console.log("dataFailed", event);
      });

      loader.open("GET", "herbivores.json");
			loader.send();

			return callbackToInvoke;
    }
  }

  return getJSONdata;

})(Predator || {});
