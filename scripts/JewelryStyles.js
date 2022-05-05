import { getStyles, setStyle, setStyleSubtotal } from "./database.js"
import { Sum } from "./Type.js"

const styles = getStyles()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
            setStyle(parseInt(event.target.value))
            const clickedStyle = styles.find(style => parseInt(event.target.value) === style.id)
            setStyleSubtotal(clickedStyle.price)
            document.querySelector('.subtotal__text').innerHTML = Sum().toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            })
        }
    }
)

export const JewelryStyles = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = styles.map(style => {
        return `<li>
            <input type="radio" name="style" value="${style.id}" /> ${style.style}
        </li>`
    })


    // Join all of the strings in the array into a single string
    html += listItems.join("")

    html += "</ul>"
    return html
}

