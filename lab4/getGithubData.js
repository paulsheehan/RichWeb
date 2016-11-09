let err = 0;

const start = () => {

	//if there is an error message from a failed username search then remove it
	if(err > 0) {
		removeErr();
		err = 0;
	}

	//get the text that the user searched
	let username = document.getElementById("username").value;

	//base GitHub API endpoint
	let usernameEndpoint = "https://api.github.com/users/"
	//build endpoint by adding users searched text
	usernameEndpoint = usernameEndpoint.concat(username);

	//build repo endpoint by adding /repos
	let repoEndpoint = usernameEndpoint.concat("/repos");

	//fetch the users data
	fetchGit(usernameEndpoint, "u");
	//fetch the users REPO data
	fetchGit(repoEndpoint, "r");
};

const fetchGit = (endpoint, content) => {

	//our header including CORS
	var options = { method: 'GET',
               mode: 'cors',
               cache: 'default' 
    };

    //calls fetch whenLoaded is a promise
	const whenLoaded = fetch(endpoint, options);

	whenLoaded.then((response) => {
		if(response.ok) {	//if the repsonce is good
			response.json().then((data) => {
				//I am calling fetch twice so I need to have two outcomes hence the if statement
				if (content === "u") {
					buildUser(data);
				} else {
					buildRepo(data);
				}
			});
		}else {
			//user is not found
			if (content === "u"){
				//display a failed username search error message
				err++;
				makeNotFoundError();
			}
			
		}
	})
	.catch((error) => {
		//logs the api error
		console.log(error.message);
	});
};

//applies github users data to the DOM
const buildUser = (gUser) => {
	let profilePictureUrl = gUser.avatar_url;

	let imageElement = document.getElementById("profilePicture");
	imageElement.src=profilePictureUrl;

	let leftColumnElements = document.getElementsByClassName("left-column-item");

	leftColumnElements[0].textContent = leftColumnElements[0].textContent.concat(gUser.name);
	leftColumnElements[1].textContent = leftColumnElements[1].textContent.concat(gUser.login);
	leftColumnElements[2].textContent = leftColumnElements[2].textContent.concat(gUser.location);
	leftColumnElements[3].textContent = leftColumnElements[3].textContent.concat(gUser.email);
	leftColumnElements[4].textContent = leftColumnElements[4].textContent.concat(gUser.public_gists);
};

//applies github repo data to the DOM
const buildRepo = (gRepo) => {
	let tempColumn = document.getElementById("tempColumn");
	let rightColumnDiv = document.getElementById("right-column");

	//hide the original empty div
	tempColumn.setAttribute("style", "visibility: hidden; position:absolute");

	//populate new div with repo data
	for (repo in gRepo) {
		rightColumnDiv.append(buildEachRepo(gRepo[repo].name, gRepo[repo].description));
	}
};

//foreach repo make an element
const buildEachRepo = (name, desc) => {

	//name
	let nameEl = document.createElement("h1");
	nameEl.textContent = "Name " + name;
	nameEl.setAttribute("class", "right-column-item");
	nameEl.setAttribute("id", "border");

	//decription
	let descEl = document.createElement("h1");
	descEl.textContent = "Description " + desc;
	nameEl.append(descEl);

	return nameEl;
};

//add error message to the DOM
const makeNotFoundError = () => {
	let errMessage = "User could not be found on GitHub";

	let errEl = document.createElement("h1");
	errEl.setAttribute("id", "error-message");
	errEl.textContent = errMessage;

	let headerEl = document.getElementById("submitSearch");
	headerEl.append(errEl);
}

//remove error message from the DOM
const removeErr = () => {
	let headerEl = document.getElementById("submitSearch");
	let errEl = document.getElementById("error-message");

	headerEl.removeChild(errEl);
}