// Initial state
let operator = '';
let previousValue = '';
let currentValue = '';

// Store all components on HTML in our JS
let clear = document.querySelector('.clear');
let equal = document.querySelector('.equal');
let decimal = document.querySelector('.decimal');

let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');

let previousScreen = document.querySelector('.previous');
let currentScreen = document.querySelector('.current');

numbers.forEach((number) =>
	number.addEventListener('click', function (e) {
		handleNum(e.target.textContent);
		currentScreen.textContent = currentValue;
	})
);

operators.forEach((op) =>
	op.addEventListener('click', function (e) {
		handleOperator(e.target.textContent);
		previousScreen.textContent = previousValue + ' ' + operator;
		currentScreen.textContent = currentValue;
	})
);

/* 
This clear event listener sets all the values as blank including
the operator so that the current operator is not active and sets
the current and previous screen values as blank thus clearing the 
screen.
*/

clear.addEventListener('click', function () {
	currentValue = '';
	previousValueValue = '';
	operator = '';
	currentScreen.textContent = currentValue;
	previousScreen.textContent = currentValue;
});

equal.addEventListener('click', function () {
	if (currentValue != '' && previousValue != '') {
		calculate();
		previousScreen.textContent = '';
		if (previousValue.length <= 5) {
			currentScreen.textContent = previousValue;
		} else {
			currentScreen.textContent = previousValue.slice(0, 5) + '...';
		}
	}
});

decimal.addEventListener('click', function () {
	addDecimal();
});

// updates current value and allows users to type in a chain of numbers
function handleNum(num) {
	if (currentValue.length <= 5) {
		currentValue += num;
	}
}

/*  
    when entering a new number it stores the current number as a
    previous number and makes the current value blank ready for 
    a new value when an operator is clicked. 
 */
function handleOperator(op) {
	operator = op;
	previousValue = currentValue;
	currentValue = '';
}

function calculate() {
	// Convert strings to numbers to do math operators
	previousValue = Number(previousValue);
	currentValue = Number(currentValue);

	if (operator === '+') {
		// previous value will equal to the sum of the current
		// value and previous value. (previousValue = previousValue + currentValue)
		// same applies to others
		previousValue += currentValue;
	} else if (operator === '-') {
		previousValue -= currentValue;
	} else if (operator === '/') {
		previousValue /= currentValue;
	} else {
		previousValue *= currentValue;
	}

	if (previousValue === Infinity) {
		return (previousValue = 'BRUH');
	}

	previousValue = roundNumber(previousValue);

	// converts values to string again to display on screen
	previousValue = previousValue.toString();
	currentValue = previousValue.toString();
}

// rounds large results to fit our 5 length limit
function roundNumber(num) {
	return Math.round(num * 1000) / 1000;
}

function addDecimal() {
	if (!currentValue.includes('.')) {
		currentValue += '.';
	}
}
