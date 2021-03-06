function mobile() {

	var timerGoTop;
	$(".goTop").click(function(){

		var step = window.pageYOffset/100;

		clearInterval(timerGoTop);
		timerGoTop = setInterval(function(){
			window.scrollTo(0, window.pageYOffset - step);
			console.log(step);
			console.log(window.pageYOffset);
			if(Math.abs(window.pageYOffset) <= Math.abs(step))
			{
				clearInterval(timerGoTop);
				window.scrollTo(0, 0);
			}
		}, 10);
	});

	//Переключення кнопки включення меню
	$(".bt_menu").toggle(
		function()
		{
			$("nav").css({"visibility": "visible"});
			setTimeout(function(){
				$("nav").css({"opacity": "1"});
			}, 0);

			$(".bt_menu img").css({"height": "0%"});
			$(".bt_menu").css({"background-color": "#aaaaaa"});
			setTimeout(function(){
				$(".bt_menu img").attr("src","img/arrows_down.png");
				$(".bt_menu img").css({"height": "19px"});
			}, 100);

			setTimeout(function(){
				$("section").css({"display": "none"})
			}, 200);
		},

		function ()
		{
			$("section").css({"display": ""})
			setTimeout(function(){
				$("nav").css({"visibility": "hidden"});
			}, 200);
			setTimeout(function(){
				$("nav").css({"opacity": "0"});
			}, 0);

			$(".bt_menu img").css({"height": "0%"});
			$(".bt_menu").css({"background-color": "#182153"});
			setTimeout(function(){
				$(".bt_menu img").css({"height": "19"});
				$(".bt_menu img").attr("src","img/arrows_top.png");
			}, 100);
		}
	);

	$("nav li").click(function(event){
		var click_event = new Event("click");
		document.querySelector(".bt_menu").dispatchEvent(click_event);

		var elems = [experience, education, works, skills, contacts];
		var elem = elems[event.target.getAttribute("data-num")];
		window.scrollTo(0, elem.offsetTop);
	});


	var timerScroll;

	window.addEventListener('scroll', function() {

		$(".goTop").css({"opacity": "1", "visibility": "visible"});

		clearTimeout(timerScroll);
		timerScroll = setTimeout(function(){
			$(".goTop").css({"opacity": "0", "visibility": "hidden"});
		}, 4000);

	});

}
