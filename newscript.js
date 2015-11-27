function myCards() {
					document.getElementById("outcome").innerHTML=" ";
						document.getElementById("dnscore").innerHTML=" ";
						document.getElementById("dhit").innerHTML=" ";
						document.getElementById("nscore").innerHTML=" ";
						document.getElementById("card3").innerHTML=" ";			
					
	function Card(name,value) {
		this.name=name;
		this.value=value;
	};
	
	var card[0] = new Card("King",10);
	var card[1]	= new Card("Ace",1);
	var card[2] = new Card("2",2);
	var card[3] = new Card("3",3);	
	var card[4] = new Card("4",4);
	var card[5] = new Card("5",5);
	var card[6] = new Card("6",6);
	var card[7] = new Card("7",7);
	var card[8] = new Card("8",8);
	var card[9] = new Card("9",9);
	var card[10] = new Card("10",10);
	var card[11] = new Card("Jack",10);
	var card[12] = new Card("Queen",10);

for (var i = 0; i > 12; i++)
	this.value = Math.floor(Math.random() * i);
			return value();
	};

var	ucard = deal();

};
document.getElementById("card1").innerHTML=ucard;

};

var cards = [ king, ace, two, three, four, five, six, seven, eight, nine, ten, jack, queen ]

var king = {name: "King", value: 10};
var ace = {name: "Ace", value: 1};
var two = {name: "2", value: 2};
var three = {name: "3", value: 3};
var four = {name: "4", value: 4};
var five = {name: "5", value: 5};
var six = {name: "6", value: 6};
var seven = {name: "7", value: 7};
var eight = {name: "8", value: 8};
var nine = {name: "9", value: 9};
var ten = {name: "10", value: 10};
var jack = {name: "Jack", value: 10};
var queen = {name: "Queen", value: 10};

/*
var deal = function(card) {
	var card = Math.floor(Math.random() * 13 + 1);
		return card;
   
	if (card() = 1) {
		console.log("Ace");
		prompt("Would you like to assign it a value of 1 or 11?");
	}
};

	function Card(name,value) {
		this.name=name;
		this.value=value;
	};
	
	var card[0] = new Card("King",10);
	var card[1]	= new Card("Ace",1);
	var card[2] = new Card("2",2);
	var card[3] = new Card("3",3);	
	var card[4] = new Card("4",4);
	var card[5] = new Card("5",5);
	var card[6] = new Card("6",6);
	var card[7] = new Card("7",7);
	var card[8] = new Card("8",8);
	var card[9] = new Card("9",9);
	var card[10] = new Card("10",10);
	var card[11] = new Card("Jack",10);
	var card[12] = new Card("Queen",10);
	
var card1 = deal();
var card2 = deal();

	
/* ace 1 or 11 verification code frame
	function myFunction() {
		var x, text;

		// Get the value of the input field with id="numb"
		x = document.getElementById("numb").value;

		// If x is Not a Number or less than one or greater than 10
		if (isNaN(x) || x < 1 || x > 10) {
			text = "Input not valid";
		} else {
			text = "Input OK";
		}
		document.getElementById("demo").innerHTML = text;
	}
*/

