import { Socket, io } from "socket.io-client";
import { store } from "../../stores";
import { chatAction } from "@slices/chat.slice";

class ChatAdmin {
    client: Socket;

    constructor() {

    }

    connect() {
        if (localStorage.getItem("token")) {
            this.client = io(`${import.meta.env.VITE_HOST}?token=` + localStorage.getItem("token"));

            this.client.on('login', (data) => {
                
            })

            this.client.on('data', (data) => {
                store.dispatch(chatAction.setData(data))
            })
        } else {
            alert("chưa login")
        }
    }

    send(data: {
        userName: string;
        content: string;
    }) {
        this.client.emit("chat", data)
    }
}

export default new ChatAdmin();