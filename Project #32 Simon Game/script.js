var availableColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var gameStarted = false;
var currentLevel = 0;

$(document).keypress(function() {
  if (!gameStarted) {
    $("#level-title").text("Level " + currentLevel);
    nextSequence();
    gameStarted = true;
  }
});

$(".btn").click(function() {
  var clickedColor = $(this).attr("id");
  userClickedPattern.push(clickedColor);

  playSound(clickedColor);
  animatePress(clickedColor);

  checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(levelIndex) {
  if (gamePattern[levelIndex] === userClickedPattern[levelIndex]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);

    restartGame();
  }
}

function nextSequence() {
  userClickedPattern = [];
  currentLevel++;
  $("#level-title").text("Level " + currentLevel);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = availableColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
}

function animatePress(color) {
  $("#" + color).addClass("pressed");
  setTimeout(function() {
    $("#" + color).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function restartGame() {
  currentLevel = 0;
  gamePattern = [];
  gameStarted = false;
}
