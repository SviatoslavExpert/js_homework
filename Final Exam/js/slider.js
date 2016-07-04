$(document).ready(function() {
    var leftUIEl = $('.carousel-arrow-left');
    var rightUIEl = $('.carousel-arrow-right');
    var elementsList = $('.carousel-list');
 
    var pixelsOffset = 300;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
    var maximumOffset = 0;
 
    leftUIEl.click(function() {
		var currentId = $(this).closest(".slider").attr("id");
		
		var leftUIEl = $("#" + currentId + ' .carousel-arrow-left');
		var rightUIEl = $("#" + currentId + ' .carousel-arrow-right');
		var elementsList = $("#" + currentId + ' .carousel-list');
		
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += 300;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        } 
    });
 
    rightUIEl.click(function() {
		var currentId = $(this).closest(".slider").attr("id");
		/* console.log($(this).closest(".slider")); */
		
		var leftUIEl = $("#" + currentId + ' .carousel-arrow-left');
		var rightUIEl = $("#" + currentId + ' .carousel-arrow-right');
		var elementsList = $("#" + currentId + ' .carousel-list');
		
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= 300;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }   
    });
 
});