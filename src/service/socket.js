import socketIOClient from "socket.io-client";

const ENDPOINT = "https://brian-messenger.herokuapp.com/";

export default socketIOClient(ENDPOINT);