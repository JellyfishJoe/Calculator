var stuff;
var inputs = [];
var numbers = [];
var operators = [];
var answer;

let paragraphInput = document.getElementById('inputDisplayText');
let paragraphStorage = document.getElementById('inputDisplayStorageText');

let inputDisplay = document.getElementById('inputDisplay').innerHTML;

let $form = document.getElementById('calculator');

let $nine = document.getElementById('nineButton');
let $eight = document.getElementById('eightButton');
let $seven = document.getElementById('sevenButton');
let $six = document.getElementById('sixButton');
let $five = document.getElementById('fiveButton');
let $four = document.getElementById('fourButton');
let $three = document.getElementById('threeButton');
let $two = document.getElementById('twoButton');
let $one = document.getElementById('oneButton');
let $zero = document.getElementById('zeroButton');

let $addition = document.getElementById('addition');
let $subtraction = document.getElementById('subtraction');
let $multiplication = document.getElementById('multiplication');
let $division = document.getElementById('division');

let $submit = document.getElementById('submit');

let $clear = document.getElementById('clear');

$nine.addEventListener('click', function(){addInput("9")});
$eight.addEventListener('click', function(){addInput("8")});
$seven.addEventListener('click', function(){addInput("7")});
$six.addEventListener('click', function(){addInput("6")});
$five.addEventListener('click', function(){addInput("5")});
$four.addEventListener('click', function(){addInput("4")});
$three.addEventListener('click', function(){addInput("3")});
$two.addEventListener('click', function(){addInput("2")});
$one.addEventListener('click', function(){addInput("1")});
$zero.addEventListener('click', function(){addInput("0")});

$addition.addEventListener('click', function(){addInput(" + ")});
$subtraction.addEventListener('click', function(){addInput(" - ")});
$multiplication.addEventListener('click', function(){addInput(" * ")});
$division.addEventListener('click', function(){addInput(" / ")});

$submit.addEventListener('click', function(){calculate()});

$clear.addEventListener('click', function(){clear()});

function addInput(stuff){
	console.log('nine was clicked');
	if(stuff == " + " || stuff == " - " || stuff == " * " || stuff == " / "){
		storeInput();
		operators.push(stuff);
		addStorage(stuff);
	} else if(stuff == " - "){
		storeInput();
		operators.push(stuff);
		addStorage(stuff);
	} else if(stuff == " * "){
		storeInput();
		operators.push(stuff);
		addStorage(stuff);
	} else if(stuff == " / "){
		storeInput();
		operators.push(stuff);
		addStorage(stuff);
	} else {
		paragraphInput.textContent += stuff;
	}
}

function addStorage(stuff){
	paragraphStorage.textContent += stuff;
}

function storeInput(n){
	console.log('input was stored');
	addStorage(paragraphInput.textContent);
	inputs.push(paragraphInput.textContent);
	console.log(inputs);
	paragraphInput.textContent = "";
}

function calculate(){
	storeInput();
	addStorage(" = ");
	console.log('calculating');
	for(i = 0; i < inputs.length; i++){
		numbers.push(parseInt(inputs[i]));
		console.log(numbers);
	}
	console.log(operators);
	for(i = 0; i < operators.length; i++){
		console.log(operators[i]);
		if(i == 0){
			if(operators[i] == " + "){
				console.log("first number is " + numbers[2 * i - 1]);
				console.log("second number is " + numbers[2 * i]);
				answer = numbers[i] + numbers[i + 1];
			} else if(operators[i] == " - "){
				answer = numbers[i] - numbers[i + 1];
			} else if(operators[i] == " * "){
				answer = numbers[i] * numbers[i + 1];
			} else if(operators[i] == " / "){
				answer = numbers[i] / numbers[i + 1];
			}
		} else{
			if(operators[i] == " + "){
				console.log("first number is " + numbers[2 * i - 1]);
				console.log("second number is " + numbers[2 * i]);
				answer = numbers[2 * i - 1] + numbers[2 * i];
			} else if(operators[i] == " - "){
				answer = numbers[2 * i - 1] - numbers[2 * i];
			} else if(operators[i] == " * "){
				answer = numbers[2 * i - 1] * numbers[2 * i];
			} else if(operators[i] == " / "){
				answer = numbers[2 * i - 1] / numbers[2 * i];
			}
		}
	}
	addStorage(answer);
}

function clear(){
	paragraphInput.textContent = "";
	paragraphStorage.textContent = "";
	inputs = [];
	numbers = [];
	operators = [];
}