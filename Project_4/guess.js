let random=parseInt((Math.random()*10)+1);

const submit=document.querySelector('#sub');
const userInput=document.querySelector('#guessField');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.remain');
const lowHigh=document.querySelector('.hilow');
const startOver=document.querySelector('.result');

const p=document.createElement('p');

let prevGuess=[];
let numGuess=1;
let playGames=true;

if(playGames){
    submit.addEventListener('click',function(e){
        e.preventDefault();

    const guess=parseInt(userInput.value);
    validateGuess(guess);
    })
}


function validateGuess(guess){
 if(isNaN(guess)){
    alert("NaN : please enter a number");
 }
 else if(guess<1){
    alert("Your number is smaller than 1 please enter valid number");
 }
 else if(guess>10){
    alert("Your number is bigger than 10 please enter valid number");
 }
 else{
    prevGuess.push(guess);
   
    if(numGuess>10){
        displayGuess(guess);
        displayMessage("You have reached maximum try limit");
        endGame();
    }
   
    else{
        displayGuess(guess);
        checkGuess(guess);
    }

 }

}

function checkGuess(guess){
   if(random===guess){
  displayMessage("=> You guessed write number <=");
  endGame();
   }
   else if(guess > random){
    displayMessage("=> You guess Big number <=");
   }
   else if(guess<random){
    displayMessage("=> You guess Small number <=");
   }
}

function displayGuess(guess){
   userInput.value='';
   guessSlot.innerHTML+=` ${guess} , `;
   numGuess++;
   remaining.innerHTML=`${11-numGuess}`;
}

function displayMessage(message){
    lowHigh.innerHTML=`<h3>${message}</h3>`;
}

function endGame(){
    userInput.value="";
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGm">Start Again</h2>`;
    p.style.backgroundColor="green";
    playGames=false;
    newGame();
}

function newGame(){
   const newgame=document.querySelector('#newGm');
   newgame.addEventListener('click',function(e){
        
    prevGuess=[];
    numGuess=0;
    guessSlot.innerHTML='';
    remaining.innerHTML="10";
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
   })
   
}