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

function setOrganizedEvent(subEventCode = "nope") {
	let html = ""

	if (subEventCode == "nope") {
		subEventCode = mitafestEvent.organizedEvents[0].subEventCode
	}

	let organizedEvent = mitafestEvent.organizedEvents.find(
		(organizedEvent) => organizedEvent.subEventCode == subEventCode
	)

	html += setEventCoreDetails(organizedEvent)
	html += setEventRules(organizedEvent)
	html += setEventDetails(organizedEvent)
    html += setEventOrganizers(organizedEvent)

	organizedEventsContainer.innerHTML = html
}

function setEventCoreDetails(organizedEvent) {
    return `
        <span class="contentHeading organizedEventName">${organizedEvent.subEventName}</span>
        <span class="organizedEventDescription">${organizedEvent.subEventDesc}</span>
        <span class="eventHeading">Duration:</span>
        <span class="organizedEventDuration">${organizedEvent.subEventDuration}</span>
        <span class="eventHeading">Rules:</span>
    `
}

