const http=require('http');


const server=http.createServer((req,res)=>{
    console.log(req,"req");
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("Hello World");
});

const port=3000;
server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

//backend training file creating the server using http module.