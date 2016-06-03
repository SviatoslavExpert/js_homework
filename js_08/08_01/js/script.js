function search(){
			var API_KEY = '2634557-84f9cc9e0a12d0e04644a838e',
				URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent($("#query").val()),
				searchResults = $("#searchResults");
			$.getJSON(URL, function(data){
				if (parseInt(data.totalHits) > 0)
					$.each(data.hits, function(i, hit){ 
						console.log(hit.pageURL);
						searchResults.append(
								"<a href=\"" 
								+ hit.pageURL
								+ "\" class=\"resultItem\" target=\"_blank\"><img src=\""
								+ hit.previewURL 
								+ "\"><span>["
								+ hit.imageWidth.toString() 
								+ " x " 
								+ hit.imageHeight.toString() 
								+ "]</span></a>"
								);
						});
				else
					console.log('No hits');
			});
		}

$("#searchBtn").click(search);
$("body").keyup(function(event){
	if(event.which == "13"){
		search();
	}
});