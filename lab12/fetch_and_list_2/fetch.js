(function () {
    'use strict';
    let url = 'https://jsonplaceholder.typicode.com/users'
 	const proms = []
    proms.push(fetch(url))
    Promise.all(proms)
    .then(results => results.map(res => res.json().then(addUsers)))

    url = 'https://jsonplaceholder.typicode.com/posts'
    proms.shift()
	proms.push(fetch(url))
    Promise.all(proms)
    .then(results => results.map(res => res.json().then(addPosts)))

    function addUsers(json) {
 		const output = document.getElementById('output')
 		output.style.width = "100%"
 		output.style.display = "flex"
 		output.style["align-items"] = "center"
 		output.style["justify-content"] = "center"
 		output.style.width = "100%"


 		for (var person in json) {
	 		const newDiv = document.createElement("div")
	 		newDiv.className = 'user'
	 		newDiv.id = json[person].id

	 		const newU = document.createElement("u1")
	 		newU.className = 'posts'

		    const id = document.createElement("h1")
		    id.innerText = json[person].name

		    const name = document.createElement("p")
		    name.innerText = json[person].company.catchPhrase

		    output.appendChild(newDiv)
		    newDiv.appendChild(id)
		    newDiv.appendChild(name)
		    newDiv.appendChild(newU)
 		}
    }
     function addPosts(json) {
 		for (var post in json) {
			const user = document.getElementById(json[post].userId)
 			const newLi = document.createElement("li")
 			
 			newLi.className = 'post'
 			newLi.innerText = json[post].title

 			user.appendChild(newLi)
 		}

    }
}());
