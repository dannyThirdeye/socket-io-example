const io = require("socket.io-client");

const socket = io("ws://localhost:3000/", {
    reconnectionDelayMax: 10000,
    query: {
        "service": "client"
    }
});

let mission = [
    {
        id: 1,
        commandType: 22,	// TAKEOFF
        param1: 1,
        param2: 0,
        param3: 0,
        param4: 1,
        lat: 0,
        lng: 0,
        alt: 15

    },
    {
        id: 2,
        commandType: 16,	// WAYPOINT
        param1: 0,
        param2: 1,
        param3: 0,
        param4: 1,
        lat: 32.2918300598,
        lng: 34.8711456977,
        alt: 15,

    },
    {
        id: 3,
        commandType: 16,	// WAYPOINT
        param1: 0,
        param2: 1,
        param3: 0,
        param4: 1,
        lat: 32.2914778520,
        lng: 34.8711657667,
        alt: 15,

    },
    {
        id: 4,
        commandType: 20,	// RETURN_TO_LAUNCH
        param1: 0,
        param2: 0,
        param3: 0,
        param4: 0,
        lat: 0,
        lng: 0,
        alt: 15,
    }
]

// send mission to server
socket.emit("mission", { mission: mission });

// listenning for drone data message from server
socket.on("droneData", msg => {
    console.log(`got drone data from server, num of drones: ${msg.numofdrones}`)
})

console.log("client in running");

