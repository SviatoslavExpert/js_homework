var	clsStopwatch = function() {
		var	startAt	= 0;	//Private var, Time of last start / resume. (0 if not running)
		var	lapTime	= 0;	//Private var, Time on the clock when last stopped in milliseconds

		var	now	= function() {
				return (new Date()).getTime(); 
			}; 
 
		this.start = function() {
				startAt	= startAt ? startAt : now(); //Public method
			};

		this.stop = function() {
				// If running, update elapsed time otherwise keep it
				lapTime	= startAt ? lapTime + now() - startAt : lapTime;
				startAt	= 0; // Paused
			};

		this.reset = function() {
				lapTime = startAt = 0;
			};

		this.time = function() {
				return lapTime + (startAt ? now() - startAt : 0); 
			};
	};

var x = new clsStopwatch();
var $time;
var clocktimer;


function pad(num, size) {
	var s = "0000" + num;
	return s.substr(s.length - size);
}

function formatTime(time) {
	var h = m = s = ms = 0;
	var newTime = '';

	h = Math.floor( time / (60 * 60 * 1000) );
	time = time % (60 * 60 * 1000);
	m = Math.floor( time / (60 * 1000) );
	time = time % (60 * 1000);
	s = Math.floor( time / 1000 );
	ms = time % 1000;

	newTime = pad(h, 2) + ':' + pad(m, 2) + ':' + pad(s, 2) + ':' + pad(ms, 3);
	return newTime;
}

function show() {
	$time = document.getElementById('time');
	var startStopBtn = document.getElementById("startStopBtn")
	,resetBtn = document.getElementById("resetBtn")
	;
	update();
	
	startStopBtn.onclick = startStop;
	resetBtn.onclick = reset;
}

function update() {
	$time.innerHTML = formatTime(x.time());
}


var start = 1; 

function startStop(){
	if(start == 1){
		clocktimer = setInterval("update()", 1);
		x.start();
		start = 0;
		startStopBtn.value = "stop";
	}
	else if(start == 0){
		x.stop();
		clearInterval(clocktimer);
		start = 2;
		startStopBtn.value = "resume";
	}
	else if(start == 2){
		clocktimer = setInterval("update()", 1);
		x.start();
		start = 0;
		startStopBtn.value = "stop";
	}
}

function reset() {
	startStop();
	x.reset();
	update();
	start = 1;
	startStopBtn.value = "start";
}



