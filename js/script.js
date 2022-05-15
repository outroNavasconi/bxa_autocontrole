const body = document.querySelector("body")
const head = document.getElementById("head")
const personControlled = document.getElementById("controlled")
const personNotControlled = document.getElementById("uncontrolled")

let clickable = true

head.onclick = () => letHeadFall()

function letHeadFall() {
	if (clickable) {
		clickable = false
		if (body.dataset.lostHead === "keep")
			fall()
		else
			rise()
	}
}

function fall() {
	body.dataset.lostHead = "fall"
	setTimeout(() => changeText(), 1000)
	setTimeout(() => clickable = true, 1000)
}

function rise() {
	body.dataset.lostHead = "rise"
	setTimeout(() => changeText(), 1200)
	setTimeout(() => clickable = true, 2000)
	setTimeout(() => body.dataset.lostHead = "keep", 2000)
}

function changeText() {
	personControlled.classList.toggle("youAreHere")
	personNotControlled.classList.toggle("youAreHere")
}