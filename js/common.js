
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
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("sroll-btn").style.display = 'block';
    } else {
        document.getElementById("sroll-btn").style.display = 'none';
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
}

