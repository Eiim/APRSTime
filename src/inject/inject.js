var LSWSIP;

var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
		
		chrome.runtime.sendMessage("disabled", function(response) {
			if(response == "true") {
				console.log("APRSTime disabled!")
			} else {
				console.log("APRSTime enabled!")
				chrome.runtime.sendMessage("ip", function(response) {
					LSWSIP = response.slice(1, -1);
					console.log(LSWSIP);
				});
			}
		});
		
		console.log("Hello. This message was sent from scripts/inject.js");

	}
}, 10);