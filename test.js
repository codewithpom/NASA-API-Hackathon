const io = require("socket.io-client")


const ENDPOINT = "https://lowchat.padmashreejha.repl.co/shambhavi";


const socket = io(ENDPOINT);
console.log("Connected")
socket.on("message", data => {
    console.log(data);
});

