


export const respParser=(data)=>{

    const str=data.toString();
    const parts=str.split("\r\n");

    const command=parts[2];
    const args=[];

    for (let i=4;i<parts.length;i=i+2){
        args.push(parts[i]);
    }



    return {
        command,
        args
    }

};
