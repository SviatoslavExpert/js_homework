//  alert ('This is script.js file');

//alert ('Святослав');

$(function() {


	var html = $('#slider1').html();
	
	var content = tmpl(html, {
		data: slidesData
		}); 

	$('body').append(content);
	 
	console.log(slidesData[0]["img_name"]);
});

	//  переменная slidesData вынесена в отдельный файл slidesData.js
	//  этот файл подсоединяется к индекс хтмл перед файлом script.js
	//  таким образом переменная уже хранится в оперативной памяти компа