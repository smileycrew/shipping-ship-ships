import { ShipList } from "./ships.js"
import { HaulerList } from "./haulers.js"
import { DockList } from "./docks.js"

const mainContainer = document.querySelector("#container")
const containerHTML = `
<h1>Shipping Ship Ships</h1>
<article class="details">
    <section class="detail--column list details__ships">
        <h2>Cargo Ships</h2>
        ${ShipList()}
    </section>
    <section class="detail--column list details__haulers">
        <h2>Hauler Ships</h2>
        ${HaulerList()}
    </section>
    <section class="detail--column list details__docks">
        <h2>Docks</h2>
        ${DockList()}
    </section>
</article>

<article class="assignments">
    <h2>Current Assignments</h2>
    ${"Does this work???"}
</article>
`

mainContainer.innerHTML = containerHTML

// How can you change the layout of the lists from top-down to having three columns?
    // WHERE DID DETAILS COME FROM IN THE <LI> HTML??????
// How can you sort each list of names alphabetically?
    // NO CLUE
// How would your ERD change if the customer had the following, new requirement?
        // Each dock will only service some of the hauling ships because of contracts
        // with their companies. For example, Rotterdam will only service
        // "Seawise Giant" and "Pioneering Spirit", and Busan will service
        // "Seawise Giant" and "Boaty McBoatface". Each hauling ship can be
        // serviced by many docks, and each dock can service one, or more,
        // hauling ships. You need to keep track of the allowed relationships
        // in your database
            // DOCKS WILL HAVE A HAULERS FK?????
// What is structuredClone() in JavaScript, and how could it be used in your project?
    // NO CLUE!!!