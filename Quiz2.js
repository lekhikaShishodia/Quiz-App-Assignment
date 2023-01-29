var sec = 0, min = 0, time;
var thisQuestionTime;
time=document.getElementById("timePassedValue");
var displayed =new Array();
var category=document.getElementById("category").innerHTML;

const Questions = {
    Question0: [Question = "The probability of all the events in a sample space adds up to :", 
    Answer1 = "0", Answer2 = "1", Answer3 = "2", Answer4 = "3"],
    Question1: [Question = "If the events have the same theoretical probability of happening, then they are called :", 
    Answer1 = "Mutually exclusive events", Answer2 = "Mutually exhaustive events", Answer3 = "Equally likely events", Answer4 = "Impossible events"],
    Question2: [Question = "The complement of P(A) is",
     Answer1 = "1-P(A) hr", Answer2 = "1+P(A)", Answer3 = "1/P(A)", Answer4 = "None of these"],
    Question3: [Question = "The probability of getting exactly one head in tossing a pair of coins is", 
    Answer1 = "1/2", Answer2 = "1/4", Answer3 = "1", Answer4 = "0"],
    Question4: [Question = "100 cards are numbered from 1 to 100. Find the probability of getting a prime number.", 
    Answer1 = "0", Answer2 = "1", Answer3 = "1/4", Answer4 = "2/11"],
    Question5: [Question = "If three coins are tossed simultaneously, then the probability of getting at least two heads, is",
     Answer1 = "1", Answer2 = "1/2", Answer3 = "3/2", Answer4 = "5/7"],
    Question6: [Question = "A card is drawn from the set of 52 cards. Find the probability of getting a queen card.", 
    Answer1 = "1/52", Answer2 = "1", Answer3 = "1/26", Answer4 = "1/13"],
    Question7: [Question = "A card is drawn at random from a well-shuffled pack of cards numbered 1 to 20. Find the probability of getting a number divisible by 3.",
     Answer1 = "1/2", Answer2 = "3/2", Answer3 = "3/10", Answer4 = "2/51"],
    Question8: [Question = " A card is drawn from a well shuffled pack of 52 cards. Find the probability of neither a heart nor a red king.",
     Answer1 = "1/36", Answer2 = "12/36", Answer3 = "19/26", Answer4 = "2/52"],
    Question9: [Question = "What is the probability that a number selected from the numbers (1, 2, 3,..........,15) is a multiple of 4?",
     Answer1 = "2/5", Answer2 = "1/5", Answer3 = "3/11", Answer4 = "2/7"]
}

const Answers=["Option2","Option3","Option1","Option2","Option3","Option2","Option4","Option3","Option3","Option2"];
var currentQuestion =-1;
var questionCountArray = new Array();
var questionsDisplayedArray = new Array();
var count = 0, score = 0, correct=0, wrong=0;
document.getElementById('score').innerHTML = "" + score;
function setNext() {
    thisQuestionTime=0;
    document.getElementById('options').classList.remove("hidden");

    document.getElementById('Option1').disabled=false;
    document.getElementById('Option2').disabled=false;
    document.getElementById('Option3').disabled=false;
    document.getElementById('Option4').disabled=false;

    var currentQuestion = Math.floor(Math.random() * 10);

    console.log("Random number "+currentQuestion)
    if ((questionCountArray[count] != null || questionsDisplayedArray[currentQuestion]==true )&& count<10) {
        setNext();
        return;
    }
    
    if (questionCountArray[count] == null && questionsDisplayedArray[currentQuestion]!=true) {
        var toDisplay = "Question" + currentQuestion;
        console.log("current Question" + currentQuestion);
        questionCountArray[count] = currentQuestion;
        questionsDisplayedArray[currentQuestion]=true;

        var newQuestion = Object.values(Questions[toDisplay]);
        document.getElementById("questionNumber").innerHTML = +(count + 1);
        document.getElementById("question").innerHTML = newQuestion[0];
        document.getElementById("Option1").innerHTML = newQuestion[1];
        document.getElementById("Option2").innerHTML = newQuestion[2];
        document.getElementById("Option3").innerHTML = newQuestion[3];
        document.getElementById("Option4").innerHTML = newQuestion[4];
    }
    if (count == 10) {
        result();
        clearInterval(t);
    }
    count++;
}

function checkAnswer(optionClicked) {

    var questionNumber = document.getElementById("questionNumber").innerHTML;
    var questionDisplayed = questionCountArray[--questionNumber];
    
    var correctAnswer=Answers[questionDisplayed];
    console.log("Correct Answer"+ correctAnswer);


    if(optionClicked==correctAnswer){
    score++;
    correct++;
    document.getElementById('score').innerHTML = "" + score;
    }
    else{
        wrong++;
    }
    setNext();
}
var t;

function timer() {
time.innerHTML=` ${min}: ${sec}`;
    sec++;thisQuestionTime++;
    if (sec == 60) {
        min++;
        sec=0;
    }
    if(thisQuestionTime%20==0)
    {
      setNext();  
    }
    if( min==3 && sec == 20)
    {
    clearInterval(t);
    result();
    }
}

function start(){
    t= setInterval(timer, 1000);
    setNext();

}




function result(){
    sessionStorage.setItem("category",category);
    sessionStorage.setItem("min",min);
    sessionStorage.setItem("sec",sec);
    sessionStorage.setItem("correct",correct);
    sessionStorage.setItem("wrong",wrong);
    sessionStorage.setItem("attempted",(correct+wrong));
    window.open("./result.html", "_blank");
}
window.onload= start;




