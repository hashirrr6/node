const fs=require("fs")

fs.writeFile("message.txt","hello",(error)=>{
    if (error){
        console.log("unable to write");
        
    }
})

// appendFile("message.txt","hello"," karthik",(error)=>{
//     if (error){
//         console.log("unable to write");
        
//     }
// })

// const { error } = require("console");




// const fs=require("fs")
// fs.unlink("message.txt",(error)=>{
//     if (error) {
//         console.log("unable to delete");
//     }
// })



/*const fs=require("fs")

fs.readFile("message.txt","utf-8",(error,data)=>{
    if (error){
        console.log("unable to read");
        
    }
    else
    {console.log(data);
    }



})*/


// const url=require("url");
// const result=url.parse("https://localhost:500/index.html?name=milan")
const { error } = require("console")


const http=require("http")

const app=http.createServer((req,res)=>{
res.end("hello karthi")
})

app.listen(3000)