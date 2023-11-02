const handEl = document.getElementById("hand");
const scissorEl = document.getAnimations("scissor");
const paperEl = document.getElementById("paper");
const aEl = document.querySelectorAll("a");
const wonalertEl = document.getElementById("wonalert");
const playerscoreEl= document.getElementById("playerscore");
const ComputerScoreEl =document.getElementById("pcscore");
let pc=0;

let pcScore= 0;
let userscore= 0;


aEl.forEach((element) => {
    element.addEventListener("click", () => {
      let user = parseInt(element.id); 
      ComputerChooses();
      console.log("User Chooses: "+ element.id);
      console.log("Computer Chooses: "+pc);

      if (pc === user) {
        wonalertEl.textContent = "DRAW!";
      }
       else if (user === 1 && pc === 2) {
        PcWon();
      }
      else if(user ===2 && pc===3)
      {
        PcWon();
      }
      else if(user ===3 && pc===1)
      {
        PcWon();
      }
      else
      {
        UserWon(); 
      }
    });
    
  });

function ComputerChooses() {
  let pcChoise = Math.ceil(Math.random() * 3);
  switch (pcChoise) {
    case 1:
      pc = 1;
      break;
    case 2:
      pc = 2;
      break;
    case 3:
      pc = 3;
      break;
    default:
      pc = 10000;
  }
}

function PcWon()
{
    wonalertEl.textContent ="Computer Won!";
    pcScore++;
    updateScore();
}
function UserWon()
{
    wonalertEl.textContent ="You Won!";
    userscore++;
    updateScore();
}

function updateScore()
{
    userscore = userscore>9? "0"+ userscore : userscore;
    pcScore = pcScore>9? "0"+pcScore : pcScore;
    playerscoreEl.innerHTML= userscore;
    ComputerScoreEl.innerHTML =pcScore;

    document.querySelector(".caption").textContent = "CHOOSE AGAIN TO PLAY AGAIN";
}