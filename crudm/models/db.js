const mongoose = require('mongoose');

const url = "mongodb+srv://admin:i6OT9stVFlrsU8aX@cluster0.wydy7.mongodb.net/task";

mongoose.connect(url, {useNewUrlParser:true}, (err) => {
    if(!err) { console.log("MongoDB Connection Succeeded") ; }
    else{
        console.log("An Error Occured");
    }
})

require('./task.model');