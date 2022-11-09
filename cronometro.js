

var min = '00'
var sec = '00'

var interval

function start(){
	interval = setInterval(watch, 1000)
}


function pause(){
	clearInterval(interval)
}

function stop(){
	clearInterval(interval)
	sec = '00'
	min = '00'
	document.getElementById('watch').innerText = min + ':' + sec
}

function watch(){
	sec++
	if (sec == 60){
		sec = '00'
		min++
	}

	document.getElementById('watch').innerText = min + ':' + sec
}
