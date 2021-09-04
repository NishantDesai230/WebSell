const express = require('express');

const path = require('path');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public/")))
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs');
console.log(path.join(__dirname, '/routes/app.js'));
app.use('/', require(path.join(__dirname, '/routes/app.js')));

app.listen(port, () => { console.log('server started') })