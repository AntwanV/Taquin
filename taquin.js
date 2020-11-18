//Projet Taquin //
const pool = [1,2,3,4,5,6,7,8,9];
let elt1 = document.getElementById('image1');
let elt2 = document.getElementById('image2');
let elt3 = document.getElementById('image3');
let elt4 = document.getElementById('image4');
let elt5 = document.getElementById('image5');
let elt6 = document.getElementById('image6');
let elt7 = document.getElementById('image7');
let elt8 = document.getElementById('image8');
let elt9 = document.getElementById('image9');
let btnReset = document.getElementsByClassName("reset")[0];
let btnHideNbrs = document.getElementsByClassName("hideNumbers")[0];
let btnHideImages = document.getElementsByClassName("hideImages")[0];
let nbrCoups;

btnReset.onclick = function() {game();}
btnHideNbrs.onclick = function() {hideNumbers();}

function hideNumbers() {
	if (elt1.children[0].classList.contains("ghost")) {
		for (let i =1;i < 9; i++) {
			 document.getElementById('image'+JSON.stringify(i)).children[0].classList.remove('ghost');
		}
	}else{
		for (let i =1;i < 9; i++) {
			 document.getElementById('image'+JSON.stringify(i)).children[0].classList.add('ghost');
		}
	}
}

function chrono() {
	let tps= 0;
	setInterval((tps) => (tps+1),1000);
}

function shuffle19() {
	let newPool = [];
	var randomnumber;
	while (newPool.length != 9) {
		randomnumber = Math.floor(Math.random()*9)+1;
		if (! newPool.includes(randomnumber)) {
			newPool.push(randomnumber);
		}	
	}
	return newPool;
}

function init() { 					
	var newPool = shuffle19();
	let indexNewPool;
	for (let i = 1; i<9; i++ ) {
		indexNewPool = newPool[i];
		exchangeId('image'+JSON.stringify(i),'image'+JSON.stringify(indexNewPool));
	}
	replaceNumbers();		
}
// 		//

function exchangeId(Id1,Id2) {
	let el1 = document.getElementById(Id1);
	let el2 = document.getElementById(Id2);
	if (el1.classList.contains("movable")) {
		if (el2.classList.contains("ghost")) {
			el2.classList.remove("ghost");
			el1.classList.add("ghost");
		}
		let buffer1 = el1.id;
		let buffer2 = el2.id;
		el1.id = "nimp"; 			// On remplace la class de 1 par 2
		el2.id = buffer1;
		el1.id= buffer2;
		nbrCoups++;
		document.getElementsByClassName("compteur")[0].innerHTML = nbrCoups;
		replaceNumbers();
		changeAllMovable();
		win();
	}
}

function replaceNumbers() {
	for (let i = 1; i<10; i++ ) {
		 document.getElementById('image'+JSON.stringify(i)).children[0].innerHTML = i;
	}
}

function ghostPosition() {
	let pos = 100;
	const conteneur = document.getElementsByClassName("im");
	for (let i = 0; i<9; i++) {
		if (conteneur[i].classList.contains("ghost")) {
			pos = i;
		}
	}
	return pos+1;
}

function position(Id1) {
	let pos;
	const conteneur = document.getElementsByClassName("im");
	for (let i = 0; i<9; i++) {
		if (conteneur[i].id == Id1) {
			pos = i;
		}
	}
	return pos+1;
}

function changeMovable(Id1) {
	let ghost= ghostPosition();
	let a = position(Id1);
	switch (a) {
		case 1:
			if (ghost ===2 || ghost ===4) {
				document.getElementById(Id1).classList.add("movable"); }
			else {
				document.getElementById(Id1).classList.remove("movable");
			}
			break;
		
		case 2:
			if (ghost ===1 || ghost ===3 || ghost ===5) {
				document.getElementById(Id1).classList.add("movable"); }
			else {
				document.getElementById(Id1).classList.remove("movable");
			}
			break;
			
		case 3:
			if (ghost ===2 || ghost ===6) {
				document.getElementById(Id1).classList.add("movable");}
			else {
				document.getElementById(Id1).classList.remove("movable");
			}
			break;
			
		case 4:
			if (ghost ===1 || ghost ===5 || ghost ===7) {
				document.getElementById(Id1).classList.add("movable");}
			else {
				document.getElementById(Id1).classList.remove("movable");
			}
			break;
			
		case 5:
			if (ghost ===2 || ghost ===4 || ghost ===6 || ghost ===8) {
				document.getElementById(Id1).classList.add("movable");}
			else {
				document.getElementById(Id1).classList.remove("movable");
			}
			break;
			
		case 6:
			if (ghost ===3 || ghost ===5 || ghost ===9) {
				document.getElementById(Id1).classList.add("movable");}
			else {
				document.getElementById(Id1).classList.remove("movable");
			}
			break;
			
		case 7:
			if (ghost ===4 || ghost ===8) {
				document.getElementById(Id1).classList.add("movable");}
			else {
				document.getElementById(Id1).classList.remove("movable");
			}
			break;
			
		case 8:
			if (ghost ===5 || ghost ===7 || ghost===9) {
				document.getElementById(Id1).classList.add("movable");}
			else {
				document.getElementById(Id1).classList.remove("movable");
			}
			break;

		case 9:
			if (ghost ===6 || ghost ===8) {
				document.getElementById(Id1).classList.add("movable");}
			else {
				document.getElementById(Id1).classList.remove("movable");
			}
			break;
			
		default:
			console.log('erreur');
	}
}

function changeAllMovable() {
	for (let i=1; i<10; i++) {
		changeMovable('image'+JSON.stringify(i));
	}
}
function win() {
	let test=0;
	for (let i=1; i<10; i++) {
		if (position('image'+JSON.stringify(i)) == i) {
			test +=1;
		}
	}
	if (test==9) {
		var result = confirm( "Gagné !! On rejoue ?" );
    	if ( result ) {
     	 window.open("index.html", "_top");
     	}
	}
}
function game() {
	init();
	nbrCoups =0;
	changeAllMovable();
	replaceNumbers();
	elt1.onclick = function() {exchangeId(document.getElementsByClassName("im")[0].id,'image9');}
	elt2.onclick = function() {exchangeId(document.getElementsByClassName("im")[1].id,'image9');}
	elt3.onclick = function() {exchangeId(document.getElementsByClassName("im")[2].id,'image9');}
	elt4.onclick = function() {exchangeId(document.getElementsByClassName("im")[3].id,'image9');}
	elt5.onclick = function() {exchangeId(document.getElementsByClassName("im")[4].id,'image9');}
	elt6.onclick = function() {exchangeId(document.getElementsByClassName("im")[5].id,'image9');}
	elt7.onclick = function() {exchangeId(document.getElementsByClassName("im")[6].id,'image9');}
	elt8.onclick = function() {exchangeId(document.getElementsByClassName("im")[7].id,'image9');}
	elt9.onclick = function() {exchangeId(document.getElementsByClassName("im")[8].id,'image9');}
}

game();