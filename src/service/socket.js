import socketIOClient from "socket.io-client";

const ENDPOINT = "http://localhost:9000/";

export default socketIOClient(ENDPOINT);