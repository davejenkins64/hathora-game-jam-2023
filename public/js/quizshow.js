let state = "starting";
let countdown = 3; // 3 for ready, 10 for each question

function tick() {
	countdown -= 1; // will be ignored once done

	if (state === "starting") {
		// update ready countdown
		document.getElementById("ready").innerHTML = "Countdown to Start: " + countdown;

		if (countdown === 0) {
			// hide ready countdown
			document.getElementById("ready").style.display = 'none';

			// unhide question and countdown
			document.getElementById("questions").style.display = 'inline';
			document.getElementById("time-left").style.display = 'block';

			state = "playing";
			countdown = 10;
		}
	} else if (state === "playing") {
		// update playing countdown
		document.getElementById("time-left").innerHTML = "Time Left: " + countdown;

		if (countdown === 0) {
			// hide question section and countdown
			document.getElementById("questions").style.display = 'none';
			document.getElementById("time-left").style.display = 'none';

			// update scores, pretend game over after 1 question
			// TODO

			document.getElementById("rules").style.display = 'none';
			document.getElementById("game-over").style.display = 'block';

			state = "done";
		}
	}
}

function quizshow() {
	// hide question section and countdown
	document.getElementById("questions").style.display = 'none';
	document.getElementById("time-left").style.display = 'none';
	document.getElementById("game-over").style.display = 'none';

	// simulate polling
	setInterval(tick, 1000);
}

