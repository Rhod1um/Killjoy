console.log("er i fetchTimeslots")
const urlActivity = "http://localhost:8080/timeslots" //skal hente fra egen database, kalder getmapping endpoint her
let timeslotList = []
const ddSelectTimeslot = document.getElementById("ddSelectTimeslot")

window.addEventListener("load", loadActivity)

async function loadActivity(){
    timeslotList = await fetchAny(urlActivity);
    console.log(timeslotList)
    timeslotList.forEach(fillTimeslotDropDown)
}

function fetchAny(url) {
    console.log(url)
    return fetch(url).then((response) => response.json())
}

function fillTimeslotDropDown(timeslot) {
    const el = document.createElement("option")
    console.log(el)
    el.value = timeslot.timeslotId
    el.textContent = timeslot.timeslotId
    el.textContent += timeslot.name
    el.timeslot = timeslot //så reservation kan få hele activity object fra dropdown
    console.log(timeslot.timeslotId)
    console.log(timeslot)
    ddSelectTimeslot.appendChild(el)
}



