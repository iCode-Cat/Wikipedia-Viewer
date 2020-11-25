const express = require('express');
const router = require('./routes/index')
const app = express();


app.set('view engine' , 'ejs');
app.use(express.static('public'))
app.use(router);


app.listen(5000, (err)=>{
    if(!err) {
        console.log('Server started')
    }else(console.log(`Error ${err}`));
})
