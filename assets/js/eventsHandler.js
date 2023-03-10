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

function setEventOrganizers(organizedEvent) {
	let html = `
        <div class="organizerers">
            <span class="eventHeading">Organizers:</span>
            <div class="organizerersContainer">
    `

	organizedEvent.subEventOrganizers.forEach((organizer) => {
		html += `
                <div class="organizerer">
                    <span class="organizererName">${organizer.subEventOrganizerName},</span>
                    <span class="organizererContact">
                        <a href="tel:+91 ${organizer.subEventOrganizerContact}">+91 ${organizer.subEventOrganizerContact}</a>
                    </span>
                </div>
            `
	})

	html += `</div>
        </div>
    `

    return html
}

function setEventRules(organizedEvent) {
	let html = `<ul>`
	organizedEvent.subEventRules.forEach((rule) => {
		html += `
            <li>${rule}</li>
        `
	})
	html += `</ul>`
	return html
}

function setEventDetails(organizedEvent) {
	return `
        <div class="organizedEventDetailsContainer">
            <div class="organizedEventDetail">
                <span class="eventHeading">Date:</span>
                <span class="organizedEventSubDetail">${organizedEvent.subEventDate}</span>
            </div>
            <div class="organizedEventDetail">
                <span class="eventHeading">Time:</span>
                <span class="organizedEventSubDetail">${organizedEvent.subEventTime}</span>
            </div>
            <div class="organizedEventDetail">
                <span class="eventHeading">Venue:</span>
                <span class="organizedEventSubDetail">${organizedEvent.subEventVenue}</span>
            </div>
            <div class="organizedEventDetail">
                <span class="eventHeading">Team Size:</span>
                <span class="organizedEventSubDetail">${organizedEvent.subEventTeamSize}</span>
            </div>
        </div>
    `
}

setOrganizedEventsHeading()
setOrganizedEvent()

document.addEventListener("click", (e) => {
	if (e.target.classList.contains("organizedEventsHeading")) {
		setOrganizedEvent(e.target.dataset.id)
		document
			.querySelectorAll(".organizedEventsHeading")
			.forEach((heading) => {
				heading.classList.remove("selected")
			})
		e.target.classList.add("selected")
	}
})
