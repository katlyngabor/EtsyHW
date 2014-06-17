etsyitems.forEach(function(a){
	a.results.forEach(function(b){
		$('.main-body').append('<div class="name">' + b.title + '</div>' + '<div class="price">' + '$' + b.price + 
			'</div>' + '<div class="images"><img src=' + b.Images[0].url_75x75 + '/></div>');
	});
});

