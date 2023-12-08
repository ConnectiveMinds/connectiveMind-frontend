import { io } from "socket.io-client";
import { host } from "../utils/apiroutes";

export const socket = io(host);
