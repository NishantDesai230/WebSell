const express = require('express');

const path = require('path');

const app = express.Router();

const mongoose = require('./mongoose');

app.get('/',(req,res)=>
{
    res.render('index');
})

app.get('/login',(req,res)=>
{
    res.render('login');
})

app.get('/register',(req,res)=>
{
    res.render('register');
})

module.exports = app;