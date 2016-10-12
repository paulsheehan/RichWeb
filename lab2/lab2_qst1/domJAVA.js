function createCalculator() {

	let buttonValues = ['(', ')', 'GG', '/', '7', '8', '9', 'X', '4', '5', '6', '-', '1','2', '3', '+', '0', '.', 'C', '='];

	let body = document.getElementsByTagName("body")[0];

	const hideButton = () => {

		let button = document.getElementById("displayCalcButton");

		button.setAttribute("style", "visibility: hidden;");
	};

	const makeCalculator = () => {
		let elCalc = document.createElement("div");
		elCalc.id = "#calculator";

		elCalc.setAttribute("style", "width: 250px; font-size: 100%; border: 1px solid black; \
  							padding: 10px; border-radius: 7px; margin-left: auto; margin-right: auto; \
    						display: inline-flex; flex-flow: row wrap; justify-content: space-between; \
  							font-family: Verdana;");

		body.appendChild(elCalc);

		makeCalcScreen(elCalc);
		makeButtons(elCalc);
	};

	const makeCalcScreen = (elCalc) => {
		let elCalcScreen = document.createElement("input");
		elCalcScreen.setAttribute("type", "text");
		elCalcScreen.setAttribute("placeholder", "0");
		elCalcScreen.setAttribute("style", "  font-size: 2em; text-align: right; \
									border-radius: 5px; width: 240px; height: 35px;\
  									margin-bottom: 10px; padding: 1%;");

		elCalc.appendChild(elCalcScreen);

	};

	const makeButtons = (elCalc) => {

		for (let i = 0; i < buttonValues.length; i++) {
			let elButton = document.createElement("button");
			let text = document.createTextNode(buttonValues[i]);

			elButton.appendChild(text);

			elButton.setAttribute("style", "font-size: 1.1em; border-radius: 5px; \
			width: 50px; text-align: center; padding: .5em; font-size: 1em; \
			flex-grow: 1; margin: 0 5px 5px 0;");

			elCalc.appendChild(elButton);
		}
	};

	hideButton();
	makeCalculator();

};
	
