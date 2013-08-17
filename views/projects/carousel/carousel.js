(function ($) {
		$(document).ready(function(){
			var $imgs = $('.img'),
				width = $('.img-rotator').width();
				curr = 0,
				next = 1;

			// hide all images except the first
			hideAllBut($imgs, curr);

			// give the first image a z-index 1 and the
			// next a z-index of 2
			$imgs.eq(curr).css('z-index', '1');
			$imgs.eq(next).css('z-index', '2');

			// position the next image to the left
			$imgs.eq(next).css('left', width);

			// Events
			$('#btn').bind('click', slide);

			// Fucntion hideAllBut
			// hide all element in list except el
			function hideAllBut(list, el) {
				list.hide();
				list.eq(el).show();
			}

			// slide images
			function slide (){
				$imgs.eq(next).show();
				$imgs.eq(next).animate(
					// animation css
				{
					'left': '0px'
				}, 
					// animate duration
				1000, 
					// animation callback
				function(){
					if (curr++ >= $imgs.length-1) curr =0;
					if (next++ >= $imgs.length-1) next =0;

					hideAllBut($imgs, curr);

					$imgs.eq(curr).css('z-index', '1');
					$imgs.eq(next).css('z-index', '2');
					$imgs.eq(next).css('left', width);
				});	
			}
		});
	})(jQuery)