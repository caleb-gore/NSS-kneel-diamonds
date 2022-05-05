import { getSizes, setSize, setSizeSubtotal } from "./database.js"
import { Sum } from "./Type.js"

const sizes = getSizes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value))
            const clickedSize = sizes.find(size => parseInt(event.target.value) === size.id)
            setSizeSubtotal(clickedSize.price)
            document.querySelector('.subtotal__text').innerHTML = Sum().toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            })
        }
    }
)

export const DiamondSizes = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = sizes.map(size => {
        return `<li>
            <input type="radio" name="size" value="${size.id}" /> ${size.carets}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

