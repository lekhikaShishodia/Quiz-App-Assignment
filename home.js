function show(){
   var name= document.getElementById("nameTextBox").value;

   if(name===""){
      // Do not start quiz if name is not given
      document.getElementById("welcomeNote").innerHTML=" Welcome, to the Quiz<br> Please enter your name ";
   }
   //if name is given ask which category to start
   else{
   document.getElementById("welcomeNote").innerHTML= "Welcome " + name + " <br>Please choose a category to start";

   sessionStorage.setItem("username",name);

   document.getElementById("category1").style.display="inline";
   document.getElementById("category2").style.display="inline"; 
   document.getElementById("category3").style.display="inline"; 
   document.getElementById("category4").style.display="inline";
   }
}

