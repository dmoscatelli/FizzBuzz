

//$(document).ready(function() {
//$("body").css("background-color","blue");
//});

$(document).ready(function() {

for (var i = 1; i < 100; i++) {
	if (i%3 == 0 && i%5 == 0) {
		$("ol").append("<li>FizzBuzz</li>");
	}
	else if (i%3 == 0 && i%5 >0){
		$("ol").append("<li>fizz</li>");
	}
	 else if (i%5 == 0 && i%3 >0){
		$("ol").append("<li>buzz</li>");
	}
	else {
		$("ol").append("<li>" + i + "</li>");
	}

}	
});




