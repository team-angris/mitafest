let API_ENDPOINT = `https://mitafest-server.onrender.com/api/users`

async function get(key) {
	return await idbKeyval.get(key)
}

async function set(key, val) {
	return await idbKeyval.set(key, val)
}

async function del(key) {
	return await idbKeyval.del(key)
}

let passes = document.querySelector(".passes")
let claimButton = document.querySelector("#claim")
let refNoInput = document.querySelector("#refNoInput")

let availablePassesArray = ["all", "10", "5", "1"]
let availablePasses = [
	{
		name: "All Events Pass",
		price: 400,
		type: "all",
		imgSrc: "2",
	},
	{
		name: "Friday Events Pass",
		price: 300,
		type: "10",
		imgSrc: "1",
	},
	{
		name: "Saturday Events Pass",
		price: 200,
		type: "5",
		imgSrc: "3",
	},
	{
		name: "Elite Pass",
		price: 100,
		type: "1",
		imgSrc: "4",
	},
]

const urlParams = new URLSearchParams(window.location.search)
const pass = urlParams.get("pass")

if (pass === null || !availablePassesArray.includes(pass)) {
	window.location.href = "/"
}

passes.innerHTML = getPassHTML(pass)

function getPassHTML(type, refNo="") {
	let pass = availablePasses.find((pass) => pass.type === type)
	return `
        <div class="passCard">
            <div class="imageContainer">
                <img src="./assets/images/passes/${pass.imgSrc}.webp" alt="Event Pass">
            </div>
            <div class="rightMost">
                <div class="eventType">${pass.name}</div>
                <div class="eventCost">₹${pass.price}</div>
                <div class='refNo'>
                    <span>${refNo}</span>
                </div>
            </div>
        </div>
    `
}

claimButton.addEventListener("click", async () => {
    let refNo = refNoInput.value

    let claimedPasses = await get("claimedPasses")
    if (claimedPasses === undefined) {
        claimedPasses = []
    }

    // check if the pass is already claimed
    if (!claimedPasses.includes(refNo)) {
        claimedPasses.push(refNo)
        await set("claimedPasses", claimedPasses)
    }

    passes.innerHTML = getPassHTML(pass, refNo)

    await addToDB(refNo, type=pass)

    addWelcomeHeader()
    await getUserData(refNo)

    // with html2canvas we can take a screenshot of the element passes
    // and then download it as an image
    html2canvas(passes).then(function(canvas) {
        let a = document.createElement("a")
        a.href = canvas.toDataURL("image/png")
        a.download = "pass.png"
        a.click()
    })

})

function addWelcomeHeader() {
    let welcomeHeader = document.createElement("span")
    welcomeHeader.classList.add("welcomeHeader")
    welcomeHeader.style.color = "#000"
    welcomeHeader.style.marginTop = "0.5rem"
    welcomeHeader.innerText = "Digital Pass"
    passes.prepend(welcomeHeader)
}

async function getUserData(refNo) {
    let user = await get("user")
    if (user === undefined) {
        return false
    }

    let userKeys = Object.keys(user)
    let userValues = Object.values(user)

    let userHTML = ""
    userHTML += `<div class="userKey">Ref No.: ${refNo}</div>`
    for (let i = 0; i < userKeys.length; i++) {
        userHTML += `
            <div class="userValue">${userValues[i]}</div>
        `
    }

    passes.innerHTML += `
        <div class="userData">
            ${userHTML}
        </div>
    `
}

async function addToDB(refNo, type) {
    let userData = await get("user")
    let passData = {
        refNo: refNo,
        type: type
    }

    let data = {
        userData,
        passData
    }

    let response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })

    let result = await response.json()
    console.log(result)
}