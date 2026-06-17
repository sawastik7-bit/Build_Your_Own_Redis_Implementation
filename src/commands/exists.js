import { store } from "../storage/store.js"
export const existFunc=(args)=>{

    const val=store.has(args[0]);

    return val;

}