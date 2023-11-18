import { getShips,getHaulers } from "./database.js";

const ships = getShips()
const haulers = getHaulers()

document.addEventListener("click", (clickedEvent) => {
    if (clickedEvent.target.dataset.type === "ship") {
        const itemClicked = clickedEvent.target
        const haulerId = parseInt(itemClicked.dataset.haulerid)
        let haulerObject = {}
        for (const hauler of haulers) {
            if (hauler.id === haulerId) {
                haulerObject = hauler
            }
        }
        window.alert(`${itemClicked.innerText} is being hauled by ${haulerObject.name}.`)
    }
})

export const ShipList = () => {
    let shipsHTML = "<ul>"
    for (const ship of ships) {
        shipsHTML += `
        <li data-haulerId="${ship.haulerId}" data-type="ship">
            ${ship.name}
        </li>`
    }
    shipsHTML += "</ul>"
    return shipsHTML
}