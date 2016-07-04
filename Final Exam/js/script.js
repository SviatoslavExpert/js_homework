function getImages(sQuery){
			var API_KEY = '2634557-84f9cc9e0a12d0e04644a838e',
				URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent(sQuery),
				searchResults = $("#searchResults")
				,texts = ["Sport and Activity", "Wellness and Health", "Extreme Sports", "Games", "Culture and Education", "Relaxation", "Travelling"]
				;
				searchResults.html("");
				//console.log(sQuery);
				
			$.getJSON(URL, function(data){
				if (parseInt(data.totalHits) > 0)
					$.each(data.hits, function(i, hit){
						console.log(hit.pageURL, i);
							if(i<7 && i!=4 && i!=5){
						searchResults.append(
								"<div class=\"grid-item grid__item\" style=\"background:url("
								+ hit.previewURL 
								+ "); background-size:cover;\">"
								+ texts[i]
								+ "</div>"
								);
								}
							else if(i==4 || i==5){
								searchResults.append(
								"<div class=\"grid-item grid-item--width2 grid__item\" style=\"background:url("
								+ hit.previewURL 
								+ "); background-size:cover;\">"
								+ texts[i]
								+ "</div>"
								);
							}	
						});
				else
					console.log('No hits');
			});
		}

$("#searchBtn").click(function(){getImages($("#query").val())});

getImages("summer");