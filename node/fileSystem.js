var fs = require('fs')

// fs.readFile('calc.js','utf8',function(err,data){
//     console.log(data)
// })

fs.writeFile('calc1.js','console.log("done")',function(err){
    console.log("Data Saved");
}) //if already exisiting file name used then it overwrites

fs.appendFile('calc.js','console.log("done")',function(err){
    console.log("Data saved")
})

fs.unlink('calc1.js',function(err){
    console.log('Deleted')
})