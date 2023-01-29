//retreiving data stored in sessionis
var username = sessionStorage.getItem('username');
var min = sessionStorage.getItem('min');
var sec = sessionStorage.getItem('sec');
var correct = sessionStorage.getItem('correct');
var wrong = sessionStorage.getItem('wrong');
var attempted = sessionStorage.getItem('attempted');
var category = sessionStorage.getItem('category');

//displaying data
document.getElementById('category').innerHTML = category;
document.getElementById("showName").innerHTML = username;
document.getElementById("showTime").innerHTML = `${min}: ${sec}`;
document.getElementById("totalQuestions").innerHTML = 10;
document.getElementById("attemptedQuestions").innerHTML = attempted;
document.getElementById("correctQuestions").innerHTML = correct;
document.getElementById("wrongQuestions").innerHTML = wrong;
document.getElementById("percentage").innerHTML = (correct / 10) * 100;



function startAgain(){
//called when user wish to take quiz again
    if(category == "Pipes and Cisterns")
    window.open("./Quiz1.html", "_blank");
    if(category == "Probability")
    window.open("./Quiz2.html", "_blank");
        if(category == "Problems on Age")
        window.open("./Quiz3.html", "_blank");
            if(category =="Profit and Loss")
            window.open("./Quiz4.html", "_blank");
}