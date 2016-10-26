let data;

const start = () => {

	function reqListener () {

		data = JSON.parse(this.response);

		countUser10();
		buildSortedArray();
	}

	let oReq = new XMLHttpRequest();
	oReq.addEventListener("load", reqListener);
	oReq.open("GET", "http://jsonplaceholder.typicode.com/todos");
	oReq.send();
	//data[5].map(print());
};

const countUser10 = () => {

	let total = 0;
	let array = [];
	let arrayoftaskcount = [];
	
	for(obj in data)
	{
		if(data[obj].userId === 10){
			total++;
		};
	};

	displayAnswersOnFrontEnd(total);
};

const buildSortedArray = () => {

	let userTasks = {};

	let taskCount = [0];
	let map = new Map();

	let idArray = [];
	let userId;

	//for each object in the json file
	for(i in data)
	{
		if(data[i].completed === false)
		{
			userId = data[i].userId;

			if(map.has(userId)) {
				taskCount[userId]++;
				map.set(userId, taskCount[userId]);
			}
			else {	
				taskCount.push(1);
				map.set(userId, taskCount[userId]);
			}
		}
	};

	let a=[];
	a = Array.from(map);

	displayAnswersOnFrontEnd(sortByTaskIncomplete(a));
};

const sortByTaskIncomplete = (map) => {
	let taskArray = [];
	let idArray = [];

	let i;
	for(i = 0; i < map.length; i++){
		taskArray.push(map[i][1]);
	}

	taskArray.sort(function(a, b){return b-a});

	let j = 0;

	while(j < taskArray.length){
		for(let i = 0; i < map.length; i++){
			if(map[i][1]===taskArray[j]) {
				idArray.push(map[i][0]);
				j++;
				map.splice(i,1);
			}
		}
	}

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