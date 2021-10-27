const mongoose  = require('mongoose');

mongoose.connect('mongodb+srv://Nishant:nishantdesai@cluster0.0uizb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })

const connect = mongoose.connection;

connect.on('open', () => {
    console.log('database connected....');
});

const WebDb = new mongoose.Schema({
    username:{type:String,unique:true},
    url:{type:String,unique:true},
    webType:String,
    Description:String,
    Contact:Number
});

const WebInfo = new mongoose.model("website_info",WebDb);

module.exports = 
{
    Web_info: WebInfo
};