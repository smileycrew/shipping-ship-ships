import { getHaulers, getShips } from "./database.js";

const haulers = getHaulers()
const ships = getShips()

document.addEventListener("click", (clickedEvent) => {
    if (clickedEvent.target.dataset.type === "hauler") {
        const itemClicked = clickedEvent.target
        const haulerId = parseInt(itemClicked.dataset.haulerid)
        let counter = 0
        for (const ship of ships) {
            if (haulerId === ship.haulerId) {
                counter++
            }
        }
        window.alert(`This hauler is carrying ${counter} ships.`)
    }
})

export const HaulerList = () => {
    let haulersHTML = "<ul>"
    for (const hauler of haulers) {
        haulersHTML += `
        <li data-haulerId="${hauler.id}" data-type="hauler">
            ${hauler.name}
        </li>`
    }
    haulersHTML += "</ul>"
    return haulersHTML
}