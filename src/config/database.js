const mongoose = require('mongoose');

const connect = async () => {
    await mongoose.connect('mongodb+srv://shubhamannpurne:123@cluster0.qt1tf3f.mongodb.net/');
}

module.exports = connect;