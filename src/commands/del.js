import { store } from "../storage/store.js";


export const delFunc=(args)=>{

    return store.delete(args[0]);
    
}

