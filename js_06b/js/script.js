//alert ('Святослав');

$(function() {


	var html = $('#test').html();
	var articles = [
		{
			title: 'Article 1',
			content: 'Some text 1'
		},
		{
			title: 'Article 2',
			content: 'Some text 2'
		},
		{
			title: 'Article 3',
			content: 'Some text 3'
		}
	];
	
	var content = tmpl(html, {
		data: articles
		});
	
	$('body').append(content);
	//console.log(pageData[0]["name"]);
});