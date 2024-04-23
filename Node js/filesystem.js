    // to include file system we use require()
var fs = require('fs')

        // reading the file 
// Three parameters - name of the file, type/format of the file/encoding(utf8), Callback

fs.readFile('calc.js','utf8',function(err,data){ 
    console.log(data)
})

            // create file - appendFile(), open(), writeFile()

        //Writing the file  - > fs.writeFile()
//->replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created

fs.writeFile('calc1.js','console.log("Wecome Aspire")',function(err,data){
    if (err) throw err; 
    console.log("Data Saved")
})

        // appending the file  -> fs.appendFile()
//-> method appends specified content to a file. If the file does not exist, the file will be created

fs.appendFile('calc.js','console.log("done")',function(err,data){ 
    console.log("Data Saved")
})

        // opening the file  -> fs.open(path,flag,callback)
// -> flag is "w" for "writing", the specified file is opened for writing.
fs.open('calc1.js', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
});
 
            // creating and deleting the file
fs.writeFile('calc2.js','console.log("done")',function(err,data){ 
    console.log("we are going to delete this file")
}) 
            // deleting the file we use unlink() method

fs.unlink('calc2.js',function(err){
    console.log("Deleted the file calc2")
})

            // creating and renaming the file
fs.writeFile('calc2.js','console.log("done")',function(err,data){ 
    console.log("creating and renaming the file")
}) 
            // Rename the file
fs.rename('calc2.js', 'calcrenamedfile.js', function (err) {
    if (err) throw err;
        console.log('File Renamed!');
});
   