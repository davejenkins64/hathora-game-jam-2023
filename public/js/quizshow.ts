// quizshow.ts should generate quizshow.js which is run onLoad
// by quizshow.ejs

/* eslint-env browser */
let state = "starting";
let countdown = 3; // 3 for ready, 10 for each question

function pre_game() {
	// hide question section and countdown
	document.getElementById("questions").style.display = 'none';
	document.getElementById("time-left").style.display = 'none';
	document.getElementById("game-over").style.display = 'none';
}

function run_game() {
	// hide ready countdown
	document.getElementById("ready").style.display = 'none';

	// unhide question and countdown
	document.getElementById("questions").style.display = 'inline';
	document.getElementById("time-left").style.display = 'block';

	state = "playing";
	countdown = 10;
}

function end_game() {
	// hide question section and countdown
	document.getElementById("questions").style.display = 'none';
	document.getElementById("time-left").style.display = 'none';

	// update scores, pretend game over after 1 question
	// TODO

	document.getElementById("rules").style.display = 'none';
	document.getElementById("game-over").style.display = 'block';

	state = "done";
}

function tick() {
	countdown -= 1; // will be ignored once done

	if (state === "starting") {
		// update ready countdown
		document.getElementById("ready").innerHTML = "Countdown to Start: " + countdown;

		if (countdown === 0) {
			run_game()
		}
	} else if (state === "playing") {
		// update playing countdown
		document.getElementById("time-left").innerHTML = "Time Left: " + countdown;

		// TODO don't end the game until someone wins after multiple questions
		if (countdown === 0) {
			end_game();
		}
	}
}

function quizshow() {
	pre_game();

	// simulate polling
	setInterval(tick, 1000);
}

// end of file
