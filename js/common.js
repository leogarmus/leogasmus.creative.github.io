document.body.onload =function(){
	var preloader = document.getElementById("page-preloader");
	preloader.classList.toggle('done');
}	
	/*******MENU Button*****
	/
	/
	/************************/
document.getElementById("hamburger-menu").onclick = function() {menuShow()};
document.getElementById("navigation-close").onclick = function() {menuHide()};

function menuShow(){
	document.getElementById("menu").style.right = 0;
}	
function menuHide(){
	document.getElementById("menu").style.right = '-50%';
}	
	/*******Scroll Button*****
	/
	/
	/************************/
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


