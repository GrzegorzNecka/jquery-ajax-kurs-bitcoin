$(function () {
	
	function getExchangeData() {
		 
        var currentPrice = parseFloat($('#buy-price').html()).toFixed(2);

		$.getJSON('https://blockchain.info/pl/ticker', function (data) {
			parseFloat($('#buy-price').text(data.PLN.buy)).toFixed(2);
		
			if(currentPrice < (data.PLN.buy).toFixed(2)) {
				$('#buy-arrow').css('color', '#48a491').removeClass().addClass('fas fa-arrow-alt-circle-up');

			} else if(currentPrice > (data.PLN.buy).toFixed(2)) {
				$('#buy-arrow').css('color', '#f25055').removeClass().addClass('fas fa-arrow-alt-circle-down');

			} else {
				$('#buy-arrow').css('color', 'black').removeClass().addClass('fas fa-minus');
			}		
		});
	}
	
	getExchangeData();

	var interval = setInterval(getExchangeData, 5000);
	
	$('button').click(function(){
		clearInterval(interval);
		interval = setInterval(getExchangeData, $(this).val());
		$('#refresh-frequency').html($(this).text());
	});
	
});