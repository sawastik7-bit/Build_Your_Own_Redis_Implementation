export const pingFunc=(socket)=>{
     socket.write("+PONG\r\n");
}