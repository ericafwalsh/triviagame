
var questions = {
    Q1: {
        question: "What animal has the highest blood pressure?",
        answers: ["giraffe","blue whale","elephant","flea"]
    },
    Q2: {
        question: "What is the only mammal capable of true flight?",
        answers: ["bat","flying squirrel","ocelot","hummingbird",]
    },
    Q3: {
        question: "What is the fastest flying bird in the world?",
        answers: ["harpy eagle","peregrine falcon","horned sungem","spine-tailed swift",]
    },
    Q4: {
        question: "What is the largest of the great apes?",
        answers: ["orangutan","western lowland gorilla","eastern lowland gorilla","mountain gorilla",]
    },
    Q5: {
        question: "What is the world's most poisonous spider?",
        answers: ["brown recluse","brazilian wandering spider","sydney funnel spider","daddy-longlegs",]
    }
  };

// // Variable showImage will hold the setInterval when we start the slideshow
// var showImage;

// Count will keep track of the index of the current question
var count = 0;
var countdown = 30;

var questionsCorrect = 0;
var questionsIncorrect = 0;
var unansweredQuestions = 0;

// Variable showImage will hold the setInterval when we start the slideshow
var resetInterval;



$(document).ready(function() {

    $("#start").click(startGame);


    function startGame() {
        
        // hide the start button
        $("#start").hide();

        // Use rotateQuestion to hold the setInterval to run nextImage.
        resetInterval = setInterval(nextQuestion, 30000);

    }

    function nextQuestion() {

        countdown--;
        
        // Show the countdown
        $("#countdown").text("Time Remaining: " + countdown + " Seconds");

        // Show the question
        $("#question").html(questions.Q1.question);

        // Show the answers
        $("answer1").html(questions.Q1.answers[0]);
        $("answer2").html(questions.Q1.answers[1]);
        $("answer3").html(questions.Q1.answers[2]);
        $("answer4").html(questions.Q1.answers[3]);

        // increment the count of questions
        count++;

        if ()

        // TODO: Show the loading gif in the "image-holder" div.
        $("#gameDiv").html("<img src='images/loading.gif' width='200px'/>");

        // TODO: Use a setTimeout to run showQuestion after 1 second.
        setTimeout(showQuestion, 1000);

    }

// This function will replace display whatever image it's given in the 'src' attribute of the img tag.
function showQuestion() {
  $("#gameDiv").html("<img src=" + images[count] + " width='400px'>");
}





function resetGame() {

  // TODO: Put our clearInterval here:
  clearInterval(resetInterval);

};

// This will run the display image function as soon as the page loads.
showQuestion();











function start() {
      intervalId = setInterval(count, 1000);
    }

function count() {
    time++;
    $("#display").text(time);
  }

  function stop() {
  
    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
  }
  function recordLap() {
  
    // DONE: Get the current time, pass that into the timeConverter function,
    //       and save the result in a variable.
    var converted = timeConverter(time);
  
    // DONE: Add the current lap and time to the "laps" div.
    $("#laps").append("<p>Lap " + lap + " : " + converted + "</p>");
  
    // DONE: Increment lap by 1. Remember, we can't use "this" here.
    lap++;
  }





});