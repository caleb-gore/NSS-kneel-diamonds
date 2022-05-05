import { KneelDiamonds } from "./KneelDiamonds.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds()
}

renderAllHTML()

// listens for the dispatchEvent at the end of addCustomOrder() on database.js
document.addEventListener("stateChanged", event => {
    // logs state change to the console
    console.log("State of data has changed. Regenerating Html...")
    // re-renders the entire html page
    // renderAllHTML()
})

