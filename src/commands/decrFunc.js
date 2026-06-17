import { store } from "../storage/store.js";

export const decrFunc = (args, socket) => {

    const [key] = args;

    let value = store.get(key);

    if(value === undefined){
        value = 0;
    }

    let updatedValue = Number(value) - 1;

    store.set(key, updatedValue.toString());

    socket.write(`:${updatedValue}\r\n`);
}
