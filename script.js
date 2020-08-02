$(document).ready(function() {

var m8B = {};

$("#answer").hide();

m8B.listOfAns = ["As I see it, yes.", "Ask again later.", "Better not tell you now.", "Concentrate and ask again.", "Don\'t count on it.", "It is certain.", "My sources say no.", "Outlook not so good.", "Signs point to yes."];


m8B.askQuestion = function(question)
{
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
/*START code below is Random Answer Generator*/
	var randNum = Math.random(); //create randnum
//console.log(randNum);
	var randAnsNum = Math.random() *this.listOfAns.length; //num item in array
//console.log(randAnsNum);
	var rounRandAns = Math.floor(randAnsNum); //rounumdown
//console.log(rounRandAns);
	var randomAnswer = this.listOfAns[rounRandAns];//randans generated
		console.log(question);
		console.log(randomAnswer);
/*END Random Answer Generator*/
$("#answer").text(randomAnswer);

};

var onClick = function() {

	$("#answer").hide();
	$("#8ball").effect("shake");
	var question = prompt("Ask me anything");
	$("#answer").fadeIn(4000);
	m8B.askQuestion(question);		
	
};	




$("#questionButton").click( onClick );

});