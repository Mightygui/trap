var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/* [Oct 2021] Added to comply with strict browser policies. */
document.addEventListener('click', musicPlay);

function musicPlay() {
    var audio = document.getElementById('youare-audio');
	var micon = document.getElementById('youare-micon');
	
	micon.addEventListener('click', musicPlay);
	
	if (audio.duration > 0 && audio.paused) {
		audio.play();
		micon.src = "images/speaker.png";
	}
	else {
		audio.pause();
		audio.currentTime = 0;
		
		micon.src = "images/speakerm.png";
	}
	
	document.removeEventListener('click', musicPlay);
}

var faudio = new Audio('youare.mp3')

faudio.addEventListener('timeupdate', function() {
	console.log('TimeUpdate invoked.');

    if (this.currentTime > this.duration - .45) {
        this.currentTime = 0;
        this.play();
    }
}
);
/* [Oct 2021] End part. */

function bookmark() {
	if ((navigator.appName == "Microsoft Internet Explorer") && (parseInt(navigator.appVersion) >= 4)) {
		var url = "lol.html";
		var title = "Idiot!";
		
		window.external.AddFavorite(url, title);
	}
}

var xOff = 5;
var yOff = 5;
var xPos = 400;
var yPos = -100;
var flagRun = 1;

function changeTitle(title) {
	document.title = title;
}

function openWindow(url) {
	aWindow = window.open(url, "_blank", 'menubar=no, status=no, toolbar=no, resizable=no, width=357, height=330, titlebar=no, alwaysRaised=yes');
}

function proCreate() {	
	for (var i = 0; i < 5; i++) {
		openWindow('lol.html');
	}
}

function newXlt() {
	xOff = Math.ceil(-6 * Math.random()) * 5 - 10;
	window.focus();
}

function newXrt() {
	xOff = Math.ceil(7 * Math.random())  * 5 - 10;
	window.focus();
}

function newYup() {
	yOff = Math.ceil(-6 * Math.random()) * 5 - 10;
	window.focus();
}

function newYdn() {
	yOff = Math.ceil( 7 * Math.random()) * 5 - 10;
	window.focus();
}

function fOff(){
	flagRun = 0;
}

function playBall() {
    xPos += xOff;
    yPos += yOff;
    
	if (xPos > screen.width - 357) newXlt();    
	if (xPos < 0) newXrt();
    
	if (yPos > screen.height - 330) newYup(); 		
	if (yPos < 0) newYdn();
    
	if (flagRun == 1) {
        window.moveTo(xPos, yPos);
        setTimeout('playBall()', 1);
    }
}

/* [Oct 2021] Better code. */
window.onload = function () {
	flagRun = 1;
	
	playBall();
	bookmark(); // Internet Explorer only (what a piece of shit)
	
	return true;
}

window.onmouseout = function () {
	proCreate();

	return null;
};

window.oncontextmenu = function() {
	
	return false;
}

window.onkeydown = function() {	
	var keyCode = event.keyCode;
	
	if (keyCode == 17 || keyCode == 18 || keyCode == 46 || keyCode == 115) {	
		alert("You are an idiot!"); 
		proCreate();
	}
	
	return null;
}

window.onbeforeunload = function() {
    return "Are you an idiot?";
};
/* [Oct 2021] End of amendments. */

}
/*
     FILE ARCHIVED ON 16:07:53 Feb 01, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:13:14 Feb 08, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 160.218
  exclusion.robots: 0.104
  exclusion.robots.policy: 0.092
  cdx.remote: 0.096
  esindex: 0.012
  LoadShardBlock: 105.33 (3)
  PetaboxLoader3.datanode: 150.487 (5)
  CDXLines.iter: 17.38 (3)
  load_resource: 138.566 (2)
  PetaboxLoader3.resolve: 47.364 (2)
*/