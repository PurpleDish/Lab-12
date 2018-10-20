(function () {
    'use strict';
	const url = 'https://picsum.photos/200/300/?random'
	const loading = document.getElementById('loading')
	function reload (event){
		if(event.target.className === 'btn btn-success') {
			removeImages()
			loading.style.display = 'block'
		    const proms = []
			proms.push(fetch(url))
		    proms.push(fetch(url))
		    proms.push(fetch(url))
		    proms.push(fetch(url))
		    proms.push(fetch(url))
		     
		    Promise.all(proms)
		        .then(results => results.map(response => response.blob()
				.then(image => {
					addImage(image)
		  })))
		}
		loading.style.display = 'none'
	}
	function removeImages(){
		const images = document.getElementsByClassName('img-post')
		if (images.length === 1) {
			return
		}
		while (images[1]) {
			images[1].remove()
		}
	}

	function addImage (blob) {
		var url = URL.createObjectURL(blob);
		const newDiv = document.createElement("div")
		newDiv.className = 'img-post'
 		const fetched = document.createElement("p")
	    fetched.innerText = `Fetched at ${new Date().getHours() + ":" + new Date().getMinutes()}` 

		const output = document.getElementById('output')
		const image = document.createElement("IMG")
		image.src = url
		output.appendChild(newDiv)
		newDiv.appendChild(image)
		newDiv.appendChild(fetched)
	}

	document.addEventListener('click', reload);
}());
