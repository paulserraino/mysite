(function ($){
	$(document).ready(function (){

		/*
		*	Box Animation Variables
		*/
		var $box  = $('.box'),
			$box1 = $('.box1'),
			$box2 = $('.box2'),
			$box3 = $('.box3'),
			$box4 = $('.box4');

		var toggle = false;

		var dementions = [200, 150, 100, 50];
		var colors = ['lightblue', 'lightgreen', 'magenta', 'cyan'];

		/*
		*	Box CSS Setup
		*/
		for (var i=0; i < $box.length; i++){
			$box.eq(i).css({
				'width': dementions[i],
				'height': dementions[i],
				'background-color': colors[i]
			})
		}

		$box.css({})

		/*
		*	Box Animation Events
		*/
		$box.on('click', function (){
			if (!toggle){
				reposition($box1,-100, 100)
				reposition($box2, -250, 5)
				reposition($box3, 0, 500)
				reposition($box4, -500, 500)
				toggle = true;
			} else {
				reposition($box,0, 0)
				toggle = false;
			}
		});

		function reposition(jqEl, x, y) {
			jqEl.css({
				'-webkit-transform': 'translate3d('+x+'px,'+y+'px, 0px)',
				'-moz-transform': 'translate3d('+x+'px,'+y+'px, 0px)',
				'transform': 'translate3d('+x+'px,'+y+'px, 0px)'
			});
		}
	})
})(jQuery)