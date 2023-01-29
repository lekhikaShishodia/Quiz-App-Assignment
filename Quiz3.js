var sec = 0, min = 0, time;
var thisQuestionTime;
time=document.getElementById("timePassedValue");
var displayed =new Array();
var category=document.getElementById("category").innerHTML;

const Questions = {
    Question0: [Question = "Father is four times the age of his daughter. If after 5 years, he would be threee times of daughter’s age, then further after 5 years, how many times he would be of his daughter’s age?", 
    Answer1 = "1.5 times", Answer2 = "2 times", Answer3 = "2.5 times", Answer4 = "3 times"],
    Question1: [Question = "What is Aman's present age, if after 20 years his age will be 10 times his age 10 years back?", 
    Answer1 = "6.2 years", Answer2 = "7.7 years", Answer3 = "13.3 years", Answer4 = "10 years"],
    Question2: [Question = " Ten years ago, the age of mother was three times the age of her son. After ten years, mother’s age will be twice that of his son. Find the ratio of their present ages.",
     Answer1 = "11:7", Answer2 = "9:5", Answer3 = "7:4", Answer4 = "7:3"],
    Question3: [Question = "What is Aman's present age, if after 20 years his age will be 10 times his age 10 years back?", 
    Answer1 = "32.5 years", Answer2 = "27.5 years", Answer3 = "25 years", Answer4 = "24.9 years"],
    Question4: [Question = "One year ago, the ratio of Honey and Piyush ages was 2: 3 respectively. After five years from now, this ratio becomes 4: 5. How old is Piyush now?", 
    Answer1 = "5 years", Answer2 = "25 years", Answer3 = "10 years", Answer4 = "15 years"],
    Question5: [Question = "Saransh is 50 years old and Nazma is 40 years old. How long ago was the ratio of their ages 3:2?",
     Answer1 = "20 years", Answer2 = "30 years", Answer3 = "40 years", Answer4 = "25 years"],
    Question6: [Question = "The ratio of the present ages of Pranav and Qureshi is 4:5. Five years ago, the ratio of their ages was 7:9. Find their present ages? (In years)", 
    Answer1 = "40,50", Answer2 = "18,25", Answer3 = "40,60", Answer4 = "20,50"],
    Question7: [Question = "A man said to his son, 'I was one-third of your present age when you were born'. If the present age of the man is 48 years, find the present age of the son.",
     Answer1 = "25.7 years", Answer2 = "28 years", Answer3 = "29.3 years", Answer4 = "36 years"],
    Question8: [Question = " Dinesh is younger to Roshan by 9 years. If their ages are in the respective ratio of 4:5, how old is Dinesh?",
     Answer1 = "36 years", Answer2 = "23 years", Answer3 = "29 years", Answer4 = "can not be determined"],
    Question9: [Question = "The ratio of Sara’s age 4 years ago and Vaishali’s age after 4 years is 1: 1. Presently, the ratio of their ages is 5: 3. Find the ratio between Sara’s age 4 years hence and Vaishali’s age 4 years ago.",
     Answer1 = "1:3", Answer2 = "3:1", Answer3 = "4:3", Answer4 = "3:4"]
}

const Answers=["Option3","Option3","Option4","Option2","Option3","Option2","Option1","Option4","Option1","Option2"];

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
    // sec=0;

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