const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const path = require('path');


// app.use(express.static(path.join(__dirname))); Serves all the static file in __Directory so it is not even checking what are you have in get request
app.use('/css',express.static(path.join(__dirname,'css')));
app.use('/js',express.static(path.join(__dirname,'js')));
app.use('/images',express.static(path.join(__dirname,'images')));

// SERVE html file from the view folder
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
})

app.listen(port,()=>{
    console.log(`Server is listening on PORT ${port}`);
})
