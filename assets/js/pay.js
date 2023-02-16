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

let userName = document.querySelector(".userName")
let userEmail = document.querySelector(".userEmail")
let userPhone = document.querySelector(".userPhone")
let userUniversity = document.querySelector(".userUniversity")
let userDepartment = document.querySelector(".userDepartment")
let userYear = document.querySelector(".userYear")
let clear = document.querySelector("#clear")
let submit = document.querySelector("#submit")

let inputFields = [userName, userEmail, userPhone, userUniversity, userDepartment, userYear]


let availablePassesArray = ["all", "10", "5", "1"]
let availablePasses = [
	{
		name: "All Events Pass",
		price: 400,
		type: "all",
		imgSrc: "2",
	},
	{
		name: "10 Events Pass",
		price: 300,
		type: "10",
		imgSrc: "1",
	},
	{
		name: "5 Events Pass",
		price: 200,
		type: "5",
		imgSrc: "3",
	},
	{
		name: "1 Event Pass",
		price: 100,
		type: "1",
		imgSrc: "4",
	},
]

const urlParams = new URLSearchParams(window.location.search)
const pass = urlParams.get("pass")
const canContinue = urlParams.get("canContinue")

if (pass === null || !availablePassesArray.includes(pass)) {
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

async function getUserData() {
    let user = await get("user")
    if (user === undefined) {
        return false
    }

    userName.value = user.userName == undefined ? "" : user.userName
    userEmail.value = user.userEmail == undefined ? "" : user.userEmail
    userPhone.value = user.userPhone == undefined ? "" : user.userPhone
    userUniversity.value = user.userUniversity == undefined ? "" : user.userUniversity
    userDepartment.value = user.userDepartment == undefined ? "" : user.userDepartment
    userYear.value = user.userYear == undefined ? "" : user.userYear

    return true

}

getUserData()

// add event listeners to all those input fields and store the data in the user object in the idb as they type
inputFields.forEach((inputField) => {
    inputField.addEventListener("input", async () => {
        let user = await get("user")
        if (user === undefined) {
            user = {}
        }

        user[inputField.classList[0]] = inputField.value

        await set("user", user)
    })
})

submit.addEventListener("click", async () => {
    let user = await get("user")
    if (user === undefined) {
        user = {}
    }

    inputFields.forEach((inputField) => {
        user[inputField.classList[0]] = inputField.value.trim()
    })

    for (let key in user) {
        if (typeof user[key] === "string") {
            if (user[key].trim() === "") {
                alert("Please fill all the fields")
                return
            }
        }
    }


    await set("user", user)
    window.location.href = `/continue?pass=${pass}&canContinue=true`
})

clear.addEventListener("click", async () => {
    await del("user")
    window.location.reload()
})