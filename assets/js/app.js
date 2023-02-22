let mouseOverEvent = new MouseEvent("mouseover", {
	view: window,
	bubbles: true,
	cancelable: true,
})

let mouseOutEvent = new MouseEvent("mouseout", {
	view: window,
	bubbles: true,
	cancelable: true,
})
let daysLeft = document.getElementById("daysLeft")
let hoursLeft = document.getElementById("hoursLeft")
let minutesLeft = document.getElementById("minutesLeft")
let secondsLeft = document.getElementById("secondsLeft")
let heroImageContainer = document.querySelector(".heroImageContainer")
let heroFirst = document.querySelector(".heroFirst")
let heroSecond = document.querySelector(".heroSecond")
let eventCards = document.querySelectorAll(".eventCard")

let navLinksDiv = document.querySelector(".navigation")
let navLinksSpan = navLinksDiv.children

for (let i = 0; i < navLinksSpan.length; i++) {
	navLinksSpan[i].addEventListener("click", function () {
		let id = navLinksSpan[i].getAttribute("data-id")
		let element = document.getElementById(id)
		element.scrollIntoView({ behavior: "smooth" })
	})
}

heroImageContainer.addEventListener("mouseover", function () {
	heroFirst.style.display = "none"
	heroSecond.style.display = "block"
})

heroImageContainer.addEventListener("mouseout", function () {
	heroFirst.style.display = "block"
	heroSecond.style.display = "none"
})

heroImageContainer.dispatchEvent(mouseOverEvent)
heroImageContainer.dispatchEvent(mouseOutEvent)

eventCards.forEach((eventCard) => {
	eventCard.addEventListener("click", function () {
		let eventName = eventCard.getAttribute("data-eventName")
		window.location.href = `/eventInfo?eventCode=${eventName}`
	})
})

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

function createDailyEventHTML({
	eventTimingsStart,
	eventTimingsEnd,
	eventName,
	eventLocation
}) {
	return `
		<div class="dayEventCard">
			<span class="dayEventTimings">${eventTimingsStart} to ${eventTimingsEnd}</span>
			<span class="dayEventName">${eventName.toUpperCase()}</span>
			<div class="dayEventLocation">
				<img src="./assets/images/days/location.webp" alt="Location" height="25" width="25">
				<span class="dayEventLocationText">${eventLocation}</span>
			</div>
		</div>
	`
}

function createDayEventsHTML(dayEvents) {
	let dayEventsHTML = ""
	dayEvents.forEach((dayEvent) => {
		dayEventsHTML += createDailyEventHTML(dayEvent)
	})
	return dayEventsHTML
}
async function main() {
	updateTime()
	embedCopyRight()
}

main()
