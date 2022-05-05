import { getSubtotalBuilder } from "./database.js"

const subtotalBuilder = getSubtotalBuilder()

export const Sum = () => {
    const total = subtotalBuilder.metalPrice + subtotalBuilder.stylePrice + subtotalBuilder.sizePrice
    return total
} 

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "type") {
            // calls function from database.js using 'value' as parameter
            
            document.querySelector('.subtotal__text').innerHTML = (Sum() * parseInt(event.target.value)).toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            })
            
        }
    }
)
export const Type = () => {
    // create radio buttons
    return `<ul>
        <li>
            <input type="radio" name="type" value="1"/>Ring
        </li>
        <li>
            <input type="radio" name="type" value="2"/>Earring
        </li>
        <li>
            <input type="radio" name="type" value="4"/>Necklace
        </li>
    </ul>`
}