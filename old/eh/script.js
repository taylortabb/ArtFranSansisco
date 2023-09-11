var $mouseX;
var $mouseY;
var $scrolled;
$('.boxes').on(' mousemove mouseenter',function(e){
	"use strict";
	e= e||window.event;
	$mouseX = e.pageX||e.clientX+document.body.scrollLeft;
	$mouseY = e.pageY||e.clientY+document.body.scrollTop;
	$scrolled = $(window).scrollTop();
	
	var $elemLeft = $mouseX - $(this).offset().left;
	var $elemTop = ($mouseY - $scrolled) - ( $(this).offset().top - $scrolled);
  $(this).children('.circle').css({'transition':'all 0.25s ease-in-out','opacity':1,'width':'10%','height':'10%','left':$elemLeft , 'top':$elemTop})
  
});
$('.boxes').on('mouseout mouseleave',function(){
 
  function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
  $(this).children('.circle').css({'transition':'all 0.5s ease-in-out','left':'43%', 'top':'43%','width':'50%','background':getRandomColor(),'height':'50%','opacity':0.75})
});