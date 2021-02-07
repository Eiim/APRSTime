var settings = window.localStorage;
const main_html = "https://play.disney.com/html5/phf_spl_plt_agentprebelspy/targets/main-html.js";

//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
	function(request, sender, sendResponse) {
		console.log("Responding to storage request");
		sendResponse(settings["store.settings."+request]); // Probably bad practice, but eh
	}
);

chrome.webRequest.onBeforeRequest.addListener(
	function(details) {
		if(settings["store.settings.disabled"] == "true") return; // Honor disable checkbox
		else if(settings["store.settings.intercept"] == "false") { // Intercept only every other request
			console.log("Skipping over this interception");
			settings["store.settings.intercept"] = "true";
			return;
		}
		else {
			console.log("Attempting to intercept main-html.js");
			settings["store.settings.intercept"] = "false";
			return {redirectUrl:chrome.extension.getURL("main-html.js")};
		}
	},
	{urls: [main_html]},
	["blocking"]
);