import net from 'net';

const server=net.createServer((socket)=>{
    console.log("user connected");



socket.on('data',(data)=>{
    console.log(data.toString());

    socket.write("+Ok\r\n")
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