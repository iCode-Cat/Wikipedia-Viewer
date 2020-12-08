const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const router = express.Router();

router.use(bodyParser.urlencoded({extended: true}))
router.use(express.json());
let value;
//Variables

router.get('/' , (req,res)=>{
  
    res.render('index')
})

router.post('/' , (req,res)=>{
    value = req.body.data;
    res.redirect("/query")
})
router.get('/query' , async (req,res)=> {
    const url = `https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=${value}`;
  fetch(encodeURI(url))
     .then(res => res.json())
    .then(data => res.json(data))
    .catch(err => console.log(err))
})
module.exports = router;