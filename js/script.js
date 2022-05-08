const body = document.querySelector("body")
const head = document.getElementById("head")
const personControlled = document.getElementById("personControlled")
const personNotControlled = document.getElementById("personNotControlled")

head.onclick = () => letHeadFall()

function letHeadFall() {
	if (body.dataset.headLost === "mantaing")
		falling()
	else
		rising()
}

function falling() {
	body.dataset.headLost = "falling"
	setTimeout(() => changeText(), 1200)
}

function rising() {
	body.dataset.headLost = "rising"
	setTimeout(() => changeText(), 1200)
	setTimeout(() => body.dataset.headLost = "mantaing", 1500)
}

function changeText() {
	personControlled.classList.toggle("youAreHere")
	personNotControlled.classList.toggle("youAreHere")
}