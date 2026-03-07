const http = require('http');

const server = http.createServer((req,res)=>{
    res.write("Hello from GitOps pipeline");
    res.end();
}); 
server.listen(3000);
