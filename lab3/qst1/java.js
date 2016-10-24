let controller = [0,0,'+'];

const init = () => {
	let buttons = document.getElementsByClassName("flex-item");
	
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].onclick = function () { calcOperation(buttons[i].innerHTML); };
		//calcOperation('buttons[i].innerHTML');
	};
};

const calcOperation = (operator) => {

	console.log(operator);
	
		switch(operator) {
			case '+':
				console.log(operator);
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
			case 'C':
				updateController(0,0,'+');
				console.log(operator);
				break;
		}
		
};

const updateController = (x, y, z) =>{
	controller[0]=x;
	controller[1]=y;
	controller[2]=z;
};

const printController = () =>{
	console.log(controller);
};