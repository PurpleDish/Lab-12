(function () {
    'use strict';
	document.addEventListener('click', changeTabs);


	function changeTabs (event) {
		if (event.target.className === 'nav-link') {
			const current = document.getElementsByClassName('nav-link active')
			current[0].className = 'nav-link'

			fetch('planets.json')
			 .then(response => response.json())
			 .then(json => {
			 newPlanet(json, event.target.id)
			})
		}
	}

	function newPlanet(json, id) {
		const next = document.getElementById(id)
		next.className = 'nav-link active'
		const planet = json[id.match(/\d+/)-1]
		const information = document.getElementById('information')
		while(information.childNodes[7].firstElementChild) {
			information.childNodes[7].firstElementChild.remove()
		}
		for (let stat in planet.summary) {
			let title = document.createElement("li")
			let content = document.createElement("b")

			content.innerText = stat+": "
			title.innerText = planet.summary[stat]

			title.insertBefore(content, title.firstChild)
			information.childNodes[7].appendChild(title)
		}
		
		information.childNodes[1].innerText = planet.name
		information.childNodes[5].innerText = planet.details
	}
}());
