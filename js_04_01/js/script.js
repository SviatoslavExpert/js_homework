function getTabContent(){
	var tabContents = $(".tabs-content > div");
	tabContents.hide();
	tabContents.filter(this.hash).show();
	$(".nav-tabs > li").removeClass("active");
	$(this).closest("li").addClass("active");
}

$(".nav-tabs a").click(getTabContent);