
var questions = {
    Q1: {
        question: "What animal has the highest blood pressure?",
        wrongAnswers: ["blue whale","elephant","flea"],
        rightAnswer: "giraffe",
        image: "../images/Q1.jpg"
    },
    Q2: {
        question: "What is the only mammal capable of true flight?",
        wrongAnswers: ["flying squirrel","ocelot","hummingbird"],
        rightAnswer: "bat",
        image: "../images/Q2.jpg"
    },
    Q3: {
        question: "What is the fastest flying bird in the world?",
        wrongAnswers: ["harpy eagle","horned sungem","spine-tailed swift"],
        rightAnswer: "peregrine falcon",
        image: "../images/Q3.jpg"
    },
    Q4: {
        question: "What is the largest of the great apes?",
        wrongAnswers: ["orangutan","western lowland gorilla","eastern lowland gorilla"],
        rightAnswer: "mountain gorilla",
        image: "../images/Q4.jpg"
    },
    Q5: {
        question: "What is the world's most poisonous spider?",
        wrongAnswers: ["brown recluse","sydney funnel spider","daddy-longlegs"],
        rightAnswer: "brazilian wandering spider",
        image: "../images/Q5.jpg"
    }
};      


var countdown;
var count = 0;
var questionsCorrect = 0;
var questionsIncorrect = 0;
var unansweredQuestions = 0;

// Variable showImage will hold the setInterval when we start the slideshow
var resetCountdownTimer;
var resetTransition;


$(document).ready(function() {

    $(".list").hide();

    // $("#list").hide();
    $("#start").click(startGame);


    function startGame() {
        
        // hide the start button
        $("#start").hide();

        nextQuestion();
    };



    function nextQuestion() {
        $(".list").show();

        countdown = 31;

        countdownTimer();

        resetCountdownTimer = setInterval(countdownTimer, 1000);

        // only applies on questions 2+
        clearInterval(resetTransition);

        // Show the question
        $("#line1").html(questions.Q1.question);
       
        // Give the buttons names of the answers, and add them as attributes
        $("#answer1").html(questions.Q1.rightAnswer);
        $("#answer2").html(questions.Q1.wrongAnswers[0]);
        $("#answer3").html(questions.Q1.wrongAnswers[1]);
        $("#answer4").html(questions.Q1.wrongAnswers[2]);

    };

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
    
        resetTransition = setInterval(nextQuestion, 10000);
    });




    function transitionScreen(answerChosen) {

        clearInterval(resetCountdownTimer);

        // hide buttons
        $(".list").hide();
        
        count++;
      
        $("#answerPic").html("<img src=" + questions.Q1.image); 
        
        
        if (answerChosen === questions.Q1.rightAnswer) {
            questionsCorrect++;
            $("#line1").html("<h2>Correct!</h2>");
        }
        else if (countdown === 0) {
            unansweredQuestions++;
            $("#line1").html("<h2>You ran out of time</h2>");
            $("#line2").html("<h2>The correct answer was: " + questions.Q1.rightAnswer + "</h2>");
        }
        else {
            questionsIncorrect++;
            $("#line1").html("<h2>Nope!</h2>");
            $("#line2").html("<h2>The correct answer was: " + questions.Q1.rightAnswer + "</h2>");
        }

        if (count === 5) {
            endScreen();
        }
    };

    function endScreen(){
        $("#line1").html("<h2>All done, here's how you did!</h2>");
        $("#answer1").html("Correct Answers: " + questionsCorrect);
        $("#answer2").html("Incorrect Answers: " + questionsIncorrect);
        $("#answer3").html("Unanswered: " + unansweredQuestions);
        $("#answer4").html("Start Over?").click(resetGame);
    };

    // function resetGame() {


    // };

});