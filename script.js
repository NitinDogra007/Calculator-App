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
	})
);

function handleNum(num) {
	console.log(num);
}
