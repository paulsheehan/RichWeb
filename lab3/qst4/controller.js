let data; //global

const start = () => {

	//stays in this function for some reason
	//so I put the rest of my functions in here
	function reqListener () {

		//global object becomes the JSON file
		data = JSON.parse(this.response);

		//qst1 - Count tasks of userID 10
		countUser10();
		//qst2 - Builds an array of userIDs sorted by incomplete tasks
		buildSortedArray();
	}

	//gets JSON from the URL using get request
	let oReq = new XMLHttpRequest();
	oReq.addEventListener("load", reqListener);
	oReq.open("GET", "http://jsonplaceholder.typicode.com/todos");
	oReq.send();
};

//qst1
const countUser10 = () => {

	let total = 0;
	let array = [];

	//foreach object in the JSON data object
	for(obj in data)
	{
		//count each task that has a userId of 10
		if(data[obj].userId === 10){
			total++;
		};
	};

	//updates DOM
	displayAnswersOnFrontEnd(total);
};

//qst2
const buildSortedArray = () => {

	//An array that holds an integer for each user, so 10 integers
	//which will count how many incomplete tasks a user has
	let taskCount = [0];
	let idTaskMap = new Map();	//[key,value]:[userId:incomplete tasks]

	let idArray = [];
	let userId;

	//for each object in the json file
	for(i in data)
	{
		if(data[i].completed === false)
		{
			//store userId from JSON to variable so I don't have to keep referencing a large data object
			userId = data[i].userId;	
			//if the userId exists in the map
			if(idTaskMap.has(userId)) {
				//increment that users corresponding incomplete task counter
				taskCount[userId]++;
				//update the existing incomplete task counter for that user
				idTaskMap.set(userId, taskCount[userId]);
			}
			//if the userId has not been came across yet
			else {	
				//add new element to the incomplete task counter
				taskCount.push(1);
				//add to map
				idTaskMap.set(userId, 1]);
			}
		}
	};

	//we now have a map of userId:incompleteTasks

	let a=[];
	//turn the map into an array because I do not like the functionality available for maps
	//its a 2d array so [[userId][tasks], [userId][tasks]...]
	a = Array.from(idTaskMap);

	//calls sort array function sortByTaskIncomplete(a)
	//returns a sorted array which gets sent to the DOM updater function
	displayAnswersOnFrontEnd(sortByTaskIncomplete(a));
};

const sortByTaskIncomplete = (map) => {
	//stores incomplete tasks
	let taskArray = [];
	//stores user Ids
	let idArray = [];

	let i;
	//fill the task array
	for(i = 0; i < map.length; i++){
		taskArray.push(map[i][1]);
	}

	//sorts the task array by highest to lowest incomplete tasks
	taskArray.sort(function(a, b){return b-a});

	let j = 0;

	//the nested loop will go through each element in task array
	//then compare that number of tasks to the tasks in our 2d array of [userId][tasks]
	//in order to find the corresponding userId from the array of sorted incomplete tasks
	while(j < taskArray.length){
		for(let i = 0; i < map.length; i++){
			if(map[i][1]===taskArray[j]) {
				idArray.push(map[i][0]);
				j++;
				map.splice(i,1);	//I remove the element that was searched each time
			}
		}
	}

	//return an array of ids sorted by incomplete tasks
	return idArray;
};

const displayAnswersOnFrontEnd = (x) => {
	let body = document.getElementsByTagName("body")[0];
	let qst1 = document.createElement("h1");

	qst1.innerHTML = x;
	body.append(qst1);
};

const print = (x) => {

	console.log(x);
};