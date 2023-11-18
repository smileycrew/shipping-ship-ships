const database = {
    docks: [
        {
            id: 1,
            location: "Shanghai, China",
            volume: "43.5"
        }, {
            id: 2,
            location: "Busan, South Korea",
            volume: "21.6"
        }, {
            id: 3, location: "Rotterdam, The Netherlands",
            volume: "14.35"
        }, {
            id: 4,
            location: "Antwerp, Belgium",
            volume: "12.04"
        }
    ],
    haulers: [
        {
            id: 1,
            name: "Ford",
            dockId: 4,
            isUnloading: true // how can i implement this?!
        }, {
            id: 2,
            name: "Honda",
            dockId: 3,
            isUnloading: true // how can i implement this?!
        }, {
            id: 3,
            name: "Kawasaki",
            dockId: 2,
            isUnloading: false // how can i implement this?!
        }, {
            id: 4,
            name: "GMC",
            dockId: 1,
            isUnloading: true // how can i implement this?!
        }, {
            id: 5,
            name: "Chevrolet",
            dockId: 2,
            isUnloading: false // how can i implement this?!
        }, {
            id: 6,
            name: "Toyota",
            dockId: 2,
            isUnloading: true // how can i implement this?!
        }, {
            id: 7,
            name: "BMW",
            dockId: 4,
            isUnloading: false // how can i implement this?!
        }, {
            id: 8,
            name: "Lexus",
            dockId: 3,
            isUnloading: true // how can i implement this?!
        }
    ],
    ships: [
        {
            id: 1,
            name: "Focus",
            haulerId: 1
        }, {
            id: 2,
            name: "S2000",
            haulerId: 2
        }, {
            id: 3,
            name: "Ninja",
            haulerId: 3
        }, {
            id: 4,
            name: "Sierra",
            haulerId: 4
        }, {
            id: 5,
            name: "F-150",
            haulerId: 1
        }, {
            id: 6,
            name: "Civic",
            haulerId: 2
        }, {
            id: 7,
            name: "Eliminator",
            haulerId: 3
        }, {
            id: 8,
            name: "Sierra 3500HD",
            haulerId: 4
        }
    ]
}

export const getDocks = () => {
    return database.docks.map(dock => ({ ...dock }))
}

export const getHaulers = () => {
    return database.haulers.map(hauler => ({ ...hauler }))
}

export const getShips = () => {
    return database.ships.map(ship => ({...ship}))
}