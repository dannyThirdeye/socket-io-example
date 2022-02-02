const createServer = require("http").createServer;
const server = require("socket.io").Server;
const httpServer = createServer();
const io = new server(httpServer, {});

io.on("connection", (socket) => {
    console.log(`service named - ${socket.handshake.query.service} connected`);

    // listen to messages under topic 'mission'
    socket.on("mission", msg => {
        console.log(msg);
    })
});

let droneData = {
    numofdrones: 1,
    dronesdata: [
        {
            chimera_id: [
                "::ffff:192.168.10.220"
            ],
            payload_type: [
                3
            ],
            follow_mode: [
                1
            ],
            roll: [
                -0.02
            ],
            zoom: [
                1
            ],
            payload_id: [
                1220
            ],
            detections: [
                []
            ],
            display_mode: [
                1
            ],
            laser_mode: [
                0
            ],
            analytics: [
                0
            ],
            drone_group: 1,
            pitch: [
                -0.02
            ],
            yaw: [
                -0.72
            ],
            drone_id: 1,
            mode: 3,
            baseMode: 217,
            voltage: 12.587,
            lat: 32.2929209,
            lng: 34.8713241,
            speed: 0,
            satellites: 10,
            home_position_lat: 0,
            home_position_lng: 0,
            alt: 39.999,
            heading: 56.12,
            cameraHeading: [
                55.4
            ],
            isCamera: true,
            verticalFov: [
                57
            ],
            horizontalFov: [
                77
            ],
            imageWidth: [
                1024
            ],
            imageHeight: [
                768
            ],
            trace: [
                [
                    {
                        lat: 32.29290561167368,
                        lng: 34.87158939027988
                    },
                    {
                        lat: 32.292615061897855,
                        lng: 34.87663114761497
                    },
                    {
                        lat: 32.2972233156449,
                        lng: 34.872870451301644
                    },
                    {
                        lat: 32.293135970437156,
                        lng: 34.87140139947032
                    }
                ]
            ]
        }
    ]
}

setInterval(() => {
    // sends drone data every 3 seconds
    io.emit("droneData", droneData)
}, 3000);

console.log("server listenning on port 3000");

httpServer.listen(3000);