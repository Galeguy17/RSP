let  userScore = 0;
let  computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice(){
  const choices = ["r","p","s"];
  const randomNumber = Math.floor(Math.random()*3);
  return choices[randomNumber];
}

function converter(letter){
  if(letter == "r") return "Rock";
  if(letter == "p") return "Paper";
  if(letter == "s") return "Scissors";

}

function win(userChoice, computerChoice){
 userScore++;
 const userSmallWord = "User".fontsize(3).sub();
  const computerSmallWord = "computer".fontsize(3).sub();
 const userChoice_div = document.getElementById(userChoice);
 userScore_span.innerHTML= userScore;
 computerScore_span.innerHTML = computerScore;
 result_p.innerHTML = "  👍  "  + converter(userChoice)  + userSmallWord + "  beats  " + converter(computerChoice)  + computerSmallWord + "  You Win 👍 !!!";
 console.log();
 userChoice_div.classList.add("green-glow");
 setTimeout(function(){ userChoice_div.classList.remove("green-glow")}, 300);
}
function lose(userChoice,computerChoice){
  computerScore++;
  const userSmallWord = "User".fontsize(3).sub();
   const computerSmallWord = "computer".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  userScore_span.innerHTML= userScore;
  computerScore_span.innerHTML = computerScore;
   result_p.innerHTML = "  👎  " + converter(computerChoice)  + computerSmallWord + "  beats  " + converter(userChoice)  + userSmallWord + "  You Lose 👎 !!!";
   userChoice_div.classList.add("red-glow");
   setTimeout(function(){ userChoice_div.classList.remove("red-glow")}, 300);
}
function draw(userChoice, computerChoice){
  const userSmallWord = "User".fontsize(3).sub();
   const computerSmallWord = "computer".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  userScore_span.innerHTML= userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = " ✊  " + converter(userChoice)  + userSmallWord + "  Equals  " + converter(computerChoice)  + computerSmallWord  + "  It is a Draww  ✊ !!!";
  userChoice_div.classList.add("grey-glow");
  setTimeout(function(){ userChoice_div.classList.remove("grey-glow")}, 300);
}


function game(userChoice){
 const computerChoice =  getComputerChoice();
 switch(userChoice + computerChoice){

  case "rs":
  case "sp":
  case "pr":
     win(userChoice, computerChoice);
     break;
  case "rp" :
  case "ps" :
  case "sr" :
     lose(userChoice,computerChoice);
     break;
  case "rr" :
  case "pp" :
  case "ss" :
      draw(userChoice,computerChoice);
      break;


 }
}





function main(){

  rock_div.addEventListener('click',function(){
    game("r");
  });

  paper_div.addEventListener('click',function(){
    game("p");
  });

  scissor_div.addEventListener('click',function(){
    game("s");
  });
}

main();
