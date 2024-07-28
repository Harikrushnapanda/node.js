// HTTP Server
/*const http = require("http");

const myServer = http.createServer((req, res) =>{
    console.log("New Req Rec..");
    res.end("Hello From Server");
});

myServer.listen(8000, () => console.log("Server started"));*/

/* If we will run this set of code in browser by typing localhost:8000 then we will get output as server 
    started in the browser and in the terminal we will get the new req rec.. .*/

/*const http = require("http");

const myServer = http.createServer((req, res) =>{
    console.log(req.headers);      //console.log(req); if we wil run this thwn we will gwt a big object list.
    res.end("Hello From Server");
});
myServer.listen(8000, () => console.log("Server started"));*/

/* In the above code req.headers is used because headers is the extra information about the server.
If we will run this above set of code bu doing ctrl+c in terminal then npm start.it will
show us the webpage where we can refresh the page after that we will see the terminal where we are
getting all the datas. */

/*If we are modifying something in the server it will dont show the updated data. if we want the updated data 
   then we have to restart the server in the terminal.*/

/*const http = require("http");
const fs =require("fs");

const myServer = http.createServer((req, res) =>{
    const log =`${Date.now()}: New Req Received\n`;
    fs.appendFile("log.txt", log ,(err, data)=> {
        res.end("Hello From Server again");
    });
});
myServer.listen(8000, () => console.log("Server started"));*/


/*const http = require("http");
const fs =require("fs");

const myServer = http.createServer((req, res) =>{
    const log =`${Date.now()}: ${req.url} New Req Received\n`;
    fs.appendFile("log.txt", log ,(err, data)=> {
        res.end("Hello From Server again");
    });
});
myServer.listen(8000, () => console.log("Server started"));*/


/*const http = require("http");
const fs =require("fs");

const myServer = http.createServer((req, res) =>{
    const log =`${Date.now()}: ${req.url} New Req Received\n`;
    fs.appendFile("log.txt", log ,(err, data)=> {
        switch(req.url){
            case "/":
                res.end("Home page");
                break;
            case "/about":
                res.end("I am hari kr panda");
                break;
            default:
                res.end("404 Not found");
        }
        
    });
});
myServer.listen(8000, () => console.log("Server started")); */
// If we will run this code we will get the different output in different page like /,about,contact-us.


//HTTP Methods

// There are 5 methods are there .
//1.Get,2.post,3.put,4.patch,5.Delete
const http = require("http");
const fs =require("fs");

const myServer = http.createServer((req, res) =>{
    const log =`${Date.now()}: ${req.url} New Req Received\n`;
    fs.appendFile("log.txt", log ,(err, data)=> {
        switch(req.url){
            case "/":
                if (req.method === 'GET')
                res.end("Home page");
                break;
            case "/about":
                res.end("I am hari kr panda");
                break;
            case "/signup":
                if (req.method === 'GET') res.end("This is a signup form");
                else if (req.method === 'POST') 
                    {
                        res.end("Success");}
            default:
                res.end("404 Not found");
        }
        
    });
});
myServer.listen(8000, () => console.log("Server started"));
// we can give 5 request to each route as per our requirement.