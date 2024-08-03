// Express js:-
// It is a framework used in the node js .


//const http = require("http");
const fs =require("fs");
const express=require("express");

const app= express();

app.get('/',(req,res)=>{
    return res.send("Hello from Home page");
});

app.get("/about",(req,res)=>{
    return res.send("Hello from About page");//+ "hey"+req.query.name +'you are'+req.query.age);
});

app.listen(8000,()=>console.log("server started"));


//const myServer = http.createServer(app);
//myServer.listen(8000, () => console.log("Server started"));

// here in the express js we dont need the http module ,fs module,url .


// VERSONING:-
// Here the version is: 4.19.2 
/* BAsically version has 3 parts:
    1st part-4
    2nd part-19
    3rd part-2

3rd part(Last part)- Minor fixes(optional) if we want we can change it othrwise its ok .
2nd part(middle part)-Recommended Bug fix (security fix) we can change it whenever we are fixing a big bug.
1st part(major release )-major/Breaking update
^(carret symbol)-compactable with version 

^4.19.2- it means we cant change the 1st part but we can change the another two parts as per requirement.

~4.19.2- it means we cant change the 1st & 2 nd part but we can change the 3rd part.*/
