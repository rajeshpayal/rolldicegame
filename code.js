'use strict';
const newbtn = document.querySelector(".btn--new")
const rolldice = document.querySelector(".btn--roll");
const holdbtn = document.querySelector(".btn--hold");
let score0 = document.querySelector("#score--0");
let score1 = document.querySelector("#score--1");
let currentScore0 = document.querySelector("#current--0");
let currentScore1 = document.querySelector("#current--1");

let player0 = document.querySelector(".player--0");
let player1 = document.querySelector(".player--1");
let scores =[0,0];
let currentScore =0;
let activePlayer = 0;
let diceImg = document.querySelector(".dice");
// playing is just for check if the game is still on
let playing = true;
let isNameChange0 = true;
let isNameChange1 = true;
// hide the dice img for first time
diceImg.classList.add("hide")

let playerName0=document.querySelector("#name--0");
let playerName1 = document.querySelector("#name--1");
playerName0.addEventListener("click",()=>{
    
    if(isNameChange0){
        isNameChange0 = false;
        let name0= prompt("Enter your name...");
        if(name0!=""){
            playerName0.innerHTML = name0;
        }
    }

})
playerName1.addEventListener("click",()=>{
    if(isNameChange1){
        isNameChange1=false
        let name1= prompt("Enter your name...");
        if(name1!=""){
            playerName1.innerHTML = name1;
        }
    }
})






// swiching the players
const swtichPlayer = function(){
    document.querySelector(`#current--${activePlayer}`).textContent =0;
    activePlayer = activePlayer ===0 ? 1:0;
    currentScore=0;
    player0.classList.toggle("player--active");
    player1.classList.toggle("player--active");

}
rolldice.addEventListener("click",()=>{
    if(playing){
        // number between 0 and 6
        const dice = Math.trunc(Math.random()*6)+1;
        diceImg.classList.remove("hide")
        diceImg.src=`dice-${dice}.png`
        console.log(dice)
        // if the number is not 1
    if(dice!==1){
        currentScore+=dice;
        document.querySelector(`#current--${activePlayer}`).textContent=currentScore;
    }else{
        // if the number is 1
        swtichPlayer();
        }
    }
})


holdbtn.addEventListener("click",()=>{
    if(playing){
        // adding the current score to the score of the player
        scores[activePlayer]+=currentScore;
        currentScore=0;
        document.querySelector(`#score--${activePlayer}`).textContent=scores[activePlayer];
        // if the is over
    if(scores[activePlayer]>=20){
        playing=false;
        document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
        document.querySelector(`.player--${activePlayer}`).classList.remove("player--active")
        diceImg.classList.add("hide")
    }else{
        swtichPlayer();
    }
    }
})


newbtn.addEventListener("click",()=>{
    isNameChange0=true
    isNameChange1 = true;
    playing=true;
    diceImg.classList.add("hide")
    playerName0.textContent = "Player 0";
    playerName1.textContent = "Player 1";
    document.querySelector(`.player--${activePlayer}`).classList.remove("player--winner");
    scores=[0,0]
    activePlayer =0;
    player1.classList.remove("player--active");
    player0.classList.add("player--active"); 
    currentScore=0;
    score0.textContent=0;
    score1.textContent=0;
    currentScore0.textContent=0;
    currentScore1.textContent()=0;
})



// fetch("https://jsonplaceholder.typicode.com/posts").then((data)=>{
//     return data.json();
// }).then((data)=>data.forEach(element => {
//   console.log(element.id)  
// }))
