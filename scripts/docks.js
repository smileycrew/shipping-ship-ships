import { getDocks, getHaulers } from "./database.js";

const docks = getDocks()
const haulers = getHaulers()

document.addEventListener("click", (clickedEvent) => {
    if (clickedEvent.target.dataset.type === "dock") {
        const itemClicked = clickedEvent.target
        const dockId = parseInt(itemClicked.dataset.dockid)
        let dockObject = {}
        let haulerMessage = ""
        for (const dock of docks) {
            if (dock.id === dockId) {
                dockObject = dock
                for (const hauler of haulers) {
                    if (hauler.dockId === dock.id && hauler.isUnloading === true) {
                        haulerMessage += `${hauler.name} `
                    }
                }
            }
        }
        if (haulerMessage.length < 1) {
            haulerMessage += "nothing."
        } else {
            haulerMessage += "."
        }
        window.alert(`${dockObject.location} dock is currently unloading ${haulerMessage}`)
    }
})

export const DockList = () => {
    let docksHTML = "<ul>"
    for (const dock of docks) {
        docksHTML += `
        <li data-dockId="${dock.id}" data-type="dock">
            ${dock.location} can hold ${dock.volume} tons of cargo.
        </li>`
    }
    docksHTML += "</ul>"
    return docksHTML
}