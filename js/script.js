
setTimeout(function(){
	$("#main img").css({"opacity": "1", "margin": "0px"});
	$("#main_info").css({"opacity": "1", "margin": "0px"});
}, 500);

// обработчик для меню: плавне переміщення по пунктам сайта
$("header li").click(function(event){
	
	var elems = [experience, education, works, skills, contacts];
	var elem = elems[event.target.getAttribute("data-num")];
	menu_scroll(elem);
	
	function menu_scroll(elem) {
		var elemTop = elem.offsetTop - 100;
		if((elemTop + document.documentElement.clientHeight) > document.body.clientHeight)
		{
			elemTop = document.body.clientHeight - document.documentElement.clientHeight;
		}
		var winScroll = document.body.scrollTop;
		var step = (elemTop - winScroll)/100;

		timerId = setInterval(function(){
			document.body.scrollTop += step;
			if(Math.abs(document.body.scrollTop - elemTop) < Math.abs(step))
			{
				clearInterval(timerId);
				document.body.scrollTop = elemTop;
			}
		}, 10);
			
		return(true);
	};
	
});

// обработчик для назви сайту: плавне переміщення на початок сайту
$("header p").click(function(event){
	
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


window.onscroll = function() {
	
	// обработчик для меню: зміна кольору пунктів при переміщенні по сайту
	var elems = [experience, education, works, skills, contacts];
	var elemsTop = [experience.offsetTop - 110,
					education.offsetTop - 110,
					works.offsetTop - 110,
					skills.offsetTop - 110,
					document.body.clientHeight - document.documentElement.clientHeight];
	var winScroll = document.body.scrollTop;
	
	switch(true)
	{
		case (winScroll < elemsTop[0]):
			backColor();
			break;
		case ((winScroll > elemsTop[0]) && (winScroll < elemsTop[1])):
			backColor();
			$($("header li")[0]).css({color: "#DBDDEC"});
			break;
		case ((winScroll > elemsTop[1]) && (winScroll < elemsTop[2])):
			backColor();
			$($("header li")[1]).css({color: "#DBDDEC"});
			break;
		case ((winScroll > elemsTop[2]) && (winScroll < elemsTop[3])):
			backColor();
			$($("header li")[2]).css({color: "#DBDDEC"});
			break;
		case ((winScroll > elemsTop[3]) && (winScroll < elemsTop[4])):
			backColor();
			$($("header li")[3]).css({color: "#DBDDEC"});
			break;
		case (winScroll === (document.body.clientHeight - document.documentElement.clientHeight)):
			backColor();
			$($("header li")[4]).css({color: "#DBDDEC"});
			break;
	}
	
	
	function backColor()
	{
		for(var i = 0;  i < 5; i++)
		{
			$($("header li")[i]).css({color: ""});
		}
		return(true);
	}
	
	//Виклик аніміцій
	
	startAnimateElem(experience);
	startAnimateElem(education);
	startAnimateElem(works);
	
	function startAnimateElem(elem)
	{
		if((document.body.scrollTop + document.documentElement.clientHeight/2) > elem.offsetTop)
		{
			$(elem).find(".info_tab_deckription").css({"left": "0px", "opacity": "1"});
			$(elem).find(".info_tab_year").css({"right": "0px", "opacity": "1"});
			$(elem).find(".line").css({"opacity": "1"});
			$(elem).find(".point").css({"top": "0", "opacity": "1"});
		}
	}
	
	
	
	if((document.body.scrollTop + document.documentElement.clientHeight/2) > skills.offsetTop)
	{
		setTimeout(function(){$($(".skills_tab > div")[0]).animate({width: "410px"}, 1000);}, 100);
		setTimeout(function(){$($(".skills_tab > div")[1]).animate({width: "410px"}, 1000);}, 400);
		setTimeout(function(){$($(".skills_tab > div")[2]).animate({width: "410px"}, 1000);}, 300);
		setTimeout(function(){$($(".skills_tab > div")[3]).animate({width: "410px"}, 1000);}, 600);
		setTimeout(function(){$($(".skills_tab > div")[4]).animate({width: "410px"}, 1000);}, 500);
		setTimeout(function(){$($(".skills_tab > div")[5]).animate({width: "410px"}, 1000);}, 800);
	}
};
















