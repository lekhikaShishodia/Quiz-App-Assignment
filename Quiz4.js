var sec = 0, min = 0, time;
var thisQuestionTime;
time=document.getElementById("timePassedValue");
var displayed =new Array();
var category=document.getElementById("category").innerHTML;

const Questions = {
    Question0: [Question = " A person sold a stove for Rs. 423 and incurred a loss of 6%. At what price would it be sold so as to earn a profit of 8%?", 
    Answer1 = "Rs 525", Answer2 = "Rs 500", Answer3 = "Rs 490", Answer4 = "Rs 486"],
    Question1: [Question = "A fruit seller buys lemons at 2 for a rupee and sells then at 5 for three rupees. His gain percent is", 
    Answer1 = "10%", Answer2 = "15%", Answer3 = "20%", Answer4 = "25%"],
    Question2: [Question = "A sells a car to B at 10% loss. If B sells it for Rs. 54000 and gains 20%, the cost price of the car for A was",
     Answer1 = "Rs. 25000", Answer2 = "Rs. 50000", Answer3 = "Rs. 37500", Answer4 = " Rs. 60000"],
    Question3: [Question = "Ramesh sold a statue for a price 25% higher than the original price of the statue. He had however bought the statue at 20% discount on the original price. With the profit of Rs. 2025, find the original price of the statue.", 
    Answer1 = " Rs. 6000", Answer2 = "Rs. 7500", Answer3 = "Rs. 3500", Answer4 = "Rs. 4500"],
    Question4: [Question = " If selling price of 40 articles is equal to cost price of 50 articles, the loss or gain percent is", 
    Answer1 = "25% loss", Answer2 = " 20% loss", Answer3 = "25% gain", Answer4 = "20% gain"],
    Question5: [Question = "Two bicycles were sold for Rs. 3990 each, gaining 5% on one and losing 5% on the other. The gain or loss percent on the whole transaction isIf three coins are tossed simultaneously, then the probability of getting at least two heads, is",
     Answer1 = "Neither gain nor loss", Answer2 = "2.5% gain", Answer3 = "2.5% loss", Answer4 = "0.25% loss"],
    Question6: [Question = "The ratio of cost price and selling price is 4:5. The profit percent is", 
    Answer1 = "10%", Answer2 = "20%", Answer3 = "25%", Answer4 = "30%"],
    Question7: [Question = " If a person sells a ‘sari’ for Rs. 5200, making a profit of 30%, then the cost price of the sari is",
     Answer1 = " Rs. 4420", Answer2 = "Rs. 4000", Answer3 = "Rs. 3900", Answer4 = "Rs. 3800"],
    Question8: [Question = "A shopkeeper earns a profit of 15% after selling a book at 20% discount on the printed price. The ratio of the cost price and printed price of the book is?",
     Answer1 = "20:23", Answer2 = "23:20", Answer3 = "16:23", Answer4 = "23:16"],
    Question9: [Question = "Simran bought pet food worth Rs. 56000. She then sold 1/3rd of it incurring a loss of 40%. What profit she must earn on rest of the supplies to nullify this loss?",
     Answer1 = "25%", Answer2 = "20%", Answer3 = "45%", Answer4 = "50%"]
}

const Answers=["Option4","Option3","Option2","Option4","Option3","Option5","Option3","Option2","Option3","Option2"];

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