function showHideTooltip(){
	$(this)
		.closest(".textfield")
		.siblings(".message")
		.stop()
		.slideToggle();
}

$('.form-control')
		.mouseover(showHideTooltip)
		.mouseout(showHideTooltip);