"use strict";

localStorage.setItem("testData", JSON.stringify(test));
//console.log(localStorage);

$(function(){

  var testData = {testItems : [JSON.parse(localStorage.getItem("testData"))]};

  var testOutput = document.getElementById("testOutput");
  testOutput.innerHTML = tmpl("item_tmpl", testData);
//console.log(testData);

	function checkTest(){
		var answers = $(".checkbox"),
			testOk = true,
			message;
		//console.log(answers);
		answers.each(function(){
				if($(this).prop("checked") !== $(this).data("correct")){
					testOk = false;
				}
			});
		//console.log(testOk);
		message = testOk ? "Тест пройден успешно!" : "Вы не сдали тест";
		$(".modalWin").dialog("open");		
		$(".modalWin").html(message);	
	}
	
	var checkBtn = $(".checkBtn");
	checkBtn.click(checkTest);
	
	$(".modalWin").dialog({modal:true,
			width:400,
			height:200,
			autoOpen:false});
});

