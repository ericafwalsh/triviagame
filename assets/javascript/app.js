
var questions = [
    {
        question: "What animal has the highest blood pressure?",
        options: ["blue whale","elephant","flea","giraffe"],
        image: "../triviagame/assets/images/Q1.jpg",
        correctAnswer: "giraffe"
    },
    {
        question: "What is the only mammal capable of true flight?",
        options: ["bat","flying squirrel","ocelot","hummingbird"],
        image: "../triviagame/assets/images/Q2.jpg",
        correctAnswer: "bat"
    },
    {
        question: "What is the fastest flying bird in the world?",
        options: ["harpy eagle","horned sungem","peregrine falcon","spine-tailed swift"],
        image: "../triviagame/assets/images/Q3.jpg",
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
        options: ["brown recluse","brazilian wandering spider","sydney funnel spider","daddy-longlegs"],
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
var endScreenTimer;


$(document).ready(function() {

    // Hide the buttons
    $(".answer").hide();

    // When the start button is clicked, call startGame function
    $("#start").click(nextQuestion);


    function nextQuestion() {

        if (count === 5) {
            count = 0;
            questionsCorrect = 0;
            questionsIncorrect = 0;
            unansweredQuestions = 0;
            $("#results").empty();
        }
        
        // hides the start button, line 2, and pic
        $("#start, #line 1, #line2, #answerPic").hide();

        // shows the buttons
        $(".answer, #countdown").show();

        // Set and reset the countdown to 30
        countdown = 30;

        // Show the countdown
        $("#countdown").html("Time Remaining: " + countdown + " Seconds");

        // Clear the resetTransition interval. *This only applies on questions 2+
        clearInterval(resetTransition);

        // Call the countdownTimer function every second
        resetCountdownTimer = setInterval(countdownTimer, 1000);

        // Print the question
        $("#line1").html(questions[count].question);

        // Print the options
        for (i=1;i<5;i++) {
            $("#answer" + [i]).html(questions[count].options[i-1]);
        };
    }

    
    function countdownTimer() {

        // Decrements the countdown timer
        countdown--;
        
        // Show the countdown timer as it's updating
        $("#countdown").html("Time Remaining: " + countdown + " Seconds");

        // If the countdown clock gets to 0, call the transition screen function
        if (countdown === 0) {
            transitionScreen(null);
        };
    };


    // Defining a function that runs when an answer button is clicked, stores value in to answerChosen variable, and passes that to the transition screen function
    $(".answer").click(function(){

        var answerChosen = $(this).text(); 
        transitionScreen(answerChosen);

    });



    function transitionScreen(answerChosen) {

        // clear the countdown timer interval
        clearInterval(resetCountdownTimer);

        // hide buttons and show the line2 and picture
        $(".answer").hide();
        $("#line2, #answerPic").show();
        
        // display the image for the current question
        $("#answerPic").html("<img src=" + questions[count].image + ">"); 
        
        
        if (correctAnswers.includes(answerChosen)) {
            questionsCorrect++;
            $("#line1").html("<h3>Correct!</h3>");
            $("#line2").html("");
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
        
        // increment the question count variable
        count++;
        
        // if this is the last question, clear the nextQuestion interval, and call the end screen function in 4 seconds
        if (count === 5) {
            clearInterval(nextQuestion);
            endScreenTimer = setInterval(endScreen, 4000);    
        }
        // If this is not the last question, call nextQuestion in 4 seconds
        else {
            resetTransition = setInterval(nextQuestion, 4000);
        }
    };


    // This function is called when the count = 5
    function endScreen(){
         
        $("#countdown, #line2, #answerPic").hide();
        $("#line1").html("<h2>All done, here's how you did!</h2>");

        var text1 = $("<p></p>").text("Correct Answers: " + questionsCorrect);
        var text2 = $("<p></p>").text("Incorrect Answers: " + questionsIncorrect);
        var text3 = $("<p></p>").text("Unanswered: " + unansweredQuestions);
        $("#results").append(text1,text2,text3);

        // $("#gameDiv").append($('<button id="startover"><h2>Start Over?</h2></button>');

        clearInterval(endScreenTimer);

        $("#start").show();
        $("#start").html("<h2>Start Over?</h2>");
    };

});