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
		for (let stat in planet.summary) {
			console.log(stat)
			let title = document.createElement("li")
			let content = document.createElement("b")
			title.innerText = stat+": "
			content.innerText = planet.summary[stat]
			title.appendChild(content)
			information.childNodes[7].appendChild(title)
		}


		information.childNodes[1].innerText = planet.name
		information.childNodes[5].innerText = planet.details

		console.log(planet)
		console.log(information.childNodes)
	}
}());
