var stuff;
var numbers = [];

var paragraphInput = document.getElementById('inputDisplayText');
var paragraphStorage = document.getElementById('inputDisplayStorageText');

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

function addInput(stuff){
	console.log('nine was clicked');
	if(stuff == " + " || stuff == " - " || stuff == " * " || stuff == " / "){
		storeInput();
		addStorage(stuff);
	} else {
		paragraphInput.textContent += stuff;
	}
}

function addStorage(stuff){
	paragraphStorage.textContent += stuff;
}

function storeInput(){
	console.log('input was stored');
	addStorage(paragraphInput.textContent);
	numbers.push(paragraphInput.textContent);
	console.log(numbers);
	paragraphInput.textContent = "";
}

function calculate(){
	console.log('calculating');
	storeInput()
}


//Need to finish calculate function