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
let amount = document.querySelector("#amount")
let qrCodeContainer = document.querySelector(".qrCodeContainer")
let paymentLink = document.querySelector("#paymentLink")
let claimButton = document.querySelector("#claimButton")


let availablePassesArray = ["all", "10", "5", "1"]
let availablePasses = [
	{
		name: "All Events Pass",
		price: 500,
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
		price: 300,
		type: "5",
		imgSrc: "4",
	},
	{
		name: "ELITE (S+)",
		price: "",
		type: "1",
		imgSrc: "3",
	},
]

const urlParams = new URLSearchParams(window.location.search)
const pass = urlParams.get("pass")
const canContinue = urlParams.get("canContinue")

if (pass === null || !availablePassesArray.includes(pass)) {
	window.location.href = "/"
}

if (canContinue === null || canContinue === "false") {
    window.location.href = "/"
}

passes.innerHTML = getPassHTML(pass)

function getPassHTML(type) {
	let pass = availablePasses.find((pass) => pass.type === type)
	return `
        <div class="passCard">
            <div class="imageContainer">
                <img src="./assets/images/passes/${pass.imgSrc}.webp" alt="Event Pass">
            </div>
            <div class="rightMost">
                <div class="eventType">${pass.name}</div>
                <div class="eventCost">₹${pass.price}</div>
            </div>
        </div>
    `
}

// let vpa = `9360411346@okbizicici`
let vpa = `thirunavukarasurajasekar@okaxis`
let name = `MITAFEST`
let note = `MITAFEST PASS`

function getQRCode(price) {
    let amount = parseInt(price)
    let url = `https://upiqr.in/api/qr?name=${name}&vpa=${vpa}&note=${note}&amount=${amount}.00`
    let img = document.createElement("img")
    img.src = url
    img.alt = "QR Code"
    img.classList.add("qrCode")
    qrCodeContainer.appendChild(img) 
}

function getPaymentLink(price) {
    let amount = parseInt(price)
    let url = `upi://pay?pa=${vpa}&pn=MITAFEST&cu=INR&mc=0000&am=${amount}.00`
    paymentLink.href = url
}

let passType = availablePasses.find((e) => e.type == pass)
amount.innerText = passType.price

getQRCode(passType.price)
getPaymentLink(passType.price)

claimButton.addEventListener("click", () => {
    window.location.href = `/claim?pass=${pass}`
})