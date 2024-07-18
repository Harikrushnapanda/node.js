// FILE SYSTEM

const fs = require("fs");//fs is a module (built in package)


//craete file(sync..)
//fs.writeFileSync('./test.txt','Hey there');// if we will run this then a txt file will be create.


//Async...
//fs.writeFile('./test.txt','Hey there Async',(err)=>{});

/* (Read file)
now we will create a file named contact.txt and we have to read the file.*/
//const result = fs.readFileSync("./contact.txt","utf-8");// here path and encoding are given.
//console.log(result);
// if we will remove the sync and run then it will give us error.
/*fs.readFile("./contact.txt","utf-8",(err, result)=>{
    if(err){
        console.log("error",err);
    }else{
        console.log(result);
    }
}); */

// whenever we are using the sync.. task it will return us the result ,if error will be there it throws.
/*whenever we are using the Async.. task it will not return us the result.It uses call back function to 
  return the output.*/


//appendfile.
// fs.appendFileSync("./test.txt",new Date().getDate().toLocaleString());
//fs.appendFileSync("./test.txt",'hey there\n');
fs.appendFileSync("./test.txt",'${Date.now()} Hey there\n');// date will come
//fs.cpSync("./test.txt","./copy.txt");// when we will run this then a copy.txt file will create and all the data 
// of the test.txt is there on the copy.txt file.

//fs.unlinkSync("./copy.txt");
//console.log(fs.statSync("./test.txt").isFile());// we can check stats of file.
// fs.mkdirSync("my-doc");// create folder
