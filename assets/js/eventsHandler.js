let contentHeading = document.querySelector(".contentHeading")
let contentSubHeading = document.querySelector(".contentSubHeading")
let organizedEventsHeadingContainer = document.querySelector(
	".organizedEventsHeadingContainer"
)
let organizedEventsContainer = document.querySelector(
	".organizedEventsContainer"
)

let urlParams = new URLSearchParams(window.location.search)
let eventCode = urlParams.get("eventCode")

if (!eventCode) {
	window.location.href = "/"
}

let mitafestEvent = events.find((event) => event.eventCode === eventCode)

if (!mitafestEvent) {
	window.location.href = "/"
}

contentHeading.innerHTML = mitafestEvent.eventName
contentSubHeading.innerHTML = mitafestEvent.eventTagName

function setOrganizedEventsHeading() {
	let someHTML = ""
	mitafestEvent.organizedEvents.forEach((organizedEvent, index) => {
		let isSelected = index === 0 ? "selected" : ""
		someHTML += `
        <span 
        class="organizedEventsHeading ${isSelected}" 
        data-id="${organizedEvent.subEventCode}"
        >
        ${organizedEvent.subEventName}
        </span>
        `
	})

	organizedEventsHeadingContainer.innerHTML = someHTML
}

