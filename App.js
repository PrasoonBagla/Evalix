const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();
const router = require('express').Router();
const fs = require('fs');
require("dotenv").config();
app.use(bodyParser.json());
app.get("/",function(req,res)
{
    const isbn = 0132145103;
    const url = "https://www.googleapis.com/books/v1/volumes?q=isbn:"+isbn+"&key"+process.env.API;
    // const url = "https://books.google.com/books?uid=11122233344455566778&source=gbs_lp_bookshelf_list"
    app.get(url,function(response){
        console.log(response.statusCode);
        response.on("data",function(data){
           
                console.log(JSON.parse(data));
    
        });
    });
    
    res.send("server is up an running");
})

app.listen(3000,function(){
    console.log("server is running");
})