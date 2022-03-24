'use strict';

// button selecting start here
const formElm = document.querySelector('form');
const p1BtnElm = document.querySelector('.player1Btn');
const p2BtnElm = document.querySelector('.player2Btn');
const submintBtnElm = document.querySelector('.submitBtn');
const inputElm = document.querySelector('.input');
const resetBtn = document.querySelector('.resetBtn');
// main score
//Default iamge start here
let deafultImg1Elm = document.querySelector('.dice-1 img');
let deafultImg2Elm = document.querySelector('.dice-2 img');

const mainScoreElm = document.querySelector('.main-score');
const dice1ImgElm = document.querySelector('.diceImage-1');
const dice2ImgElm = document.querySelector('.diceImage-2');
const p1ScoreElm = document.querySelector('.p1ScoreElm');
const p2ScoreElm = document.querySelector('.p2ScoreElm');
// my javaScript html
const invalidElm = document.querySelector('.invalid');
//  traking value 
let mainScore = 10;
let turn = 'player1';
let p1Score = 0;
let p2Score = 0;
// data layer
mainScoreElm.textContent = mainScore;
p1ScoreElm.textContent = p1Score;
p2ScoreElm.textContent = p2Score;


// random number genarate start here
submintBtnElm.addEventListener('click', (e) => 
{
	e.preventDefault();
	mainScore = Number(inputElm.value);
	// view layer
	mainScoreElm.textContent = mainScore;
	inputElm.value = '';
	reuseFun()
});

function successMessagep1()
{
	formElm.insertAdjacentHTML('afterend','<img class="invalid" style="width:200px; height:200px"  src="image/success-message.png" alt="image is  not">');
}
function successMessageP2()
{
	formElm.insertAdjacentHTML('afterend','<img class="invalid" style="width:200px; height:200px" src="image/success-message.png" alt="image is  not">');
}

function failureMess()
{
	formElm.insertAdjacentHTML('afterend','<img class="failures" style="width:200px; height:200px"  src="image/failure-emoji.webp" alt="image is  not">');
}

p1BtnElm.addEventListener('click', (e) => 
{
	e.preventDefault();

	let play1 = Math.floor(Math.random() * 6 + 1);
	const  play1Dice = `image/dice/dice-${play1}.png`;
	dice1ImgElm.setAttribute('src',play1Dice);

	if(turn === 'player1')
	{
		p1BtnElm.setAttribute('disabled','disabled');
		p2BtnElm.removeAttribute('disabled');
		turn = 'player2';
	}
	// value store start here 
	p1Score += play1;
	p1ScoreElm.innerText = p1Score;
	if(mainScore === p1Score)
	{
		successMessagep1();
		successTest();
	}
});


p2BtnElm.addEventListener('click',(e) =>
{
	e.preventDefault();

	
	let play2 = Math.ceil(Math.random() * 6);
	const play2Dice = `image/dice/dice-${play2}.png`;
	dice2ImgElm.setAttribute('src', play2Dice);

	if(turn === 'player2')
	{
		p2BtnElm.setAttribute('disabled','disabled');
		p1BtnElm.removeAttribute('disabled');
		turn = 'player1';
	}
	p2BtnElm.setAttribute('disabled','disabled');

	// value store start here 
	p2Score += play2;
	p2ScoreElm.innerText = p2Score;
	if(mainScore === p2Score)
	{
		successMessageP2();
		successTest();
	}
})

// btn1 start here

function reuseFun()
{
	 turn = 'player1';
	 p1Score = 0;
	 p2Score = 0;

	mainScoreElm.textContent = mainScore;
	p1ScoreElm.textContent = p1Score;
	p2ScoreElm.textContent = p2Score;
}

function successTest()
{
	mainScore = 10;
	reuseFun();
}

// reset button start here 

resetBtn.addEventListener('click',(e) => 
{
	e.preventDefault();
	document.querySelector('.failures').remove();
})
resetBtn.addEventListener('click',(e) => 
{
	e.preventDefault();
	reuseFun();
	dice1ImgElm.setAttribute('src', `image/dice/dice-1.png`);
	dice2ImgElm.setAttribute('src', `image/dice/dice-1.png`);
	document.querySelector('.invalid').remove();
})
