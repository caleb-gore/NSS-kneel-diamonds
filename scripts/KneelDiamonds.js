
import { addCustomOrder, getOrderBuilder, setSubtotalBuilder } from "./database.js"
import { DiamondSizes } from "./DiamondSizes.js"
import { JewelryStyles } from "./JewelryStyles.js"
import { Metals } from "./Metals.js"
import { Orders } from "./Orders.js"
import { Type } from "./Type.js"

// listens for button click and then...
document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            // calls this function from database.js
            const orderBuilder = getOrderBuilder()
            if (orderBuilder.metalId > 0 && orderBuilder.sizeId > 0 && orderBuilder.styleId > 0) {
                addCustomOrder()
                // Create and display new HTML
                const orderHTML = document.querySelector(".orders")
                orderHTML.innerHTML += Orders()
                
                // clear checked boxes
                const ckbxs = document.querySelectorAll('input[name="type"], input[name="metal"], input[name="size"], input[name="style"]' )
                ckbxs.forEach(ckbx => ckbx.checked = false)

                setSubtotalBuilder()
                document.querySelector('.subtotal__text').innerHTML = `$0.00`
            }
        }
    }
)

export const KneelDiamonds = () => {
    return `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${Metals()}
            </section>
            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${DiamondSizes()}
            </section>
            <section class="choices__styles options">
                <h2>Styles</h2>
                ${JewelryStyles()}
            </section>
        </article>

        <article class="type">
            ${Type()}
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="subtotal">
            <h3>Subtotal</h3>
            <div class="subtotal__text">
            $0.00
            </div>
        </article>
        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            <ul class="orders">
            </ul>
        </article>
    `
}

