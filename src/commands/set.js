import { store } from "../storage/store.js";
export const setFunc=(args,socket)=>{

    store.set(args[0],args[1]);

}