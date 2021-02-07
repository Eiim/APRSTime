var settings = window.localStorage;


//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
	function(request, sender, sendResponse) {
		sendResponse(settings["store.settings."+request]); // Probably bad practice, but eh
	}
);