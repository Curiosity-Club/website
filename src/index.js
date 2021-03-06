caret = document.getElementById("caret");
motto_div = document.getElementById("motto");

const text = ["Connect.", "Learn.", "Innovate."];

window.i = 0;
window.j = 0;

setInterval(() => {
	caret.classList.toggle("invisible");
}, 530);

typewriterAnim = (text) => {
	i = window.i;
	j = window.j;
	if (i > 0) {
		motto_div.innerHTML += text[j][i - 1];
	} else if (i <= 0) {
		motto_div.innerHTML = motto_div.innerHTML.slice(0, -i);
	}
	if (i > text[j].length - 1) {
		window.i = -text[j].length;
		clearInterval(refreshIntervalId);
		setTimeout(() => {
			refreshIntervalId = setInterval(typewriterAnim, 110, (s = text));
		}, 530);
	}
	if (motto_div.innerHTML == "") {
		window.j += 1;
	}
	if (window.j >= text.length) {
		j = 0;
	}
	window.i += 1;
};
var refreshIntervalId = setInterval(typewriterAnim, 110, (s = text));
