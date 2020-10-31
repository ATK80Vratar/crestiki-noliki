let char="x";
let s=1;

let one=document.getElementById('one');
let two=document.getElementById('two');
let three=document.getElementById('three');
let four=document.getElementById('four');
let five=document.getElementById('five');
let six=document.getElementById('six');
let seven=document.getElementById('seven');
let eight=document.getElementById('eight');
let nine=document.getElementById('nine');
function game(argument) {
	if (s%2==1) {
		char="x"
	} else {
		char='0'
	}
	if (document.getElementById(argument).innerHTML=='') {document.getElementById(argument).innerHTML=char;s++;check()}
	

}
function check(argument) {
	if (one.innerHTML=='0' && two.innerHTML=='0' && three.innerHTML=='0') {
		alert('0 win')
location.reload();
	}

		if (four.innerHTML=='0' && five.innerHTML=='0' && six.innerHTML=='0') {
		alert('0 win')
location.reload();
	}

		if (seven.innerHTML=='0' && eight.innerHTML=='0' && nine.innerHTML=='0') {
		alert('0 win')
location.reload();
	}

		if (one.innerHTML=='0' && four.innerHTML=='0' && seven.innerHTML=='0') {
		alert('0 win')
location.reload();
	}

		if (two.innerHTML=='0' && five.innerHTML=='0' && eight.innerHTML=='0') {
		alert('0 win')
location.reload();
	}

		if (three.innerHTML=='0' && six.innerHTML=='0' && nine.innerHTML=='0') {
		alert('0 win')
location.reload();
	}

		if (one.innerHTML=='0' && five.innerHTML=='0' && nine.innerHTML=='0') {
		alert('0 win')
location.reload();
	}

		if (three.innerHTML=='0' && five.innerHTML=='0' && seven.innerHTML=='0') {
		alert('0 win')
location.reload();
	}

		if (one.innerHTML=='x' && two.innerHTML=='x' && three.innerHTML=='x') {
		alert('x win')
location.reload();
	}

		if (four.innerHTML=='x' && five.innerHTML=='x' && six.innerHTML=='x') {
		alert('x win')
location.reload();
	}

		if (seven.innerHTML=='x' && eight.innerHTML=='x' && nine.innerHTML=='x') {
		alert('x win')
location.reload();
	}

		if (one.innerHTML=='x' && four.innerHTML=='x' && seven.innerHTML=='x') {
		alert('x win')
location.reload();
	}

		if (two.innerHTML=='x' && five.innerHTML=='x' && eight.innerHTML=='x') {
		alert('x win')
location.reload();

	}

		if (three.innerHTML=='x' && six.innerHTML=='x' && nine.innerHTML=='x') {
		alert('x win')
location.reload();
	}

		if (one.innerHTML=='x' && five.innerHTML=='x' && nine.innerHTML=='x') {
		alert('x win')
location.reload();
	}
		
		if (three.innerHTML=='x' && five.innerHTML=='x' && seven.innerHTML=='x') {
		alert('x win')
location.reload();

	}
}
function start(argument) {
	document.getElementById('start-game').style.height ='0px'
	
}