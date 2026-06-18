import { store } from "../storage/store.js";
import { delFunc } from "./del.js";
export const setFunc=(args,socket)=>{

    store.set(args[0],args[1]);



    setTimeout(()=>{
delFunc(args);
    },10000);


}