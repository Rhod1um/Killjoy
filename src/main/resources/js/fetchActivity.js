console.log("er i fetchActivity")
const urlActivity = "http://localhost:8080/activities" //skal hente fra egen database, kalder getmapping endpoint her
let activityList = []
const ddSelectActivity = document.getElementById("ddSelectActivity")

window.addEventListener("load", loadActivity)

async function loadActivity(){
    activityList = await fetchAny(urlActivity);
    console.log(activityList)
    activityList.forEach(fillActivityDropDown)
}

function fillActivityDropDown(activity) {
    const el = document.createElement("option")
    console.log(el)
    el.value = activity.activityId
    el.textContent = activity.activityId
    el.textContent += " så" //test
    el.activity = activity //så reservation kan få hele activity object fra dropdown
    console.log(activity.activityId)
    console.log(activity)
    ddSelectActivity.appendChild(el)
}

function fetchAny(url) {
    console.log(url)
    return fetch(url).then((response) => response.json())
}

