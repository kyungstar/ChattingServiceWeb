import {io} from "socket.io-client";
const socket = io("http://localhost:8453");

export default socket;

