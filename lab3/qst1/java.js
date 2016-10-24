let controller = [0,0,'+'];

let accumulatedTotal = 0;
let calculatorNumber = [];

const init = () => {
	let buttons = document.getElementsByClassName("flex-item");
	
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].onclick = function () { calcOperation(buttons[i].innerHTML); };
		//calcOperation('buttons[i].innerHTML');
	};
};

const calcOperation = (operator) => {

	//console.log(operator);

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

const updateCalculatorNumber = (x) => {
	calculatorNumber.push(x);
}

const printCalculatorNumber = () =>{
	console.log(calculatorNumber);
};

const printAcumulatedNumber = () =>{
	console.log(accumulatedTotal);
};