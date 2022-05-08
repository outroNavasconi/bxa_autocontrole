const body = document.querySelector("body")
const head = document.getElementById("head")
const personControlled = document.getElementById("personControlled")
const personNotControlled = document.getElementById("personNotControlled")

head.onclick = () => {
	letHeadFall()
	changeText()
}

function letHeadFall() {
	const value = body.dataset.headLost
	if (value === "mantaing")
		body.dataset.headLost = "falling"
	else
		rising()
}

function rising() {
	body.dataset.headLost = "rising"
	setTimeout(() => body.dataset.headLost = "mantaing", 1700)
}

function changeText() {
	personControlled.classList.toggle("youAreHere")
	personNotControlled.classList.toggle("youAreHere")
}