import { getMetals, getOrders, getStyles, getSizes } from "./database.js"


// builds an html string representing each individual order (gets invoked in 'Orders()')
const buildOrderListItem = (order) => {
    // gets copies of 'metals''sizes''styles' from database.js
    const metals = getMetals()
    const sizes = getSizes()
    const styles = getStyles()
    
    // pulls matching object from 'metals' based on foreign key from 'customOrders' in database.js
    const foundMetal = metals.find(
        (metal) => {
            return metal.id === order.metalId
        }
    )

    // same but with 'sizes'
    const foundSizes = sizes.find(
        (size) => {
            return size.id === order.sizeId
        }
    )
    
    // same but with 'styles'
    const foundStyles = styles.find(
        (style) => {
            return style.id === order.styleId
        }
    )
    
    // adds the 'price' values from each found object together to get total price of the 'customOrder' / multiplies price times value of radio button
    const totalCost = (foundMetal.price + foundSizes.price + foundStyles.price) * document.querySelector('input[name="type"]:checked').value
        


    // converts that price to US currency formatting ($0.00)
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    // returns this string for use in 'Orders()'
    return `<li>
        Order #${order.id} cost ${costString}
    </li>`
}

// creates the HTML for the 'Custom Jewelry Orders' section
export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
   // gets copy of the 'orders' array from database.js
    const orders = getOrders()

    const listItem = orders.find(order => orders.indexOf(order) === orders.length - 1)

    const html = buildOrderListItem(listItem)

    return html
}

