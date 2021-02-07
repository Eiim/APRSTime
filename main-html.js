const main_html = "https://play.disney.com/html5/phf_spl_plt_agentprebelspy/targets/main-html.js";

async function getJS() {
	console.log("Getting original JS");
	let response = await fetch(main_html); // Probably good practice for once
	return await response.text();
}

getJS().then(origJS => {
	eval(origJS+"console.log('Successful game code injection');");
});

console.log("Custom main-html loaded");