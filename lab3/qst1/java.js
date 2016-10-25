let controller = [0,0,'+'];

let accumulatedTotal = 0;
let calculatorNumber = [];

let screen;

const init = () => {

	//get array pof button elements
	let buttons = document.getElementsByClassName("flex-item");

	//hide start button
	let startButton = document.getElementById('startButton'); 
  	startButton.setAttribute("style", "visibility: hidden;");

  	//show the calculator
	let calculator = document.getElementById("calculator");
    calculator.setAttribute("style", "visibility: visible;");

    //set screen placeholder asyncronously
	screen = document.getElementById("calcScreen");
	screen.value=accumulatedTotal;

	//add onClick listeners to all of the calculator buttons
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].onclick = function () { calcOperation(buttons[i].innerHTML); };
		//calcOperation('buttons[i].innerHTML');
	};
};

const calcOperation = (operator) => {

	//console.log(operator);
	screen.value=accumulatedTotal;
		switch(operator) {
			case '+':
				updateController();
				break;
			case '-':
				console.log(operator);
				break;
			case '/':
				console.log(operator);
				break;
			case 'X':
				console.log(operator);
				break;
			//calls updateController()
			case 'C':
				updateController(0,0,'+');
				console.log(operator);
				break;
			case '±':
				console.log(operator);
				break;
			case '(':
				console.log(operator);
				break;
			case ')':
				console.log(operator);
				break;
			case '=':
				printCalculatorNumber();
				printAcumulatedNumber();
				break;
			default:
				updateCalculatorNumber(operator);
				break;		
		}
		
};

//turns the accumulatedTotal array of input numbers into a total integer when the user clicks "+"
const intifyCalculatorNumber = () => {

	let intCalculatorNumber = 0;

	for(let i = 0; i < calculatorNumber.length; i++)
	{
		//total = (X*10) + calculatorNumber
		intCalculatorNumber = (calculatorNumber[i]*10) + intCalculatorNumber;
	
	} 
	console.log(intCalculatorNumber);
	return intCalculatorNumber;
};

//initiates the process of turning the users input number to an integer to store in the calculator
const updateController = () =>{
	accumulatedTotal = intifyCalculatorNumber();
};

//an array holds the current number in the calculator so we push the new number onto the top of the array
const updateCalculatorNumber = (x) => {
	calculatorNumber.push(x);
}

const printCalculatorNumber = () =>{
	console.log(calculatorNumber);
};

const printAcumulatedNumber = () =>{
	console.log(accumulatedTotal);
};