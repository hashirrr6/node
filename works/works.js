const fs=require("fs")

fs.writeFile("home.html","hello",(error)=>{
    if (error){
        console.log("unable to write");
        
    }
})
