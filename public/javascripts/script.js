/**
 * @desc: 		default script file used by the following
 *			 	LoremSite
 *				LoremSite - Menu1
 *				LoremSite - Menu2
 *				LoremSite - Menu3
 *				LoremSite - Menu4
 *				LoremSite - Menu5
 *
 * @author: 	Rudi Wever, rudi.wever@gmail.com
 * @date: 		August 4, 2017
*/

//get initial width
var width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;


window.onload=init;


/**
  * @desc: 		initializes page behavior
  * @param: 	none
  * @return: 	none
*/
function init(){
	setLinkBackgroundColor();
}


/**
  * @desc: 		initializes page behavior
  * @param: 	none
  * @return: 	none
*/
function setLinkBackgroundColor() {
	//get last character of page title; note: value is string.
	var number = (document.title).slice((document.title).length-1,(document.title).length);

	//get all secondary navigations links
	var links = document.querySelectorAll(".second_level_nav a");
	
	//set text, color, and background for this navigation link if selected.
	var current = " (current)";
	var pattern = /[1-5]/;
	var match = number.match(pattern);
	if (match !== null){
		var linkText = links[parseInt(number-1)].innerHTML;
		links[parseInt(number-1)].style.background = '#E9E8E8';
		links[parseInt(number-1)].style.color = '#000000';
		links[parseInt(number-1)].innerHTML = linkText + current;
		if (width < 1024){
			links[parseInt(number-1)].style.outline = '3px solid #BDBDBD';
			links[parseInt(number-1)].style.outlineOffset  = '-3px';
		}
	}	
}

/**
  * @desc: 		is called when window is resized
  * @param: 	none
  * @return: 	none
*/
function windowResized(){
	//get current width
	var current_width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

console.log(current_width);
	//get last character of page title; note: value is string.
	var number = (document.title).slice((document.title).length-1,(document.title).length);

	//get all secondary navigations links
	var links = document.querySelectorAll(".second_level_nav a");
	
	if (current_width >= 1024){
		links[parseInt(number-1)].style.outline = 'none';
		links[parseInt(number-1)].style.outlineOffset  = '0px';
	}
	if (current_width < 1024){
		links[parseInt(number-1)].style.outline = '3px solid #BDBDBD';
		links[parseInt(number-1)].style.outlineOffset  = '-3px';
	}
}