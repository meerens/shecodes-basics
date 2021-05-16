function clickMe() {
	let name = prompt("What is your name?");
	let tableau = prompt(`👋🏽 Hello ${name}, have you heard about Tableay before?(y/n)`);

	if (tableau === "y") {
		alert(
			"In case you haven't heard the community hub was recently updated so go check it out at https://www.tableau.com/community"
		);
	} else {
		alert(
			"If you're new to Tableau and would like to learn more I recommend you check out the community hub at https://www.tableau.com/community"
		);
	}
}
let clickMeButton = document.querySelector("button");
clickMeButton.addEventListener("click", clickMe);
