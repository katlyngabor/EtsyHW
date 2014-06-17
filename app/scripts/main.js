etsyitems.forEach(function(a){
	a.results.forEach(function(b){
		$('.main-body').append('<div class="item"> <div class="name">' + b.title + 
			'</div>' + '<div class="price">' + '$' + b.price + '</div> <div class=currency_code>'
			 + b.currency_code +'</div>' + '<div class="images"><img src="' + b.Images[0].url_170x135 + 
			 '"/></div>' + '<div class="user-id">'+ b.user_id + '</div></div>	');
	});
});
