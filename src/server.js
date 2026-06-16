import net from 'net';
import { respParser } from './parser/respParser.js';
import { store } from './storage/store.js';

import { pingFunc } from './commands/ping.js';
import { setFunc } from './commands/set.js';
import { getFunc } from './commands/get.js';
const server=net.createServer((socket)=>{
    console.log("user connected");



socket.on('data',(data)=>{
    console.log(data.toString());

    const {command,args}=respParser(data);

    switch(command){
        case "PING":
            pingFunc(socket);
            break;
        
        case "SET":
          setFunc(args,socket);
          socket.write("+OK\r\n");
          break;

        case "GET":
            const val=getFunc(args,socket);

               if(!val){
                socket.write("$-1\r\n");
                break;
            }

             socket.write(
                `$${val.length}\r\n${val}\r\n`
            );
            break;
        
         socket.write(
                "-ERR unknown command\r\n"
            );
    }

   
})


    


socket.on('error',()=>{
    console.log('socket error');
})

    socket.on('end',()=>{
        console.log("client disconnected");
    })

})

server.listen(8080,()=>{
    console.log("server is running on port 8080");
})