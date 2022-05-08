const body = document.querySelector("body")
const head = document.getElementById("head")

head.onclick = () => {
	const value = body.dataset.headLost
	body.dataset.headLost = ["unset", "false"].includes(value) ? "true" : "false"
}