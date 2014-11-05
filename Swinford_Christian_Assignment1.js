/*
 * 
 */
	 console.log("Start!");

	//Set Variables: String, String with Escapes, number, boolean
	 var string = "YOU";
	 
	 var stringE = "\nWIN!";
	 
	 var finString;
	 
	 var number; // prompt for number
	 
	 var temp; //temporary variable is *ONLY* used to determine boolean.
	 var boolean = null; // prompt for boolean
	 
	 var False;
	 
	//output each variable
	 console.log("String: " + string + "\nString with Escapes: " + stringE +"\nNumber: " + 
			 	 number +"\nBoolean: " + boolean);
	 
	//confirm for input
	 number = prompt("Please input a number with a factor of 5:", "25");
	 console.log("\nNew number: " + number);
	 
	 False = confirm("For the route A, click yes. Otherwise click Cancel.")
	 
	 setBool();
	 function setBool()
	 {
		 temp = prompt('Please type in either "True" or "False"');
		 
		 if(temp== "True")
		 {
			 boolean = true;
			 console.log("\nNew boolean: " + boolean);
		 }
		 else if (temp== "False")
		 {
			 //This is intentional
			 boolean = true;
			 console.log("\nNew boolean: " + boolean)
		 }
		 else	 
		 {
			 boolean = false;
			 console.log("\nNew boolean: " + boolean)
		 }
	 }
	 
	//boolean conditional
	 if(boolean)
	 {
		 T();
	 }
	 else
	 {
		 F();
	 }
	//true: Prompt for input
	 function T()
	 {
		 
		 //true: number conditional
		 if(number%5 == 0)
		 {
			//true: true: math
			 number*= number;
			//true: true: output A
			 console.log("The number you entered squared is: " + number);
		 }
		 else
		 {
			 
			 //true: false:output B
			 console.log("The number you entered (" + number + ") is not a number where 5 is a factor." );
			 
		 }
			 
		 
			 
		
	 }
	

	 function F()
	 {
		 
		 //false: string conditional
		 if(False.toUpperCase() == "YES")
		 {
			//false: true: string concatenation
			 finString = string + stringE;
			 
			//false: true: output D
			 console.log(finString);
		 }else
		 {
			//false: false:output C
			 console.log("You do not follow directions very well.");
		 }
		 
	 }
		 
	 
	