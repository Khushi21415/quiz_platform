var questions = [{
    question: 'What data structure can be used to check if a syntax has balanced paranthesis?',
    choices: ['queue', 'tree', 'list', 'stack'],
    correctanswer: 3
}, {
    question: 'Minimum number of queues required for priority queue implementation??',
    choices: ['4', '5', '8', '2'],
    correctanswer: 3
}, {
    question: ' Which of the below given series is Non-Increasing Order?',
    choices: [' 9, 8, 6, 4, 3, 1', '9, 8, 6, 3, 3, 1', '1, 3, 3, 6, 8, 9', '1, 9, 5, 1'],
    correctanswer: 1
}, {
    question: 'Which of the below given sorting techniques has highest best-case runtime complexity?',
    choices: ['insertion sort', 'bubble sort', 'selection sort', 'merge sort'],
    correctanswer: 2
}, {
    question: 'What else is a command interpreter called?',
    choices: ['prompt', 'kernel', 'shell', 'command'],
    correctanswer: 2
}, {
    question: 'The FCFS algorithm is particularly troublesome for',
    choices: ['operating systems', 'multiprocessor systems', 'time sharing systems', 'multiprogramming systems'],
    correctanswer: 2
}, {
    question: 'A stable sorting alrithm ?',
    choices: ['does not crash.', 'fork', 'ndoes not change the sequence of appearance of elements.', ' does not exists.'],
    correctanswer: 2
}];

var currentquestion = 0;
var correctanswer = 0;
var quizover = false;

$(document).ready(function (){
    displaycurrentquestion();
    $(this).find(".quizmessage").hide();
    $(this).find(".nextButton").on("click", function (){
        if (!quizover) {

            let value = $("input[type='radio']:checked").val();
            if (value == undefined) {
                $(document).find(".quizmessage").text("Please select your answer");
                $(document).find(".quizmessage").show();
            }
            else {
                $(document).find(".quizmessage").hide();
                if (parseInt(value) === questions[currentquestion].correctanswer) {
                    correctanswer++;
                }
                currentquestion++;
                if (currentquestion < questions.length) {
                    displaycurrentquestion();
                }
                else {
                    displayscore();
                    $(document).find(".nextButton").text("Play Again?");
                    quizover = true;
                }
            }

        }
        else {
            quizover = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displaycurrentquestion();
            hidesocre();
        }
    });
});

function displaycurrentquestion(){
    console.log("In display current Question");

    var question = questions[currentquestion].question;
    var questionclass = $(document).find(".container > .question");
    var choicelist = $(document).find(".container > .choicelist");
    var numchoice = questions[currentquestion].choices.length;
    
    $(questionclass).text(question);

    $(choicelist).find("li").remove();

    var choices;
    for(let i=0; i < numchoice; i++){
        choices = questions[currentquestion].choices[i];
        $('<li><input type="radio" value='+i+' name="dynradio"/>'+ choices +'</li>').appendTo(choicelist);
    }
}

function resetQuiz(){
    currentquestion = 0;
    correctanswer = 0;
    hidesocre();
}

function displayscore(){
    $(document).find(".container > .result").text("You Scored: " + correctanswer + " out of "+ questions.length);
    $(document).find(".container > .result").show();
}

function hidesocre(){
    $(document).find(".result").hide();
}