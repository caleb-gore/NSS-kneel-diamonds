import { getMetals, setMetal } from "./database.js"

// assigns copy of metals array to variable 'metals'
const metals = getMetals()


// When radio button is selected...
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            // calls function from database.js using 'value' as parameter
            setMetal(parseInt(event.target.value))
        }
    }
)

// Creates the HTML for Metals
export const Metals = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const metal of metals) {
        html += `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
    }

    html += "</ul>"
    return html
}

