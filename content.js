const q = window.location.href.match(/q=[^&?#]*/);
const imageSearch = /tbm=isch/.test(window.location.href);
const videoSearch = /tbm=vid/.test(window.location.href);

if(q) {
	const iframe = document.createElement("iframe");
	iframe.id = "duckduckgo-iframe";
	iframe.src = "https://duckduckgo.com/?" + q + (imageSearch ? "&ia=images" : "") + (videoSearch ? "&ia=videos" : "");
	document.body.appendChild(iframe)
}