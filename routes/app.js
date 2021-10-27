const express = require('express');
const { url } = require('inspector');

const path = require('path');

// const {fetch} = require('../node_modules/node-fetch');

// const {fetch} = require('node-fetch');

const axios = require('axios');

const nodemailer = require('nodemailer');


const app = express.Router();

const mongoose = require('./mongoose');

const { Web_info } = require('./mongoose')

app.get('/',(req,res)=>
{
    res.render('index');
});

app.get('/login',(req,res)=>
{
    res.render('login');
});

app.get('/register',(req,res)=>
{
    res.render('register');
});

app.get('/webs',(req,res)=>
{
    res.render('add_website');
});

app.post('/webs',(req,res)=>
{
    console.log('Data posted bro...');

    console.log(req.body);

    console.log('username: '+req.body.username);
    console.log('url: '+req.body.url);
    console.log('webType:'+req.body.web_information);



    const data_web = new Web_info(
        {
            username: req.body.username,
            url: req.body.url,
            webType:req.body.web_information,
            Description:req.body.description,
            Contact:req.body.phone
        });

        function m1() { 




    axios.get("https://"+req.body.url)
        .then((response) => 
        {
            console.log(response.status);
            if(response.status===200) 
            {
                data_web.save((err,data)=>
                {
                    if(err)
                    {
                        console.log(err);
                        res.render('add_website');
                    }
                    else
                    {
                        res.send("Your Website is Posted");
                    }
                });
            }
        })
        .catch((error) => 
        {
            res.send("Sorry Your Website not verified..");
    });

}


m1();

});

app.get('/web-show/:name',(req, res)=>
{
    Web_info.find({webType:req.params.name},(err, data)=>
    {

        if(err)
        {
            res.send(err);
        }
        else
        {
            console.log(data);
            res.render("web_show.ejs",{data:data});
        }
    });   
});


module.exports = app;