console.log("Predator.js");

var Predator = (function (getJSONdata) {

  var carnivores = [];
  var herbivores = [];

  return {
		// sendNotice: function (someinfo) {

		// 	var theMeat = "HAM"; 
		// 	// var newMeat = someinfo;
  //   	console.log("sendNotice triggered");
  //   	console.log("someinfo", someinfo);

		// 	var someinforesult = someinfo(theMeat);    	

		// 	return someinfo;
  //   	// return theMeat;
  //   	// return newMeat;
  //   },

    loadCarnivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();

      loader.addEventListener("load", function (event) {
      	// Set the value of the private array

      	console.log("messages loaded successfully");
      	carnivores = JSON.parse(this.responseText);
      	// console.log("carnivores", carnivores);
      	// Invoke the callback function so that the caller knows
      	// that the process is complete. Make sure to pass the 
      	// carnivore array as an argument.

      console.log("callbackToInvoke", callbackToInvoke);
			let carnAlert = callbackToInvoke(carnivores);
			// console.log("carnAlert", carnAlert);

			// return callbackToInvoke;

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
        console.log("herbivores", herbivores);

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

// var thisReturn = Predator.loadCarnivores();
// console.log("thisReturn", thisReturn);