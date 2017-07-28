$(".goTop").click(function(){

	var winScroll = document.body.scrollTop;
	var step = winScroll/100;

	timerId = setInterval(function(){
		document.body.scrollTop -= step;
		if(Math.abs(document.body.scrollTop) < Math.abs(step))
		{
			clearInterval(timerId);
			document.body.scrollTop = 0;
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
	document.body.scrollTop = elem.offsetTop;
});

window.onscroll = function() {
	
	$(".goTop").css({"opacity": "1", "visibility": "visible"});
	
	setTimeout(function(){
		$(".goTop").css({"opacity": "0", "visibility": "hidden"});
	}, 4000);
};
