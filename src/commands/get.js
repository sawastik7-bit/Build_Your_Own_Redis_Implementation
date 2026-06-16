import { store } from "../storage/store.js";
export const getFunc=(args,socket)=>{

     const val=store.get(args[0]);

     return val;
}