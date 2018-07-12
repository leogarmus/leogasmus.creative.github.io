window.onload =function(){
	document.getElementById("hamburger-menu").onmouseover = menuShow;
	document.getElementById("hamburger-menu").onmouseout = menuHide;

	function menuShow(){
		document.getElementById("menu").style.right = 0;
	}	
	function menuHide(){
		document.getElementById("menu").style.right = '-50%';
	}	
}	
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollTop").style.display = 'block';
    } else {
        document.getElementById("scrollTop").style.display = 'none';
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
}

