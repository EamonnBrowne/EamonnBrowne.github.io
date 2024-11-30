/*
File: Script.js
Name: Michael Toomey
Date: 28/Nov/2024
*/

document.getElementById('first_name').addEventListener('input',validateFirstName);
//eventlistener checks on input, that string pattern is valid
document.getElementById('surname').addEventListener('input',validateSurname);
//eventlistener checks on input, that string pattern is valid
document.getElementById('email').addEventListener('input',validateEmail);
//on input activates the validateEmail to check pattern is correct
function validateFirstName(){ 
	const namePattern= /^[^\d]+$/;
	//name pattern for name, letters, white space, apostrophe 
	let formFirstName=document.getElementById('first_name').value;
	//grabs the value for firstname input
	let firstNameMessage=document.getElementById('firstNameMessage');
	//show error message if pattern not correct
	if(!namePattern.test(formFirstName)){
		//check that it conforms to name pattern
		firstNameMessage.textContent="Your first name must contain only letters"
		//assigns this message
	}
	else{
  
		firstNameMessage.textContent=""; 
		//if okay clear message
	}
}
function validateSurname(){//validate Surname
	let formSurname=document.getElementById('surname').value;
	//get input value
	let surnameMessage=document.getElementById('surnameMessage');
	//get element for posting error message
	const namePattern=  /^[\s'A-Za-z]+$/;
	//string pattern for name
	if(!namePattern.test(formSurname)){
		//if the string pattern does not matche the input
		surnameMessage.textContent="Your surname name can only contain letters";
	  
	}
	else{
		//clear error message otherwise
		surnameMessage.textContent=""; 

	}
}
function validateEmail(){//check email pattern on input
	let formEmail=document.getElementById('email').value;
	//get input
	let emailMessage=document.getElementById('emailMessage');
	//get message element
	const emailPattern= /[^@]+@[^@]+\.[^@]+/; //check email pattern
	if(!emailPattern.test(formEmail)){
		// if pattern does not match email assign message
		emailMessage.textContent="Please ensure your email is correct";
	  
	}
	else{
		//if okay clear message
		emailMessage.textContent=""; 
  
	}
}
function validateForm() { //validation upon pressing submit

	let formFirstName=document.getElementById('first_name').value;
	let formSurname=document.getElementById('surname').value;
	let formEmail=document.getElementById('email').value;
	let formTextArea=document.getElementById('textArea').value;
	let formSelect=document.getElementById('selectTopic').value;
	//get value of inputs 
	let firstNameMessage=document.getElementById('firstNameMessage');
	let surnameMessage=document.getElementById('surnameMessage');
	let emailMessage=document.getElementById('emailMessage');
	let textAreaMessage=document.getElementById('textAreaMessage');
	let selectMessage=document.getElementById('selectMessage');
	//get elements to send error message if needed
	const namePattern= /^[\s'A-Za-z]+$/;
	const emailPattern= /^[^@]+@[^@]+\.[^@]/;
	//string patterns for names and email respectively, const means can't be reassigned a value within this function 	
	if(formFirstName == "") {
		//if input empty send error message
		firstNameMessage.textContent="Your must enter your first name";
    
	}
	else if(!namePattern.test(formFirstName)){
		//check that it conforms to name pattern
		firstNameMessage.textContent="Your first name must contain only letters";
	  
	}
	else{
		//if okay clear comment
		firstNameMessage.textContent=""; 
			
	}		
	if (formSurname == "") {
		//if input empty send error message
		surnameMessage.textContent="You must enter your surname";
    
	}
	else if(!namePattern.test(formSurname)){
		//check that it conforms to name pattern
		surnameMessage.textContent="Your surname name can only contain letters";
	  
	}
	else{
		//if okay clear comment
		surnameMessage.textContent=""; 

	}	
	if (formEmail == "") {
		//if input empty send error message
		emailMessage.textContent="You must enter your email";
    
	}
	else if(!emailPattern.test(formEmail)){
		//check that it conforms to name pattern
		emailMessage.textContent="Please ensure you enter your email correctly";
	  
	}
 	else{
		//if okay clear comment
		emailMessage.textContent=""; 
  
	}	
	if(formSelect == "") {
        //if user has not selected a topic send message
		selectMessage.textContent="Your must select a topic";
    
	}
	else{
		//if okay clear comment
		selectMessage.textContent=""; 
  
	}
	if(formTextArea==""){
		//if on submit nothing wrtten in text area send message
		textAreaMessage.textContent="You must enter a message";
	}
	else{
		//clear message
		textAreaMessage.textContent="";
		
	}
}
