function myCards() {
	document.getElementById("outcome").innerHTML=" ";
		document.getElementById("dnscore").innerHTML=" ";
		document.getElementById("dhit").innerHTML=" ";
		document.getElementById("nscore").innerHTML=" ";
		document.getElementById("card3").innerHTML=" ";
	var deal = function() {
		card = Math.floor(Math.random() * 52 + 1);
		return card;
	};

/*My Cards*/
	var card1 = deal();
	var card2 = deal();
	
	var getValue = function(card) {
	var x = card % 13;
		if ( x > 10 || x === 0 ) {
			return 10;
		} else if ( x === 1 ) {
			return 11;
		} else {
			return (x);
		}
	};

	document.getElementById("card1").innerHTML=getValue(card1);
	document.getElementById("card2").innerHTML=getValue(card2);
		
		var score = function() {
			return getValue(card1) + getValue(card2);
		};
		
	document.getElementById("score").innerHTML=score();
		
		var card3 = deal();
	
		var nscore = function() {
			return score() + getValue(card3);
		};


	/*Dealer's Cards*/	
		var dcard1 = deal();
		var dcard2 = deal();

	document.getElementById("dcard1").innerHTML=getValue(dcard1);
	document.getElementById("dcard2").innerHTML=getValue(dcard2);
		
		var dscore = function() {
			return getValue(dcard1) + getValue(dcard2);
		};
		
	document.getElementById("dscore").innerHTML=dscore();

		var dcard3 = deal();
		
		var dnscore = function() {
			return dscore() + getValue(dcard3);
		};
		
	
	/*outcomes*/
	
	document.getElementById("hit").onclick=function() {
		document.getElementById("card3").innerHTML="Your new card is: " + getValue(card3);
		document.getElementById("nscore").innerHTML="Your new score is: " +nscore();
			if (nscore() > 21) {
				document.getElementById("outcome").innerHTML="You Lost";
			} else if (nscore() === 21) {
				document.getElementById("outcome").innerHTML="Blackjack! Well done!";	
			};
	};		
			
	
	document.getElementById("stay").onclick=function() {					
			if (dscore() < 17) {
				document.getElementById("dhit").innerHTML="Dealer hits: " + getValue(dcard3);
				document.getElementById("dnscore").innerHTML="Dealer's new score is: " + dnscore();
			} else if (dnscore() > 21) {
				document.getElementById("outcome").innerHTML="You Won!";
			} else if (dscore() == score() || dscore() == nscore() || dnscore() == score() || dnscore() == nscore()) {
				document.getElementById("outcome").innerHTML="It's a Tie!";
			} else if (dscore() === 21 || dnscore() === 21) {
				document.getElementById("outcome").innerHTML="You Lost!";
			} else if (dscore() > score() || dscore() > nscore() || dnscore() > score() || dnscore() > nscore()) {
				document.getElementById("outcome").innerHTML="You Lost!";
			} else if (dscore() < score() || dscore() < nscore() || dnscore() < score() || dnscore() < nscore()) {
				document.getElementById("outcome").innerHTML="You Won!";
			};
	};
	
	

};