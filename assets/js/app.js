let daysLeft = document.getElementById("daysLeft")
let hoursLeft = document.getElementById("hoursLeft")
let minutesLeft = document.getElementById("minutesLeft")
let secondsLeft = document.getElementById("secondsLeft")

let copyright = document.querySelector(".copyrights")

function embedCopyRight() {
	let now = new Date()
	let year = now.getFullYear()
	copyright.textContent = `All rights reserved © ${year} by Mitafest`
}

function updateTime() {
	let now = new Date()
	let eventDate = new Date(2023, 2, 2) // 2nd March 2023
	let currentTime = now.getTime()
	let eventTime = eventDate.getTime()
	let remTime = eventTime - currentTime

	let s = Math.floor(remTime / 1000)
	let m = Math.floor(s / 60)
	let h = Math.floor(m / 60)
	let d = Math.floor(h / 24)

	h %= 24
	m %= 60
	s %= 60

	h = h < 10 ? "0" + h : h
	m = m < 10 ? "0" + m : m
	s = s < 10 ? "0" + s : s

	daysLeft.textContent = d
	hoursLeft.textContent = h
	minutesLeft.textContent = m
	secondsLeft.textContent = s

	setTimeout(updateTime, 1000)
}

async function main() {
	updateTime()
	embedCopyRight()
}

main()
