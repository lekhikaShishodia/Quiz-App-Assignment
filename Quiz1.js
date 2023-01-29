
var sec = 0, min = 0, time; //sec=seconds, min=minutes 
var thisQuestionTime;   //stores time for which a particular question is displayed on screen
time=document.getElementById("timePassedValue");
var displayed =new Array(); //anew empty array
var category=document.getElementById("category").innerHTML; //stores the cateogry of the quiz being played

//Questions of the quiz
const Questions = {
    Question0: [Question = "Pipes A and B can fill a tank in 5 and 6 hours respectively. Pipe C can empty it in 12 hours. If all the three pipes are opened together, then the tank will be filled in:", 
    Answer1 = "3 9/17 hours", Answer2 = "1 13/17 hours", Answer3 = "2 8/11 hours", Answer4 = "4 1/2 hours"],
    Question1: [Question = "Two pipes A and B can fill a tank in 20 and 30 minutes respectively. If both the pipes are used together, then how long it will take to fill the tank?", 
    Answer1 = "10 mins", Answer2 = "12 mins", Answer3 = "15 mins", Answer4 = "20 mins"],
    Question2: [Question = "Pipe A can fill a tank in 45 hrs and pipe B can fill it in 36 hrs. If both the pipes are opened in the empty tank. In how many hours will it be full?",
     Answer1 = "10 hr", Answer2 = "15 hr", Answer3 = "20 hr", Answer4 = "28 hr"],
    Question3: [Question = "Two pipes A and B can fill a tank in 15 minutes and 20 minutes respectively. Both the pipes are opened together but after 4 minutes, pipe A is turned off. What is the total time required to fill the tank?", 
    Answer1 = "10 min 20 sec", Answer2 = "11 min 45 sec", Answer3 = "12 min 30 sec", Answer4 = "14 min 40 sec"],
    Question4: [Question = "Pipe A can fill a tank in 5 hours, pipe B in 10 hours and pipe C in 30 hours. If all the pipes are open, in how many hours will the tank be filled?", 
    Answer1 = "2", Answer2 = "2.5", Answer3 = 3, Answer4 = 3.5],
    Question5: [Question = "Two pipes can fill a tank in 20 minutes and 30 minutes respectively. If both the pipes are opened simultaneously, then the tank will be filled in",
     Answer1 = "10 minutes", Answer2 = "12 minutes", Answer3 = "15 minutes", Answer4 = "25 minutes"],
    Question6: [Question = "A tap fill a pot in two hours because of a hole to the pot, it took 2 1/3 hours. Calculate the time needed for hole to emptied the pot completely?", 
    Answer1 = "14", Answer2 = "12", Answer3 = "17", Answer4 = "19"],
    Question7: [Question = "A water tank is two-fifth full. Pipe A can fill a tank in 10 minutes and pipe B can empty in 6 minutes. If both the pipes are open, how long will it take to empty or fill the tank completely?",
     Answer1 = "6 minute to empty", Answer2 = "7 minute to full", Answer3 = "6 minute to full", Answer4 = "7 minute to empty"],
    Question8: [Question = " A cistern is normally filled in 8 hours but takes two hours longer to fill because of a leak in its bottom. If the cistern is full, the leak will empty it in?",
     Answer1 = "16 hrs", Answer2 = "20 hrs", Answer3 = "25 hrs", Answer4 = "40 hrs"],
    Question9: [Question = "Two pipes P and Q can fill a cistern in 12 and 15 minutes respectively. Both are opened together, but at the end of 3 minutes, the first is turned off. How much longer will the cistern take to fill?",
     Answer1 = "9 1/4 min", Answer2 = "11 1/4 min", Answer3 = "7 1/4 min", Answer4 = "8 1/4 min"]
}

//correct answers of quiz. index of the array represent question number in object Questions
// fore.g. Answers[0] is correct answer of Question0, Answers[5] is corrcet answer of Question5
const Answers=["Option1","Option2","Option3","Option4","Option3","Option2","Option1","Option1","Option4","Option4"];

var currentQuestion =-1; //holds current Question
var questionCountArray = new Array(); //stores question number that is displayed on screen, questionCountArray[0]=5 means Question5 is displayed as Question 1 (array index starts from 0) 
var questionsDisplayedArray = new Array(); //stores true, at indexes if a question is displayed.. for e.g. questionsDisplayedArray[2]=true ,means Question2 is displayed from Questions object
var count = 0, score = 0, correct=0, wrong=0;   //count=Question Displayed, score = total score, correct =no. of correct questions answered, wrong=no. of wrong questions answered
document.getElementById('score').innerHTML = "" + score;

function setNext() {
    thisQuestionTime=0; //set this to zero whenever a new question is displayed
    document.getElementById('options').classList.remove("hidden");


    var currentQuestion = Math.floor(Math.random() * 10); //select new question to be displayed by random

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

    //check if all questions are displayed
    if (count == 10) {
        result();
        clearInterval(t);
    }
    count++;
}

//called when an option is clicked and question is attempted
function checkAnswer(optionClicked) {
    //retreiving the Question number attempted
    var questionNumber = document.getElementById("questionNumber").innerHTML;
    //retreiving the question number which was actually displayed from the memory/object
    var questionDisplayed = questionCountArray[--questionNumber];
    
    //retreiving current of the question displayed.
    var correctAnswer=Answers[questionDisplayed];
    // console.log("Correct Answer"+ correctAnswer);

    //if correct answer was selected
    if(optionClicked==correctAnswer){
    score++;
    correct++;
    document.getElementById('score').innerHTML = "" + score;
    }
    else{
        wrong++;
    }
    //display the another question whenever a question is attempted
    setNext();
}

var t;

function timer() {

    //display timer on screen
time.innerHTML=` ${min}: ${sec}`; 
    sec++;
    thisQuestionTime++;

    //time is considered in minutes and seconds. hence counting minutes after each 60 seconds
    if (sec == 60) {
        min++;
        sec=0;
    }
    // each question is displaye for only 20 seconds 
    if(thisQuestionTime%20==0)
    {
      setNext();  
    }
    //if time exceeds 3 minutes andd 20 seconds, timer is stopped and result is displayed. (200 seconds for 10 questions)
    if( min==3 && sec == 20)
    {
    clearInterval(t);
    result();
    }
}


function start(){
    //function to start quiz
    t= setInterval(timer, 1000);
    setNext();

}



function result(){
    // storing all the details in session
    sessionStorage.setItem("category",category);
    sessionStorage.setItem("min",min);
    sessionStorage.setItem("sec",sec);
    sessionStorage.setItem("correct",correct);
    sessionStorage.setItem("wrong",wrong);
    sessionStorage.setItem("attempted",(correct+wrong));
    // displaying result
    window.open("./result.html", "_blank");
}

window.onload= start;




