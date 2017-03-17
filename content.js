// This will create/refresh the duckduckgo iframe and create it on first call
function refresh_ddg_iframe(query, imageSearch, videoSearch){
	if (!window.ddg_iframe){
		window.ddg_iframe = document.createElement("iframe");
		window.ddg_iframe.id = "duckduckgo-iframe";
		document.body.appendChild(window.ddg_iframe)
	}

	if(query) {
		window.ddg_iframe.src = "https://duckduckgo.com/?" + query + (imageSearch ? "&ia=images" : "") + (videoSearch ? "&ia=videos" : "");
	}
}

// Initial state: get info from the URL
const q = window.location.href.match(/q=[^&?#]*/);
const imageSearch = /tbm=isch/.test(window.location.href);
const videoSearch = /tbm=vid/.test(window.location.href);
refresh_ddg_iframe(q, imageSearch, videoSearch);

// Use the Google input box to reload the ddg iframe
const google_input_box = document.querySelector('input[name="q"]');
google_input_box.addEventListener('change', _=>{
	refresh_ddg_iframe('q='+google_input_box.value, null, null);
});
