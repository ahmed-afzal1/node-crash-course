const fs = require('fs');

// reading file
    // fs.readFile('./docs/blog.txt',(err,data)=>{
    //     if(err){
    //         console.log(err);
    //     }else{
    //         console.log(data.toString());
    //     }
    // })

// writting file
    // fs.writeFile('./docs/blog.txt', 'hello world',()=>{
    //     console.log('file created');
    // })


// directories
    // if(!fs.existsSync('./assets')){
    //     fs.mkdir('./assets',()=>{
    //         console.log('directory created');
    //     });
    // }else{
    //     fs.rmdir('./assets',()=>{
    //         console.log('directory deleted');
    //     });
    // }

// deleting file
    if(fs.existsSync('./docs/deletefile.txt')){
        fs.unlink('./docs/deletefile.txt',()=>{
            console.log('file deleted');
        });
    }