/*
 * Assignment: Project 2
 */
	 console.log("Start!");

	//Set Variables: String, Number, Boolean
	 var gameList = [
			 "1) Call of Duty: Advanced Warfare", 
			 "2) Thief",
			 "3) Forza Motrsport 5"];
	 
	 var number; //used for game selection
	 
	 var playGame = confirm("Would you like to play a game?");
	 if(playGame){askUser();}
	 else {end();}
	//prompt: ask user a question.
	 function askUser(){
		 console.log(gameList);
	 number = parseInt(prompt("What Game do you want to play? Please enter 1-" +(gameList.length) +" only.", "1"));
	 
	 if(number>=gameList.length+1)
	 {
		 console.log("the number you entered is incorrect, please try again.")
		 askUser();
	 }
	 else if(number<=0){
		 console.log("the number you entered is incorrect, please try again.")
		 askUser();
	 }
	 else//(number<=gameList.length)
	 {
		 
	 playGame = confirm("Are you sure you would like to play: " + gameList[number-1] + "?")
	 if(!playGame){ 
	 var playGame = confirm("Would you like to play a game?");
	 if(playGame){askUser();}
	 }
	 else
	 {
		 
	 }
	 
	 }
	
	 
	 }
	
	//procedure: analyze user answer.
	//Argument Conditional
	 
	 
	 function end(){
		 console.log("Thank you, come again!")
	 }
	 


	