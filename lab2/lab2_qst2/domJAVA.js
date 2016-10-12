let COL = 101;

//drawCells
drawCell = (color) =>{
		let body = document.getElementsByTagName("body")[0];

		let cellEl = document.createElement("div");

		cellEl.setAttribute("style", "margin: auto; display: inline-block; background-color: " + color);
		cellEl.style.width = "8px";
		cellEl.style.height = "8px";

		body.appendChild(cellEl);
};

//randomly generate the first row of cells
cellBoolInit = (cellBool) => {

	//generate a random variable to decide wether cell is active or inactive
	for (let i = 0; i < COL; i++) {
		if(Math.floor((Math.random() * 10))%6 === 0){
			cellBool[i] = false;
		}
		else{
			cellBool[i] = true;
		}
	}

	return cellBool;
};

insertLineBreak =() => {
	let body = document.getElementsByTagName("body")[0];

	let brEl = document.createElement("br");

	body.appendChild(brEl);
};


startGrid = () => {
	let cellBool = [];
	let cellBoolTemp = [];

	//Hide the HTML button
	let button = document.getElementById("startButton");
	button.setAttribute("style", "visibility: hidden;");

	insertLineBreak();
	//initialize boolian array
	cellBool = cellBoolInit(cellBool);

	//traverse rows
	for (let i = 0; i < COL; i++) {

		//draw active and inactive cells
		if(cellBool[i] === true) {
			drawCell("#0033cc");
		}else{
			drawCell("#33ff9c");
		}
	}

	insertLineBreak();

	for (let j = 0; j < 50; j++) {
	
		for (let i = 0; i < COL; i++){
			//i is the direct cell
			leftCell = (i-1)%COL;
			rightCell = (i+1)%COL;
			cellWeight = 0;

			//I will assign a weight value to each cell as 7, 2, 1 for direct, left, right cells respectively
			//These are 3 prime numbers that add up to 10 and will not add up to the same number more than once
			if(cellBool[i] === true){
				cellWeight+=7;
			}
			if(cellBool[leftCell] === true){
				cellWeight+=2;
			}
			if(cellBool[rightCell] === true){
				cellWeight+=1;
			}

			if(cellWeight === 9 || cellWeight === 6 || cellWeight === 0){ //new cell is inactive
				cellBoolTemp[i] = false;
			}
			else{ //new cell is active
				cellBoolTemp[i] = true;
			}

			//draw active and inactive cells
			if(cellBoolTemp[i] === true) {
				drawCell("#0033cc");
			}else{
				drawCell("#33ff9c");
			}
		}

		cellBool = cellBoolTemp;
		insertLineBreak();
	}
};