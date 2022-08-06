const mongoose = require('mongoose');

const comicsSchema = new mongoose.Schema({
    Name: String,
    Logo:String,
    Author: String,
    Category:[String],
    Description: String,
    Content: String,
    TrangThai:Boolean,
    Like:Number,
    DateUp:String,
    IDUserUp:String,

},{collection:'Comic'});
const comics = mongoose.model('Comic', comicsSchema);
module.exports = comics;

