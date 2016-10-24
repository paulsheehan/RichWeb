let controller = [1,2,'+'];

const calcOperation = (x,y,operator) => {

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
		}
		
};

const updateController = () =>{
	controller[0]=5;
	controller[1]=4;
	controller[2]='-';
};

const printController = () =>{
	console.log(controller);
};