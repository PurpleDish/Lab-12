(function () {
    'use strict';
    const url = 'https://jsonplaceholder.typicode.com/users'
 	const proms = []
    proms.push(fetch(`${url}`))
    Promise.all(proms)
    .then(results => results.map(res => res.json().then(addData)))

    function addData(json) {
 		const output = document.getElementById('output')
 		output.style.width = "100%"
 		output.style.display = "flex"
 		output.style["align-items"] = "center"
 		output.style["justify-content"] = "center"
 		output.style.width = "100%"


 		for (var person in json) {
 			console.log(json[person]["name"])
	 		var newDiv = document.createElement("div")
	 		newDiv.className = 'user'
		    const id = document.createElement("h1")
		    id.innerText = json[person].name

		    const name = document.createElement("p")
		    name.innerText = json[person].company.catchPhrase

		    output.appendChild(newDiv)
		    newDiv.appendChild(id)
		    newDiv.appendChild(name)
 		}

    }
}());
