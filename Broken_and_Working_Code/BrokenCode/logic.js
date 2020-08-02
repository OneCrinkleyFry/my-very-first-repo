$("#factButton").on("click", function() {
	var number = Math.floor((Math.random() * booFacts.length));
	$("#factText").text(booFacts[number])
})

//I seperated the facts in the array, so they wold generate correctly
var booFacts = ["Boo is a pomeranian", "Boo's best friend is another pomeranian named Buddy", "Boo the Pomeranian was born on March 16, making him a Pisces", "Boo's favourite food is grass", "Boo has released two books"]

//I put quotes around pink, so that the function would work properly
$("#textPink").on("click", function() {
	$("#funText").css("color", "pink")
})
$("#textOrange").on("click", function() {
	$("#funText").css("color", "orange")
})
$("#textGreen").on("click", function() {
	$("#funText").css("color", "green")
})

//I added quotes to the word click
$("#boxGrow").on("click", function() {
	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})

//I added quotes to the word click
$("#boxShrink").on("click", function() {
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})