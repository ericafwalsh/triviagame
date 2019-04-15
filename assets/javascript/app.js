
var questions = [
    {
        question: "What animal has the highest blood pressure?",
        options: ["blue whale","elephant","flea","giraffe"],
        image: "../triviagame/assets/images/Q1.jpg",
        correctAnswer: "giraffe"
    },
    {
        question: "What is the only mammal capable of true flight?",
        options: ["flying squirrel","ocelot","hummingbird","bat"],
        image: "../triviagame/assets/images/Q2.jpg",
        correctAnswer: "bat"
    },
    {
        question: "What is the fastest flying bird in the world?",
        options: ["harpy eagle","horned sungem","spine-tailed swift","peregrine falcon"],
        image: "../triviagame/assets/images/Q13jpg",
        correctAnswer: "peregrine falcon"
    },
    {
        question: "What is the largest of the great apes?",
        options: ["orangutan","western lowland gorilla","eastern lowland gorilla", "mountain gorilla"],
        image: "../triviagame/assets/images/Q4.jpg",
        correctAnswer: "mountain gorilla"
    },
    {
        question: "What is the world's most poisonous spider?",
        options: ["brown recluse","sydney funnel spider","daddy-longlegs","brazilian wandering spider"],
        image: "../triviagame/assets/images/Q5.jpg",
        correctAnswer: "brazilian wandering spider"
    }
];      

var correctAnswers = ["giraffe","bat","peregrine falcon","mountain gorilla","brazilian wandering spider"];

var countdown;
var count = 0;
var questionsCorrect = 0;
var questionsIncorrect = 0;
var unansweredQuestions = 0;

// Variables that hold the interval timers
var resetCountdownTimer;
var resetTransition;


$(document).ready(function() {

    $(".list").hide();

    $("#start").click(startGame);


    function startGame() {
        
        // hide the start button
        $("#start").hide();

        nextQuestion();
    };



    function nextQuestion() {
        $(".list").show();
        $("#line2").hide();
        $("#answerPic").hide();

        countdown = 31;

        countdownTimer();

        resetCountdownTimer = setInterval(countdownTimer, 1000);

        // only applies on questions 2+
        clearInterval(resetTransition);

        // Show the question
        $("#line1").html(questions[count].question);
       
        // Give the buttons names of the answers, and add them as attributes

        for (i=1;i<5;i++) {
            $("#answer" + [i]).html(questions[count].options[i-1]);
        };
            // $("#answer1").html(questions[count].options[0]);
            // $("#answer2").html(questions[count].options[1]);
            // $("#answer3").html(questions[count].options[2]);
            // $("#answer4").html(questions[count].options[3]);
    }


    // CrystalImage.attr("src", "../unit-4-game/assets/images/crystal" + i.toString() + ".png");
    
    // counts down, and flags when the user did not pick an answer
    function countdownTimer() {

        countdown--;
        
        // Show the countdown
        $("#countdown").html("Time Remaining: " + countdown + " Seconds");


        if (countdown === 0) {

            transitionScreen(null);

            resetTransition = setInterval(nextQuestion, 10000);
        };
    };


    // defining a function that flags if an answer has been chosen and stores value in to answerChosen variable
    $(".answer").click(function(){

        // stores the name of the button in the variable answerChosen
        var answerChosen = $(this).text(); 

        transitionScreen(answerChosen);
    
        resetTransition = setInterval(nextQuestion, 4000);
    });




    function transitionScreen(answerChosen) {

        clearInterval(resetCountdownTimer);

        // hide buttons
        $(".list").hide();
        $("#line2").show();
        $("#answerPic").show();
        
        count++;
      
        $("#answerPic").html("<img src=" + questions[count].image + ">"); 
        
        
        if (correctAnswers.includes(answerChosen)) {
            questionsCorrect++;
            $("#line1").html("<h3>Correct!</h3>");
        }
        else if (countdown === 0) {
            unansweredQuestions++;
            $("#line1").html("<h3>You ran out of time!</h3>");
            $("#line2").html("<h3>The correct answer was: " + questions[count].correctAnswer + "</h3>");
        }
        else {
            questionsIncorrect++;
            $("#line1").html("<h3>Nope!</h3>");
            $("#line2").html("<h3>The correct answer was: " + questions[count].correctAnswer + "</h3>");
        }

        if (count === 5) {
            endScreen();
        }
    };


    // this needs work
    function endScreen(){
        $("#line1").html("<h2>All done, here's how you did!</h2>");
        $("#line2").hide();
        $("#answerPic").hide();

        $("#gameDiv").html("<p>Correct Answers: " + questionsCorrect + "</p>");
        $("#gameDiv").html("<p>Incorrect Answers: " + questionsIncorrect + "</p>");
        $("#gameDiv").html("<p>Unanswered: " + unansweredQuestions + "</p>");

        $("#start").click(startGame);
        // Need to change text here
    };

});