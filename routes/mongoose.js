const mongoose  = require('mongoose');

mongoose.connect('mongodb+srv://Nishant:nishantdesai@cluster0.0uizb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })

const connect = mongoose.connection;

connect.on('open', () => {
    console.log('database connected....');
});

module.exports = mongoose;