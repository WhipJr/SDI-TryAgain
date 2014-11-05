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
	else
	{

		playGame = confirm("Are you sure you would like to play: \n" + gameList[number-1] + "?")
		if(!playGame){ 
			playGame = confirm("Would you like to play a game?");
			if(playGame){
				askUser();
			}
			else{
				end();
			}
		}
		else
		{
			playGame = confirm("Please wait while the game is loading.")
			if(playGame){
				startGame(number);
			}
			else{
				playGame = confirm("Would you like to play a game?");
				if(playGame){
					askUser();
				}
				else{
					end();
				}
			}

		}

	}


}

function startGame(gameNum)
{
	console.log("Loading game: " + gameList[gameNum] + " Please wait.")	
	var i = 0;
	while (i < 5) {
		load(5);
		console.log(".....");
		i++;
	}

	console.log("Your Game could not load, please check your game disk or redownload your digital copy of the game.")
}


function load(seconds) {
	var start = new Date().getTime();
	for (var i = 0; i < 1e7; i++) {
		if ((new Date().getTime() - start) > (seconds+1000)){
			break;
		}
	}
}

function end(){
	console.log("Thank you, come again!")
}



